import { Drink } from "./cat-cafe-interface";

interface DrinkCounterProps {
  currentDrink: Drink | null;
  isPreparingDrink: boolean;
}

export function DrinkCounter({ currentDrink, isPreparingDrink }: DrinkCounterProps) {
  const renderContent = () => {
    if (isPreparingDrink) {
      return (
        <div className="text-cafe-muted text-lg preparing-animation" data-testid="drink-preparing">
          <div className="mb-4 text-4xl">👨‍🍳</div>
          <p>Preparing your<br/>drink...</p>
        </div>
      );
    }

    if (currentDrink) {
      return (
        <div className="drink-animation text-center" data-testid="drink-ready">
          <div 
            className="text-6xl mb-4" 
            style={{ color: currentDrink.color }}
          >
            {currentDrink.icon}
          </div>
          <h3 className="font-bold text-xl text-cafe-brown mb-2">
            {currentDrink.name}
          </h3>
          <p className="text-cafe-muted text-sm">
            {currentDrink.description}
          </p>
        </div>
      );
    }

    return (
      <div className="text-cafe-muted text-xl" data-testid="drink-waiting">
        <div className="mb-4 text-4xl">☕</div>
        <p>Your drink will<br/>appear here!</p>
      </div>
    );
  };

  return (
    <div className="sketch-border bg-card p-8 w-80 h-80 flex items-center justify-center">
      <div className="text-center">
        {renderContent()}
      </div>
    </div>
  );
}
