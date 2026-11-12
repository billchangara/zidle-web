import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div className="text-textPrimary min-h-screen flex flex-col">
      <section className="py-24 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          {/* Free Trial Badge */}
          <div className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full mb-8 inline-block text-center mx-auto">
            🎉 All new members get a 3-Day Free Trial!
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-textPrimary tracking-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-textSecondary">
            One plan for every learner. No hidden fees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* O-Level Card */}
            <div className="bg-surface border-2 border-border rounded-2xl p-10 shadow-[0_4px_0_0_#E5E5E5] flex flex-col">
              <div className="font-black text-2xl text-textPrimary mb-2">Form 1 - 4 (O-Level)</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-textPrimary">$10.00</span>
                <span className="text-textSecondary">/ month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-textSecondary">
                  <span className="text-primary font-bold">✓</span>
                  All subjects covered
                </li>
                <li className="flex items-start gap-3 text-textSecondary">
                  <span className="text-primary font-bold">✓</span>
                  Live classes
                </li>
                <li className="flex items-start gap-3 text-textSecondary">
                  <span className="text-primary font-bold">✓</span>
                  Offline downloads
                </li>
                <li className="flex items-start gap-3 text-textSecondary">
                  <span className="text-primary font-bold">✓</span>
                  3-Day Free Trial Included
                </li>
              </ul>
              <Link
                to="/#downloads"
                className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl shadow-[0_4px_0_0_#46A302] hover:bg-primaryDark active:translate-y-[2px] active:shadow-[0_2px_0_0_#46A302] transition-all text-center"
              >
                Get Started
              </Link>
            </div>

            {/* A-Level Card */}
            <div className="bg-white border-2 border-border rounded-2xl p-10 shadow-[0_4px_0_0_#E5E5E5] flex flex-col border-primary">
              <div className="font-black text-2xl text-textPrimary mb-2">A-Levels (Form 5 - 6)</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-textPrimary">$15.00</span>
                <span className="text-textSecondary">/ month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-textSecondary">
                  <span className="text-primary font-bold">✓</span>
                  Core subjects
                </li>
                <li className="flex items-start gap-3 text-textSecondary">
                  <span className="text-primary font-bold">✓</span>
                  Offline downloads
                </li>
                <li className="flex items-start gap-3 text-textSecondary">
                  <span className="text-primary font-bold">✓</span>
                  3-Day Free Trial Included
                </li>
              </ul>
              <Link
                to="/#downloads"
                className="w-full bg-white text-textPrimary border-2 border-border font-bold py-4 px-6 rounded-xl shadow-[0_4px_0_0_#E5E5E5] hover:bg-surface active:translate-y-[2px] active:shadow-[0_2px_0_0_#E5E5E5] transition-all text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
