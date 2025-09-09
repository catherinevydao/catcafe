import express from 'express';
import { storage } from '../server/storage.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add your API routes here
// For example:
// app.get('/api/users', async (req, res) => {
//   const users = await storage.getUsers();
//   res.json(users);
// });

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Cat Café API is running!' });
});

// Catch-all handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;