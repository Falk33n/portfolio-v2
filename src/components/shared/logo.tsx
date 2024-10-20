import { SharedPlacement } from '@/components/shared';
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { cn } from '@/lib';
import { Josefin_Sans } from 'next/font/google';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  weight: ['500'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['normal'],
});

export const Logo = ({ placement }: SharedPlacement) => {
  const Comp = placement === 'navbar' ? 'h1' : 'h2';

  return (
    <header>
      <Comp>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant='ghost'
                className={cn(
                  'flex items-center gap-0 font-medium uppercase animate-fade-in',
                  josefinSans.className,
                  placement === 'footer' && 'hover:bg-background'
                )}
              >
                <Link
                  href='/'
                  aria-label='Go to the homepage.'
                >
                  <span
                    aria-hidden
                    className={cn(
                      'mt-2',
                      placement === 'navbar' ? 'text-4xl' : 'text-3xl'
                    )}
                  >
                    F
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      'mt-1',
                      placement === 'navbar' ? 'text-2xl' : 'text-xl'
                    )}
                  >
                    alk33n
                  </span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={8}
              aria-hidden
            >
              Go to the homepage
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Comp>
    </header>
  );
};

Logo.displayName = 'Logo';
