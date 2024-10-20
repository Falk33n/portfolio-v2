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
      aria-label='Main navigation.'
      id='navbar-menu'
      className='md:relative top-[4.4725rem] md:top-[unset] -right-0.5 md:right-[unset] fixed flex md:flex-row flex-col items-center gap-x-1 md:border-0 bg-background p-4 md:p-0 pt-0 border-b border-l md:rounded-none rounded-bl-md min-w-[100px] animate-slide-in md:animate-none'
    >
      <NavigationMenuList className='flex md:flex-row flex-col items-end md:items-center gap-x-1 gap-y-3'>
        <NavigationMenuItem role='menuitem'>
          <Button
            asChild
            variant='ghost'
            className='text-base'
          >
            <Link
              href=''
              aria-label="Go to the author's resume."
              target='_blank'
            >
              Resume
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem role='menuitem'>
          <Button
            asChild
            variant='ghost'
            className='text-base'
          >
            <Link
              href='#about'
              aria-label='Go to the about me page.'
            >
              About
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem role='menuitem'>
          <Button
            asChild
            variant='ghost'
            className='text-base'
          >
            <Link
              href='#contact'
              aria-label='Go to the contact me page.'
            >
              Contact
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem role='menuitem'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant='ghost'
                  size='icon'
                  className='flex-row-reverse px-4 py-2 md:p-0 w-fit md:w-10 text-base'
                >
                  <Link
                    href='https://www.linkedin.com/in/timfalkwebbdev/'
                    target='_blank'
                    aria-label="Go to the author's LinkedIn page."
                  >
                    <span
                      aria-hidden
                      className='md:hidden'
                    >
                      LinkedIn
                    </span>
                    <RiLinkedinLine aria-hidden />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={8}
                aria-hidden
              >
                Go to the author&apos;s LinkedIn page
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavigationMenuItem>
        <NavigationMenuItem role='menuitem'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant='ghost'
                  size='icon'
                  className='flex-row-reverse px-4 py-2 md:p-0 w-fit md:w-10 text-base'
                >
                  <Link
                    href='https://github.com/Falk33n'
                    target='_blank'
                    aria-label="Go to author's GitHub page."
                  >
                    <span
                      aria-hidden
                      className='md:hidden'
                    >
                      GitHub
                    </span>
                    <LuGithub aria-hidden />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={8}
                aria-hidden
              >
                Go to author&apos;s GitHub page
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavigationMenuItem>
        <NavigationMenuItem role='menuitem'>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

NavBarLinks.displayName = 'NavBarLinks';
