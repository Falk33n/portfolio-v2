'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

const themeStates = {
  isMenuOpen: false,
  isLight: false,
  isDark: false,
  isSystem: true,
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [states, setStates] = React.useState(themeStates);

  React.useEffect(() => {
    setStates({
      isMenuOpen: states.isMenuOpen,
      isLight: theme === 'light',
      isDark: theme === 'dark',
      isSystem: theme === 'system',
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <TooltipProvider>
      <DropdownMenu
        onOpenChange={(isOpen) =>
          setStates((prev) => ({ ...prev, isMenuOpen: isOpen }))
        }
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                aria-haspopup='menu'
                aria-expanded={states.isMenuOpen}
                className='flex-row-reverse px-4 py-2 md:p-0 w-fit md:w-10 text-base'
              >
                <span
                  aria-hidden
                  className='md:hidden'
                >
                  Theme
                </span>
                <Sun
                  aria-hidden
                  className='block dark:hidden'
                />
                <Moon
                  aria-hidden
                  className='dark:block hidden'
                />
                <span className='sr-only'>Toggle the theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent
            sideOffset={8}
            aria-hidden
          >
            Toggle the theme
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent
          align='end'
          sideOffset={8}
        >
          <DropdownMenuLabel>Toggle the theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            className='cursor-pointer'
            disabled={states.isLight}
            checked={states.isLight}
            onCheckedChange={() => setTheme('light')}
          >
            Light
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className='cursor-pointer'
            disabled={states.isDark}
            checked={states.isDark}
            onCheckedChange={() => setTheme('dark')}
          >
            Dark
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className='cursor-pointer'
            disabled={states.isSystem}
            checked={states.isSystem}
            onCheckedChange={() => setTheme('system')}
          >
            System
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
