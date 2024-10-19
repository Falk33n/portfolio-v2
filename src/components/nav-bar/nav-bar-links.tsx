import { ThemeToggle } from '@/components';
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';
import { RiLinkedinLine } from 'react-icons/ri';

export const NavBarLinks = () => {
  return (
    <NavigationMenu
      id='navbar-menu'
      className='flex items-center gap-x-1'
    >
      <NavigationMenuList className='flex items-center gap-x-1'>
        <NavigationMenuItem>
          <Button
            asChild
            variant='ghost'
            className='text-base'
          >
            <Link
              href=''
              aria-label="Go to the author's resume"
              target='_blank'
            >
              Resume
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asChild
            variant='ghost'
            className='text-base'
          >
            <Link
              href='#about'
              aria-label='Go to the about me page'
            >
              About
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asChild
            variant='ghost'
            className='text-base'
          >
            <Link
              href='#contact'
              aria-label='Go to the contact me page'
            >
              Contact
            </Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className='flex items-center gap-x-1'>
        <NavigationMenuItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant='ghost'
                  size='icon'
                >
                  <Link
                    href='https://www.linkedin.com/in/timfalkwebbdev/'
                    target='_blank'
                    aria-label="Go to the author's LinkedIn page."
                  >
                    <RiLinkedinLine
                      className='scale-110'
                      aria-hidden
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={8}
                aria-hidden
              >
                Go to the author's LinkedIn page
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant='ghost'
                  size='icon'
                >
                  <Link
                    href='https://github.com/Falk33n'
                    target='_blank'
                    aria-label="Go to author's GitHub page."
                  >
                    <LuGithub
                      className='scale-110'
                      aria-hidden
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={8}
                aria-hidden
              >
                Go to author's GitHub page
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

NavBarLinks.displayName = 'NavBarLinks';
