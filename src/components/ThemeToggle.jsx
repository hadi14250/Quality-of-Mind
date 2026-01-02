import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-slider">
        <img
          src={theme === 'dark' ? '/images/Logo-White.png' : '/images/Logo-Black.png'}
          alt="Theme toggle"
          className="toggle-icon"
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
