/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hogwarts': {
          parchment: '#F5E6D3',
          brown: '#2A1810',
          gold: '#D4AF37',
          emerald: '#2D5D4B',
          burgundy: '#800020',
          text: {
            primary: '#1A1A1A',
            secondary: '#4A4A4A',
            light: '#F8F8F8'
          },
          background: {
            light: '#FDF8F3',
            dark: '#1F1A17'
          }
        }
      },
      backgroundImage: {
        'parchment': "url('https://images.unsplash.com/photo-1524364824605-104c177608c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        'castle': "url('https://images.unsplash.com/photo-1533673892786-4d8c2876fba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      },
      fontFamily: {
        serif: ['Cinzel Decorative', 'serif'],
        body: ['Cormorant Garamond', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s linear infinite',
        'candlelight': 'candlelight 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: 1, transform: 'scale(1) rotate(180deg)' }
        },
        candlelight: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' }
        }
      }
    }
  },
  plugins: [],
};