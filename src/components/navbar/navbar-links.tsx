import { ThemeToggle } from '@/components/navbar';
import { PageLinks, SocialMediaLinks } from '@/components/shared';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui';

export const NavbarLinks = () => {
  return (
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
  );
};

NavbarLinks.displayName = 'NavbarLinks';
