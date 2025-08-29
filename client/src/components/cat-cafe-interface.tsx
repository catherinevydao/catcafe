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
    name: 'Viet Coffee',
    icon: '☕',
    color: '#8B4513',
    description: 'A perfect brew to start your day!'
  },
  matcha: {
    id: 'matcha',
    name: 'Matcha Latte',
    icon: '🍵',
    color: '#22c55e',
    description: 'Smooth and creamy matcha goodness!'
  },
  surprise: {
    id: 'surprise',
    name: 'Martini',
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
    
    // Different preparation messages for each drink
    if (drinkType === 'coffee') {
      setCatDialog("grinding the beans... doing some latte art.. meow..");
    } else if (drinkType === 'matcha') {
      setCatDialog("sifting the matcha... adding oat milk cause I know you're lactose... meow..");
    } else if (drinkType === 'surprise') {
      setCatDialog("umm... okay... meow?");
    }
    
    // Simulate drink preparation time
    setTimeout(() => {
      setCurrentDrink(drink);
      
      // Different completion messages for each drink
      if (drinkType === 'coffee') {
        setCatDialog("enjoy your viet coffee, Cảm ơn!");
      } else if (drinkType === 'matcha') {
        setCatDialog("enjoy your matcha you performative!");
      } else if (drinkType === 'surprise') {
        setCatDialog("what day drinking??? lowkey same meow");
      }
      
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
