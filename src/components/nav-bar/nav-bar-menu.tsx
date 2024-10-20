'use client';

import { NavBarLinks } from '@/components/nav-bar';
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { useWindowSize } from '@/hooks';
import { cn } from '@/lib';
import { Menu, X } from 'lucide-react';
import React from 'react';

export const NavBarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { width } = useWindowSize();

  if (!width) return null;
  return (
    <>
      {width < 768 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-controls='navbar-menu'
                aria-expanded={isMenuOpen}
                className='relative'
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <Menu
                  aria-hidden
                  className={cn(
                    'transition-all duration-300 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2',
                    isMenuOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-150'
                  )}
                />
                <X
                  aria-hidden
                  className={cn(
                    'transition-all duration-300 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2',
                    !isMenuOpen ? '-rotate-180 scale-0' : 'rotate-0 scale-150'
                  )}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={8}
              aria-hidden
            >
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {(isMenuOpen || width >= 768) && <NavBarLinks />}
    </>
  );
};

NavBarMenu.displayName = 'NavBarMenu';
