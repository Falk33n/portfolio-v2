import { NavbarMenu } from '@/components/navbar';
import { Logo } from '@/components/shared';
import { Button } from '@/components/ui';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='bg-background p-4 border-b w-full'>
      <div className='flex justify-between items-center sm:mx-auto sm:w-[90%] md:w-[80%] lg:w-[65%]'>
        <Button
          asChild
          variant='outline'
          size='lg'
          className='top-4 left-0 fixed font-semibold transition-all -translate-x-[200px] focus-visible:-translate-x-1.5'
        >
          <Link href='#content'>Skip to the content</Link>
        </Button>
        <Logo placement='navbar' />
        <NavbarMenu />
      </div>
    </div>
  );
};

Navbar.displayName = 'Navbar';
