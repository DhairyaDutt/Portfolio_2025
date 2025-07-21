import { useEffect, useRef, useState } from 'react';

interface TorchEffectProps {
  children: React.ReactNode;
  onTurnOn: () => void;
}

export const TorchEffect = ({ children, onTurnOn }: TorchEffectProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Generate random button position on mount
  useEffect(() => {
    const randomX = Math.random() * 80 + 10; // 10% to 90%
    const randomY = Math.random() * 80 + 10; // 10% to 90%
    setButtonPosition({ x: randomX, y: randomY });
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });

      if (overlayRef.current) {
        overlayRef.current.style.setProperty('--mouse-x', `${x}%`);
        overlayRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTurnOn = () => {
    setIsVisible(false);
    setTimeout(() => {
      onTurnOn();
    }, 500);
  };

  // Check if button is within torch radius
  const isButtonInTorch = () => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - buttonPosition.x, 2) + 
      Math.pow(mousePosition.y - buttonPosition.y, 2)
    );
    return distance < 15; // Adjust this value to change torch radius
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {children}
      
      {/* Turn On Button */}
      <button
        onClick={handleTurnOn}
        className={`pixel-button fixed z-[1001] transition-opacity duration-300 ${
          isButtonInTorch() ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${buttonPosition.x}%`,
          top: `${buttonPosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        Turn On
      </button>

      {/* Torch Overlay */}
      {isVisible && (
        <div
          ref={overlayRef}
          className="torch-overlay"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        />
      )}
    </div>
  );
};