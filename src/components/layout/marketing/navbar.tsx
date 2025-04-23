import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { Home, LogIn } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 top-0 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg transition-all">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <Link href={'/'} className="text-xl font-bold">
          Ganesha-Fit
        </Link>
        <div className="flex items-center space-x-2">
          <SignedIn>
            <Button
              size={'default'}
              variant={'outline'}
              className="hidden md:block"
            >
              Price
            </Button>
            <div className="h-5 w-px bg-slate-500" />
            <Button asChild>
              <Link href={'/home'}>
                go to Home
                <Home />
              </Link>
            </Button>
          </SignedIn>

          <SignedOut>
            <SignUpButton>
              <Button>Sign up</Button>
            </SignUpButton>
            <div className="h-5 w-px bg-slate-500" />
            <SignInButton mode="modal" fallbackRedirectUrl={'/dashboard'}>
              <Button>
                Sign in
                <LogIn />
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};
