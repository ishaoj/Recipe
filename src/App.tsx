import React, { useEffect, useState } from 'react';
import { Search, Wand2, BookOpen, MapPin, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RecipeCard from './components/RecipeCard';
import { featuredRecipes, wizardingRecipes } from './data/recipes';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [candles, setCandles] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);

  const locations = [
    { id: 'great-hall', name: 'Great Hall', color: '#740001' },
    { id: 'hogsmeade', name: 'Hogsmeade', color: '#1A472A' },
    { id: 'kitchen', name: 'Hogwarts Kitchen', color: '#ECB939' },
    { id: 'common-room', name: 'Common Room', color: '#0E1A40' },
  ];

  useEffect(() => {
    const createCandles = () => {
      const newCandles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 50}%`,
          animationDelay: `${Math.random() * 6}s`,
        },
      }));
      setCandles(newCandles);
    };

    const createSparkle = () => {
      const id = Date.now();
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      };
      setSparkles(prev => [...prev, { id, style }]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== id));
      }, 1500);
    };

    createCandles();
    const sparkleInterval = setInterval(createSparkle, 300);
    return () => clearInterval(sparkleInterval);
  }, []);

  const filteredRecipes = selectedLocation
    ? wizardingRecipes.filter(recipe => recipe.location === selectedLocation)
    : wizardingRecipes;

  return (
    <div className={`min-h-screen font-body transition-colors duration-500 ${isDark ? 'dark' : ''}`}>
      {/* Floating Candles */}
      {isDark && candles.map(candle => (
        <div key={candle.id} className="floating-candle" style={candle.style}>
          <div className="candle-light" />
        </div>
      ))}

      {/* Magical Sparkles */}
      {sparkles.map(sparkle => (
        <div key={sparkle.id} className="sparkle" style={sparkle.style} />
      ))}

      {/* Header */}
      <header className="sticky top-0 bg-white/80 dark:bg-hogwarts-background-dark/80 backdrop-blur-sm shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="w-8 h-8 text-hogwarts-gold" />
            <span className="text-2xl font-serif font-bold">Hogwarts Kitchen</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Spellbook</a>
            <a href="#" className="nav-link">Potions</a>
            <a href="#" className="nav-link">About the Wizard</a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search magical recipes..."
                className="wizard-input"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-hogwarts-gold/60" />
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-hogwarts-gold/10 transition-colors"
            >
              {isDark ? (
                <Sun className="w-6 h-6 text-hogwarts-gold" />
              ) : (
                <Moon className="w-6 h-6 text-hogwarts-gold" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center bg-castle overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.div 
          className="relative container mx-auto px-4 h-full flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-2xl text-hogwarts-text-light">
            <h1 className="text-6xl font-serif font-bold mb-4">
              Welcome to the Enchanted Kitchen of Hogwarts
            </h1>
            <p className="text-2xl mb-8 font-body">
              Discover magical recipes from the wizarding world
            </p>
            <button className="spell-btn">
              Begin Your Magical Feast
              <Wand2 className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Magical Locations Filter */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold">Magical Recipes</h2>
          <div className="relative">
            <button
              onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
              className="flex items-center space-x-2 spell-btn"
            >
              <MapPin className="w-5 h-5" />
              <span>{selectedLocation ? locations.find(l => l.id === selectedLocation)?.name : 'All Locations'}</span>
            </button>
            
            <AnimatePresence>
              {isLocationMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-56 rounded-lg bg-white dark:bg-hogwarts-background-dark shadow-xl border border-hogwarts-gold/20"
                >
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setSelectedLocation(null);
                        setIsLocationMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-hogwarts-gold/10 transition-colors"
                    >
                      All Locations
                    </button>
                    {locations.map(location => (
                      <button
                        key={location.id}
                        onClick={() => {
                          setSelectedLocation(location.id);
                          setIsLocationMenuOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-hogwarts-gold/10 transition-colors flex items-center space-x-2"
                      >
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: location.color }}
                        />
                        <span>{location.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold">Featured Enchantments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hogwarts-background-dark text-hogwarts-text-light py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-8 h-8 text-hogwarts-gold" />
                <span className="text-xl font-serif font-bold">Hogwarts Kitchen</span>
              </div>
              <p className="text-hogwarts-text-light/60">
                Where every meal is a magical adventure...
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold mb-4">Magical Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-hogwarts-text-light/60 hover:text-hogwarts-gold transition-colors">
                    About Our Magic
                  </a>
                </li>
                <li>
                  <a href="#" className="text-hogwarts-text-light/60 hover:text-hogwarts-gold transition-colors">
                    Contact the Professors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-hogwarts-text-light/60 hover:text-hogwarts-gold transition-colors">
                    Kitchen Rules
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold mb-4">Recipe Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-hogwarts-text-light/60 hover:text-hogwarts-gold transition-colors">
                    Great Hall Feasts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-hogwarts-text-light/60 hover:text-hogwarts-gold transition-colors">
                    Magical Potions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-hogwarts-text-light/60 hover:text-hogwarts-gold transition-colors">
                    Honeydukes Treats
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold mb-4">Join Our Owl Post</h3>
              <p className="text-hogwarts-text-light/60 mb-4">
                Receive magical recipes by owl weekly!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your magical address..."
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-hogwarts-gold/20 focus:outline-none focus:ring-2 focus:ring-hogwarts-gold/50"
                />
                <button className="bg-hogwarts-gold text-hogwarts-background-dark px-4 py-2 rounded-r-lg hover:bg-hogwarts-gold/80 transition-colors font-bold">
                  Send Owl
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-hogwarts-text-light/10">
            <p className="text-hogwarts-text-light/60">Mischief Managed!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;