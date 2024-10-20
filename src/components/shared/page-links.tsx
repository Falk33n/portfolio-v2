import { SharedPlacement } from '@/components/shared';
import { Button, NavigationMenuItem } from '@/components/ui';
import { cn } from '@/lib';
import Link from 'next/link';

export const PageLinks = ({ placement }: SharedPlacement) => {
  return (
    <>
      <NavigationMenuItem role='menuitem'>
        <Button
          asChild
          variant='ghost'
          className={cn(
            'text-base',
            placement === 'footer' && 'hover:bg-background text-sm'
          )}
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
          className={cn(
            'text-base',
            placement === 'footer' && 'hover:bg-background text-sm'
          )}
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
          className={cn(
            'text-base',
            placement === 'footer' && 'hover:bg-background text-sm'
          )}
        >
          <Link
            href='#contact'
            aria-label='Go to the contact me page.'
          >
            Contact
          </Link>
        </Button>
      </NavigationMenuItem>
    </>
  );
};

PageLinks.displayName = 'PageLinks';
