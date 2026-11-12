import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToDownloads = () => {
    const el = document.getElementById('downloads')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
    scrollToDownloads()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-border">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-xl text-white">
            Z
          </div>
          <div className="flex flex-col">
            <Link to="/" className="font-black text-xl tracking-tight">
              ZIDLE
            </Link>
            <span className="text-[10px] text-textSecondary font-bold">by BiLaTech</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-textSecondary">
          <Link to="/" className="hover:text-textPrimary transition-colors">
            Home
          </Link>
          <Link to="/pricing" className="hover:text-textPrimary transition-colors">
            Pricing
          </Link>
          <Link to="/announcements" className="hover:text-textPrimary transition-colors">
            Blog
          </Link>
          <Link
            to="/"
            onClick={scrollToDownloads}
            className="hover:text-textPrimary transition-colors"
          >
            Contact
          </Link>
        </div>
        <Link
          to="/"
          onClick={scrollToDownloads}
          className="hidden md:block bg-primary text-white font-bold py-2 px-4 rounded-xl shadow-[0_4px_0_0_#46A302] hover:bg-primaryDark active:translate-y-[2px] active:shadow-[0_2px_0_0_#46A302] transition-all"
        >
          Download App
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-textPrimary" />
          ) : (
            <Menu className="w-6 h-6 text-textPrimary" />
          )}
        </button>
        <div className="md:hidden absolute left-0 right-0 mt-2 border-2 border-border bg-white rounded-2xl shadow-2xl p-4 z-50 {isMobileMenuOpen ? 'block' : 'hidden'}">
          <Link
            to="/"
            onClick={scrollToDownloads}
            className="block text-sm font-bold text-textSecondary py-3 border-b border-border/50 last:border-b-0 hover:text-textPrimary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/pricing"
            onClick={() => {
              setIsMobileMenuOpen(false)
              navigate('/pricing')
            }}
            className="block text-sm font-bold text-textSecondary py-3 border-b border-border/50 last:border-b-0 hover:text-textPrimary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/announcements"
            onClick={() => {
              setIsMobileMenuOpen(false)
              navigate('/announcements')
            }}
            className="block text-sm font-bold text-textSecondary py-3 border-b border-border/50 last:border-b-0 hover:text-textPrimary transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/"
            onClick={handleLinkClick}
            className="block text-sm font-bold text-textSecondary py-3 border-b border-border/50 last:border-b-0 hover:text-textPrimary transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/"
            onClick={scrollToDownloads}
            className="block bg-primary text-white text-sm font-bold py-3 px-4 rounded-xl text-center shadow-[0_4px_0_0_#46A302] hover:bg-primaryDark active:translate-y-[2px] active:shadow-[0_2px_0_0_#46A302] transition-all mt-4"
          >
            Download App
          </Link>
        </div>
      </div>
    </nav>
  )
}