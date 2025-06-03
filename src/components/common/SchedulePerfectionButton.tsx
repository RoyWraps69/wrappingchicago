
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar } from 'lucide-react';

interface SchedulePerfectionButtonProps {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  showIcon?: boolean;
  iconType?: 'message' | 'calendar';
}

const SchedulePerfectionButton: React.FC<SchedulePerfectionButtonProps> = ({
  variant = 'default',
  size = 'default',
  className = '',
  showIcon = true,
  iconType = 'message'
}) => {
  const Icon = iconType === 'calendar' ? Calendar : MessageSquare;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`bg-brand-red hover:bg-red-700 text-white ${className}`}
    >
      <Link to="/contact" className="inline-flex items-center">
        {showIcon && <Icon className="mr-2 h-4 w-4" />}
        Schedule Perfection Now!
      </Link>
    </Button>
  );
};

export default SchedulePerfectionButton;
