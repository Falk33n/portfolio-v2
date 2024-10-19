import { NavBarMenu } from '@/components/nav-bar';
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className='top-0 left-0 fixed bg-background p-4 border-b w-full'>
      <div className='flex justify-between items-center md:mx-auto sm:w-full md:w-[85%] lg:w-[70%]'>
        <h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant='ghost'
                  className='gap-0'
                >
                  <Link
                    href='/'
                    aria-label='Go to the homepage'
                    className='flex items-center gap-0 font-medium uppercase'
                  >
                    <span className='text-4xl'>F</span>
                    <span className='text-2xl'>alk33n</span>
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
        </h1>
        <NavBarMenu />
      </div>
    </nav>
  );
};

NavBar.displayName = 'NavBar';
