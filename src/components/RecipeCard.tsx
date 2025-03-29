import React, { useState } from 'react';
import { Clock, Users, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import RecipeDetail from './RecipeDetail';
import type { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [playHover] = useSound('/sounds/sparkle.mp3', { volume: 0.5 });
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div 
        className="parchment-card group overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        onHoverStart={() => playHover()}
        onClick={() => setShowDetail(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {recipe.category && (
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-hogwarts-gold/80 text-hogwarts-brown text-sm font-serif">
              {recipe.category}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-serif font-bold mb-2">{recipe.title}</h3>
          <p className="text-hogwarts-text-secondary dark:text-hogwarts-text-light/80 mb-4 line-clamp-2">
            {recipe.description}
          </p>
          <div className="flex items-center justify-between text-sm text-hogwarts-text-secondary dark:text-hogwarts-text-light/60">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center space-x-1">
              <Wand2 className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          <button className="spell-btn w-full mt-4 text-center py-2">
            View Recipe
          </button>
        </div>
      </motion.div>

      {showDetail && (
        <RecipeDetail recipe={recipe} onClose={() => setShowDetail(false)} />
      )}
    </>
  );
};

export default RecipeCard;