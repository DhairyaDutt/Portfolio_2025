import { TorchEffect } from '@/components/TorchEffect';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleTurnOn = () => {
    navigate('/portfolio');
  };

  return (
    <TorchEffect onTurnOn={handleTurnOn}>
      <div 
        className="min-h-screen bg-black flex items-center justify-center relative"
        style={{
          backgroundImage: `url(lovable-uploads/6a2a7baa-b45f-43b1-987a-1dc481c1f085.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for mystery effect */}
        <div className="absolute inset-0 bg-black/80" />
        
        {/* Tagline */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pixel-cyan pixel-glow pixel-flicker mb-4">
            Find the switch
          </h1>
          <p className="text-xl md:text-2xl text-pixel-yellow pixel-glow">
            to reveal Dhairya's world
          </p>
          <div className="mt-8 text-sm text-muted-foreground animate-pulse">
            Move your mouse to explore...
          </div>
        </div>

        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pixel-cyan rounded-full pixel-flicker"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </TorchEffect>
  );
};

export default Landing;