
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">★</span>
            </div>
            <span className="font-heading text-white text-xl font-semibold letter-spacing-wide">
              T A S T E
            </span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover-gold ${
                isActive('/') ? 'text-gold' : 'text-white'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/food" 
              className={`text-sm font-medium transition-colors hover-gold ${
                isActive('/food') ? 'text-gold' : 'text-white'
              }`}
            >
              FOOD
            </Link>
            <Link 
              to="/drinks" 
              className={`text-sm font-medium transition-colors hover-gold ${
                isActive('/drinks') ? 'text-gold' : 'text-white'
              }`}
            >
              DRINKS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
