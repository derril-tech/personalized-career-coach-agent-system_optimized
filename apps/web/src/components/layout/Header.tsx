"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BellIcon, 
  MagnifyingGlassIcon, 
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

// TODO: Import user store and authentication hooks
// import { useAuth } from "@/hooks/use-auth";
// import { useUser } from "@/stores/user-store";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // TODO: Replace with actual user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: null,
  };

  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Search and mobile menu */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-300"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Search */}
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon 
                    className="h-5 w-5 text-neutral-400" 
                    aria-hidden="true" 
                  />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:border-neutral-700 sm:text-sm sm:leading-6"
                  placeholder="Search candidates, jobs..."
                />
              </div>
            </div>
          </div>

          {/* Right side - Notifications and user menu */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            {/* Notifications */}
            <button
              type="button"
              className="relative rounded-full bg-white dark:bg-neutral-800 p-1 text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-error-500 text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>

            {/* User menu */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open user menu</span>
                {user.avatar ? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.avatar}
                    alt={user.name}
                  />
                ) : (
                  <UserCircleIcon className="h-8 w-8 text-neutral-400" />
                )}
                <span className="hidden lg:flex lg:items-center">
                  <span className="ml-4 text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
                    {user.name}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <span className="sr-only">TalentFlux</span>
                <h1 className="text-xl font-bold text-primary-600">TalentFlux</h1>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-500/10">
                <div className="space-y-2 py-6">
                  {/* Mobile search */}
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon 
                        className="h-5 w-5 text-neutral-400" 
                        aria-hidden="true" 
                      />
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:border-neutral-700 sm:text-sm sm:leading-6"
                      placeholder="Search candidates, jobs..."
                    />
                  </div>
                  
                  {/* Mobile navigation links */}
                  <Link
                    href="/pipeline"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pipeline
                  </Link>
                  <Link
                    href="/candidates"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Candidates
                  </Link>
                  <Link
                    href="/requisitions"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Requisitions
                  </Link>
                  <Link
                    href="/interviews"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Interviews
                  </Link>
                  <Link
                    href="/reports"
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Reports
                  </Link>
                </div>
                <div className="py-6">
                  <div className="-mx-3 flow-root">
                    <Link
                      href="/profile"
                      className="flex rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="flex rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      type="button"
                      className="flex w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      onClick={() => {
                        // TODO: Implement logout
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
