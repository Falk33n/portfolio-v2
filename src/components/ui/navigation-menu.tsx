import { cn } from '@/lib/utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

type NavigationMenuType = ElementRef<typeof NavigationMenuPrimitive.Root>;
type NavigationMenuProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
>;

export const NavigationMenu = forwardRef<
  NavigationMenuType,
  NavigationMenuProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

type NavigationMenuListType = ElementRef<typeof NavigationMenuPrimitive.List>;
type NavigationMenuListProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.List
>;

export const NavigationMenuList = forwardRef<
  NavigationMenuListType,
  NavigationMenuListProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    role='menu'
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className
    )}
    {...props}
  />
));

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navigationMenuTriggerStyle = cva(
  'inline-flex justify-center items-center bg-background data-[state=open]:bg-accent/50 hover:bg-accent focus:bg-accent data-[active]:bg-accent/50 disabled:opacity-50 px-4 py-2 rounded-md w-max h-10 font-medium text-sm hover:text-accent-foreground focus:text-accent-foreground transition-colors disabled:pointer-events-none group focus:outline-none'
);

type NavigationMenuTriggerType = ElementRef<
  typeof NavigationMenuPrimitive.Trigger
>;
type NavigationMenuTriggerProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Trigger
>;

export const NavigationMenuTrigger = forwardRef<
  NavigationMenuTriggerType,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}
    <ChevronDown
      className='group-data-[state=open]:rotate-180 relative top-[1px] ml-1 transition duration-200 size-3'
      aria-hidden
    />
  </NavigationMenuPrimitive.Trigger>
));

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

type NavigationMenuContentType = ElementRef<
  typeof NavigationMenuPrimitive.Content
>;
type NavigationMenuContentProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Content
>;

export const NavigationMenuContent = forwardRef<
  NavigationMenuContentType,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
      className
    )}
    {...props}
  />
));

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export const NavigationMenuLink = NavigationMenuPrimitive.Link;

type NavigationMenuViewportType = ElementRef<
  typeof NavigationMenuPrimitive.Viewport
>;
type NavigationMenuViewportProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Viewport
>;

export const NavigationMenuViewport = forwardRef<
  NavigationMenuViewportType,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));

NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

type NavigationMenuIndicatorType = ElementRef<
  typeof NavigationMenuPrimitive.Indicator
>;
type NavigationMenuIndicatorProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Indicator
>;

export const NavigationMenuIndicator = forwardRef<
  NavigationMenuIndicatorType,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className
    )}
    {...props}
  >
    <div className='relative top-[60%] shadow-md bg-border rounded-tl-sm rotate-45 size-2' />
  </NavigationMenuPrimitive.Indicator>
));

NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;
