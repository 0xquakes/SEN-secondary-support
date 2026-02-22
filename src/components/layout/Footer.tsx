import { DisclaimerCompact } from './Disclaimer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-100 text-slate-600 py-8 mt-auto print:hidden"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              <span className="text-emerald-600 font-semibold">SEND Strategies</span>
              {' '}&middot;{' '}
              What to actually do in the classroom
            </p>
            <p className="text-xs mt-1 text-slate-500">
              For teachers and TAs supporting pupils working below age-related expectations
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="#main-content"
              className="text-slate-600 hover:text-emerald-600 transition-colors inline-link"
            >
              Back to top
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">
              From documentation to action
            </span>
          </nav>
        </div>

        {/* Disclaimer section */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <DisclaimerCompact />
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-slate-200 text-center text-xs text-slate-500">
          <p>
            &copy; {currentYear} SEND Teaching Strategies. For teaching staff only.
            Adapt all guidance to your school&apos;s policies and individual pupil needs.
          </p>
        </div>
      </div>
    </footer>
  );
}
