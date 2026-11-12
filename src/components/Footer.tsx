import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-border flex flex-col items-center justify-center gap-4 text-center px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#58CC02"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h18l-18 18h18" />
      </svg>
      <p className="text-textSecondary text-sm">
        © 2026 BiLaTech Solutions. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm font-bold text-textSecondary">
        <Link to="/privacy" className="hover:text-textPrimary transition-colors">
          Privacy
        </Link>
        <Link to="/terms" className="hover:text-textPrimary transition-colors">
          Terms
        </Link>
        <Link to="/" className="hover:text-textPrimary transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  )
}
