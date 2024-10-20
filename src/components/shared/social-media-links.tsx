import {
  Button,
  NavigationMenuItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { cn } from '@/lib';
import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';
import { RiLinkedinLine } from 'react-icons/ri';

export type SharedPlacement = {
  placement: 'navbar' | 'footer';
};

export const SocialMediaLinks = ({ placement }: SharedPlacement) => {
  return (
    <>
      <NavigationMenuItem role='menuitem'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant='ghost'
                size='icon'
                className={cn(
                  'flex-row-reverse px-4 py-2 md:p-0 w-fit md:w-10 text-base',
                  placement === 'footer' && 'hover:bg-background'
                )}
              >
                <Link
                  href='https://www.linkedin.com/in/timfalkwebbdev/'
                  target='_blank'
                  aria-label="Go to the author's LinkedIn page."
                >
                  <span
                    aria-hidden
                    className='md:hidden text-sm'
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
                className={cn(
                  'flex-row-reverse px-4 py-2 md:p-0 w-fit md:w-10 text-base',
                  placement === 'footer' && 'hover:bg-background'
                )}
              >
                <Link
                  href='https://github.com/Falk33n'
                  target='_blank'
                  aria-label="Go to author's GitHub page."
                >
                  <span
                    aria-hidden
                    className='md:hidden text-sm'
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
    </>
  );
};

SocialMediaLinks.displayName = 'SocialMediaLinks';
