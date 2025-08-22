"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  UsersIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  HomeIcon,
  PlusIcon
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Pipeline", href: "/pipeline", icon: UsersIcon },
  { name: "Candidates", href: "/candidates", icon: UsersIcon },
  { name: "Requisitions", href: "/requisitions", icon: BriefcaseIcon },
  { name: "Interviews", href: "/interviews", icon: CalendarIcon },
  { name: "Reports", href: "/reports", icon: ChartBarIcon },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
];

const quickActions = [
  { name: "Add Candidate", href: "/candidates/new", icon: PlusIcon },
  { name: "Create Requisition", href: "/requisitions/new", icon: PlusIcon },
  { name: "Schedule Interview", href: "/interviews/new", icon: PlusIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 pb-4">
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">TF</span>
            </div>
            <span className="ml-3 text-xl font-bold text-neutral-900 dark:text-neutral-100">
              TalentFlux
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          isActive
                            ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                            : "text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={clsx(
                            isActive ? "text-primary-700 dark:text-primary-300" : "text-neutral-400 group-hover:text-primary-700 dark:group-hover:text-primary-300",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            {/* Quick Actions */}
            <li>
              <div className="text-xs font-semibold leading-6 text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Quick Actions
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {quickActions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium"
                    >
                      <item.icon
                        className="text-neutral-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 h-5 w-5 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Stats Summary */}
            <li className="mt-auto">
              <div className="rounded-lg bg-neutral-50 dark:bg-neutral-800 p-4">
                <div className="text-xs font-semibold leading-6 text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                  This Week
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-300">New Candidates</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">24</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-300">Interviews</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-300">Offers Sent</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">3</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
