interface CatServerProps {
  dialog: string;
  isPreparingDrink: boolean;
}

export function CatServer({ dialog, isPreparingDrink }: CatServerProps) {
  return (
    <div className="text-center">
      {/* Speech Bubble */}
      <div className="speech-bubble mb-6 max-w-sm mx-auto">
        <p 
          className={`text-cafe-brown font-medium ${isPreparingDrink ? 'preparing-animation' : ''}`}
          data-testid="cat-dialog"
        >
          {dialog}
        </p>
      </div>

      {/* Cat Character */}
      <div className="relative" data-testid="cat-character">
        <svg 
          width="200" 
          height="240" 
          viewBox="0 0 200 240" 
          className="mx-auto cat-hover-effect"
        >
          {/* Apron */}
          <path 
            d="M60 120 L60 200 L140 200 L140 120 L120 110 L80 110 Z" 
            fill="var(--cafe-cream)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          
          {/* Apron strings */}
          <path d="M80 110 Q70 100 60 90" stroke="var(--cafe-brown)" strokeWidth="2" fill="none"/>
          <path d="M120 110 Q130 100 140 90" stroke="var(--cafe-brown)" strokeWidth="2" fill="none"/>
          
          {/* Cat body */}
          <ellipse 
            cx="100" 
            cy="140" 
            rx="45" 
            ry="55" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          
          {/* Cat head */}
          <circle 
            cx="100" 
            cy="80" 
            r="35" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          
          {/* Cat ears */}
          <path 
            d="M75 55 L85 35 L95 55 Z" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          <path 
            d="M105 55 L115 35 L125 55 Z" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          
          {/* Inner ears */}
          <path d="M80 50 L87 40 L90 50 Z" fill="var(--cafe-accent)" opacity="0.6"/>
          <path d="M110 50 L113 40 L120 50 Z" fill="var(--cafe-accent)" opacity="0.6"/>
          
          {/* Cat eyes */}
          <circle cx="88" cy="75" r="8" fill="black"/>
          <circle cx="112" cy="75" r="8" fill="black"/>
          <circle cx="90" cy="73" r="3" fill="white"/>
          <circle cx="114" cy="73" r="3" fill="white"/>
          
          {/* Cat nose */}
          <path d="M100 85 L95 90 L105 90 Z" fill="var(--cafe-accent)"/>
          
          {/* Cat mouth */}
          <path d="M100 90 Q95 95 90 90" stroke="var(--cafe-brown)" strokeWidth="2" fill="none"/>
          <path d="M100 90 Q105 95 110 90" stroke="var(--cafe-brown)" strokeWidth="2" fill="none"/>
          
          {/* Cat arms */}
          <ellipse 
            cx="65" 
            cy="120" 
            rx="12" 
            ry="25" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          <ellipse 
            cx="135" 
            cy="120" 
            rx="12" 
            ry="25" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          
          {/* Cat paws */}
          <circle 
            cx="65" 
            cy="140" 
            r="8" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          <circle 
            cx="135" 
            cy="140" 
            r="8" 
            fill="var(--cafe-light)"
            stroke="var(--cafe-brown)" 
            strokeWidth="3"
          />
          
          {/* Cat tail (animated) */}
          <path 
            className="cat-tail" 
            d="M145 160 Q165 140 175 120 Q185 100 180 80" 
            stroke="var(--cafe-brown)" 
            strokeWidth="8" 
            fill="none" 
            strokeLinecap="round"
          />
          
          {/* Apron pocket */}
          <rect 
            x="85" 
            y="150" 
            width="30" 
            height="25" 
            rx="5" 
            fill="var(--cafe-background)"
            stroke="var(--cafe-brown)" 
            strokeWidth="2"
          />
          
          {/* Whiskers */}
          <line x1="60" y1="78" x2="80" y2="80" stroke="var(--cafe-brown)" strokeWidth="2"/>
          <line x1="60" y1="85" x2="80" y2="85" stroke="var(--cafe-brown)" strokeWidth="2"/>
          <line x1="120" y1="80" x2="140" y2="78" stroke="var(--cafe-brown)" strokeWidth="2"/>
          <line x1="120" y1="85" x2="140" y2="85" stroke="var(--cafe-brown)" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
}
