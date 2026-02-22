'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/library', label: 'All Strategies' },
    { href: '/subjects', label: 'By Subject' },
    { href: '/generator', label: 'AI Generator' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/senco', label: 'SENCo' },
  ];

  return (
    <header
      className="bg-white border-b border-slate-200 text-slate-900 sticky top-0 z-50 print:hidden"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Includable - Home"
            >
              <img
                src="/mascot.png"
                alt=""
                className="w-10 h-10"
                aria-hidden="true"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-emerald-600">Includable</span>
                <span className="text-xs text-slate-500 hidden sm:block">For KS3/KS4 Teachers</span>
              </div>
            </Link>

            <nav
              className="hidden md:flex items-center gap-6"
              aria-label="Main navigation"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                      isActive ? 'text-emerald-600' : 'text-slate-600'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile nav */}
        <nav
          className="md:hidden pb-3 flex gap-4 overflow-x-auto"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-emerald-600 ${
                  isActive ? 'text-emerald-600' : 'text-slate-600'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
