import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, Wand2, ChefHat, ScrollText, X, Minimize2 } from 'lucide-react';
import type { Recipe } from '../data/recipes';
import PotionBubble from './PotionBubble';
import SpellEffect from './SpellEffect';
import MagicalText from './MagicalText';

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

export default function RecipeDetail({ recipe, onClose }: RecipeDetailProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSpell, setShowSpell] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);

  const handleNextStep = () => {
    if (recipe.steps && currentStep < recipe.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowSpell(true);
      setTimeout(() => setShowSpell(false), 1000);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleMinimize = () => {
    setIsMinimizing(true);
    setTimeout(onClose, 500); // Wait for animation to complete
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: isMinimizing ? 0.8 : 1,
          x: isMinimizing ? '100%' : 0
        }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-hogwarts-background-light dark:bg-hogwarts-background-dark shadow-2xl">
          <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
            <button
              onClick={handleMinimize}
              className="p-2 rounded-full hover:bg-hogwarts-gold/10 transition-colors text-hogwarts-gold"
              title="Minimize"
            >
              <Minimize2 className="w-6 h-6" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-hogwarts-gold/10 transition-colors text-hogwarts-gold"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Recipe Header */}
          <div className="relative h-64 overflow-hidden rounded-t-xl">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <MagicalText>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">{recipe.title}</h2>
              </MagicalText>
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{recipe.cookTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{recipe.servings} servings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wand2 className="w-5 h-5" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Description */}
            <MagicalText delay={0.2} className="text-lg mb-8">
              {recipe.description}
            </MagicalText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div className="relative">
                <MagicalText delay={0.3}>
                  <h3 className="text-2xl font-serif font-bold mb-4 flex items-center">
                    <ChefHat className="w-6 h-6 mr-2 text-hogwarts-gold" />
                    Magical Ingredients
                  </h3>
                  <ul className="space-y-2">
                    {recipe.ingredients?.map((ingredient, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-hogwarts-gold" />
                        <span>{ingredient}</span>
                      </motion.li>
                    ))}
                  </ul>
                </MagicalText>
                <PotionBubble color="#D4AF37" bubbleCount={5} />
              </div>

              {/* Instructions */}
              <div className="relative">
                <MagicalText delay={0.4}>
                  <h3 className="text-2xl font-serif font-bold mb-4 flex items-center">
                    <ScrollText className="w-6 h-6 mr-2 text-hogwarts-gold" />
                    Magical Instructions
                  </h3>
                  {recipe.steps && (
                    <div className="space-y-6">
                      <div className="relative p-6 rounded-lg bg-hogwarts-gold/5 border border-hogwarts-gold/20">
                        <span className="absolute top-2 right-2 text-sm text-hogwarts-gold/60">
                          Step {currentStep + 1} of {recipe.steps.length}
                        </span>
                        <p className="text-lg">{recipe.steps[currentStep].description}</p>
                        <SpellEffect isActive={showSpell} />
                      </div>
                      <div className="flex justify-between">
                        <button
                          onClick={handlePrevStep}
                          disabled={currentStep === 0}
                          className="spell-btn disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous Step
                        </button>
                        <button
                          onClick={handleNextStep}
                          disabled={currentStep === recipe.steps.length - 1}
                          className="spell-btn disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}
                </MagicalText>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}