interface DrinkButtonsProps {
  onOrderDrink: (drinkType: string) => void;
  isPreparingDrink: boolean;
}

export function DrinkButtons({ onOrderDrink, isPreparingDrink }: DrinkButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      <button 
        className="drink-button sketch-border bg-card text-cafe-brown px-8 py-4 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onOrderDrink('coffee')}
        disabled={isPreparingDrink}
        data-testid="button-coffee"
      >
        <div className="flex items-center gap-3">
          {/* Simple coffee cup icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
            <line x1="6" y1="1" x2="6" y2="4"/>
            <line x1="10" y1="1" x2="10" y2="4"/>
            <line x1="14" y1="1" x2="14" y2="4"/>
          </svg>
          <span>Viet Coffee</span>
        </div>
      </button>

      <button 
        className="drink-button sketch-border bg-card text-cafe-brown px-8 py-4 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onOrderDrink('matcha')}
        disabled={isPreparingDrink}
        data-testid="button-matcha"
      >
        <div className="flex items-center gap-3">
          {/* Matcha latte cup with leaf design */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
            <path d="M6 12c2-2 6-2 8 0 2 2 2 6 0 6-2 0-6-4-8-6z" fill="#22c55e" opacity="0.7"/>
            <circle cx="10" cy="11" r="1" fill="#16a34a"/>
            <circle cx="12" cy="13" r="0.5" fill="#16a34a"/>
          </svg>
          <span>Matcha Latte</span>
        </div>
      </button>

      <button 
        className="drink-button sketch-border bg-cafe-accent text-white px-8 py-4 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onOrderDrink('surprise')}
        disabled={isPreparingDrink}
        data-testid="button-surprise"
      >
        <div className="flex items-center gap-3">
          {/* Cocktail glass icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <path d="M5 7l14 0"/>
            <path d="M5 7l5 8v4h4v-4l5-8"/>
            <circle cx="12" cy="19" r="1"/>
            <path d="M8 10l8 0" stroke="#fff" strokeWidth="1.5" opacity="0.7"/>
            <circle cx="10" cy="8" r="0.5" fill="#fff" opacity="0.8"/>
            <circle cx="14" cy="8" r="0.5" fill="#fff" opacity="0.8"/>
          </svg>
          <span>Surprise Me</span>
        </div>
      </button>
    </div>
  );
}
