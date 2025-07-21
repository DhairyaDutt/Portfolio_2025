import { cn } from '@/lib/utils';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'terminal' | 'project' | 'glow';
  hover?: boolean;
}

export const PixelCard = ({ 
  children, 
  className, 
  variant = 'default', 
  hover = false 
}: PixelCardProps) => {
  const variants = {
    default: 'bg-card border-2 border-border',
    terminal: 'terminal-card',
    project: 'bg-gradient-to-br from-card to-muted border-2 border-primary/30',
    glow: 'bg-card border-2 border-primary'
  };

  return (
    <div 
      className={cn(
        'relative p-6 transition-all duration-300',
        variants[variant],
        hover && 'hover:transform hover:scale-105 hover:shadow-lg cursor-pointer',
        'scanlines',
        variant === 'terminal' && !className?.includes('no-controls') && 'with-controls',
        className
      )}
    >
      {children}
    </div>
  );
};