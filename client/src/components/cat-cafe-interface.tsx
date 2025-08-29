import { useState } from "react";
import { CatServer } from "./cat-server";
import { DrinkButtons } from "./drink-buttons";
import { DrinkCounter } from "./drink-counter";

export interface Drink {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const drinks: Record<string, Drink> = {
  coffee: {
    id: 'coffee',
    name: 'Cup of Coffee',
    icon: '☕',
    color: '#8B4513',
    description: 'A perfect brew to start your day!'
  },
  matcha: {
    id: 'matcha',
    name: 'Matcha Latte',
    icon: '🍵',
    color: '#90EE90',
    description: 'Smooth and creamy matcha goodness!'
  },
  surprise: {
    id: 'surprise',
    name: 'Espresso Martini',
    icon: '🍸',
    color: '#4169E1',
    description: 'A delightful surprise just for you!'
  }
};

export function CatCafeInterface() {
  const [currentDrink, setCurrentDrink] = useState<Drink | null>(null);
  const [isPreparingDrink, setIsPreparingDrink] = useState(false);
  const [catDialog, setCatDialog] = useState("Meow! I'm your cat server, meow! What can I get for you?");

  const handleOrderDrink = async (drinkType: string) => {
    if (isPreparingDrink) return;
    
    const drink = drinks[drinkType];
    if (!drink) return;

    setIsPreparingDrink(true);
    setCatDialog("Purr... Let me prepare that for you! *whiskers twitch*");
    
    // Simulate drink preparation time
    setTimeout(() => {
      setCurrentDrink(drink);
      setCatDialog("Meow! Your drink is ready! Enjoy! 😸");
      setIsPreparingDrink(false);
      
      // Reset dialog after a moment
      setTimeout(() => {
        setCatDialog("Meow! I'm your cat server, meow! What can I get for you?");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cafe-brown mb-8">Welcome to Cat Café</h1>
        
        {/* Drink Selection Buttons */}
        <DrinkButtons 
          onOrderDrink={handleOrderDrink}
          isPreparingDrink={isPreparingDrink}
        />
      </div>

      {/* Main Cafe Counter Section */}
      <div className="flex flex-col items-center justify-center gap-8">
        
        {/* Cat Server */}
        <div>
          <CatServer dialog={catDialog} isPreparingDrink={isPreparingDrink} />
        </div>

        {/* Drink Counter */}
        <div>
          <DrinkCounter 
            currentDrink={currentDrink}
            isPreparingDrink={isPreparingDrink}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-cafe-muted">
        <p className="font-medium">🐾 Made with love at Cat Café 🐾</p>
      </div>
    </div>
  );
}
