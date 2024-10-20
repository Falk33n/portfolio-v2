import { NavBarMenu } from '@/components/nav-bar';
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

export const NavBar = () => {
  return (
    <div className='top-0 left-0 z-[100] fixed bg-background p-4 border-b w-full'>
      <div className='flex justify-between items-center md:mx-auto sm:w-full md:w-[85%] lg:w-[70%]'>
        <nav>
          <Button
            asChild
            variant='outline'
            size='lg'
            className='top-4 left-0 fixed font-semibold transition-all -translate-x-[200px] focus-visible:-translate-x-1.5'
          >
            <Link href='#content'>Skip to the content</Link>
          </Button>
          <header>
            <h1>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant='ghost'
                      className={cn(
                        'flex items-center gap-0 font-medium uppercase',
                        josefinSans.className
                      )}
                    >
                      <Link
                        href='/'
                        aria-label='Go to the homepage.'
                      >
                        <span className='mt-2 text-4xl'>F</span>
                        <span className='mt-1 text-2xl'>alk33n</span>
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
          </header>
        </nav>
        <NavBarMenu />
      </div>
    </div>
  );
};

NavBar.displayName = 'NavBar';
