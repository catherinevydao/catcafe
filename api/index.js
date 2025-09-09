export default async function handler(req, res) {
  // Set CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Simple routing based on URL path
  const { url, method } = req;
  
  // Health check endpoint
  if (url === '/api/health' && method === 'GET') {
    res.status(200).json({ 
      status: 'OK', 
      message: 'Cat Café API is running!',
      timestamp: new Date().toISOString()
    });
    return;
  }

  // Add more API routes here as needed
  // For example:
  // if (url === '/api/users' && method === 'GET') {
  //   // Handle get users
  //   res.status(200).json({ users: [] });
  //   return;
  // }

  // Default response for unmatched routes
  res.status(404).json({ 
    error: 'Route not found',
    path: url,
    method 
  });
}