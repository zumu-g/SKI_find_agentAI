import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-text/10 mb-4">404</div>
        <h1 className="text-3xl font-bold text-text mb-3 tracking-tight">Page not found</h1>
        <p className="text-text-secondary font-normal mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary" size="lg">
          <Home size={18} /> Back to Home
        </Button>
      </div>
    </div>
  );
}
