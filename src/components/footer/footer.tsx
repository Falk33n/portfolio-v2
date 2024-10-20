import { Logo, PageLinks, SocialMediaLinks } from '@/components/shared';
import { NavigationMenu, NavigationMenuList } from '@/components/ui';

export const Footer = () => {
  return (
    <footer className='bg-accent p-4 w-full'>
      <div className='flex justify-between items-center sm:mx-auto sm:w-[90%] md:w-[80%] lg:w-[65%]'>
        <div className='flex flex-col justify-center items-center gap-y-1'>
          <Logo placement='footer' />
          <p className='font-light text-center text-muted-foreground text-sm'>
            Created by Tim Falk
          </p>
        </div>
        <NavigationMenu aria-label='Footer navigation.'>
          <NavigationMenuList className='flex md:flex-row flex-col justify-center items-center md:gap-x-1'>
            <PageLinks placement='footer' />
            <SocialMediaLinks placement='footer' />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
