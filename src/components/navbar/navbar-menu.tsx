'use client';

import { ThemeToggle } from '@/components/navbar';
import { PageLinks, SocialMediaLinks } from '@/components/shared';
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { useWindowSize } from '@/hooks';
import { cn } from '@/lib';
import { Menu, X } from 'lucide-react';
import React from 'react';

export const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { width } = useWindowSize();

  if (!width) return <Skeleton className='md:w-96 size-10' />;
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
      {(isMenuOpen || width >= 768) && (
        <NavigationMenu
          aria-label='Main navigation.'
          id='navbar-menu'
          className='md:relative top-[4.4725rem] md:top-[unset] -right-0.5 md:right-[unset] z-[100] fixed flex md:flex-row flex-col items-center gap-x-1 md:border-0 bg-background p-4 md:p-0 pt-0 border-b border-l md:rounded-none rounded-bl-md min-w-[100px] animate-slide-in md:animate-none'
        >
          <NavigationMenuList className='flex md:flex-row flex-col items-end md:items-center gap-x-1 gap-y-3'>
            <PageLinks placement='navbar' />
            <SocialMediaLinks placement='navbar' />
            <NavigationMenuItem role='menuitem'>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </>
  );
};

NavbarMenu.displayName = 'NavbarMenu';
