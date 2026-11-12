import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Announcements from './pages/Announcements'
import { MessageCircle } from 'lucide-react'

export default function App() {
  return (
    <Router>
      <div className="text-textPrimary min-h-screen flex flex-col relative pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/263771234567"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_0_0_#1E9E51] hover:bg-[#1E9E51] active:translate-y-[2px] active:shadow-[0_2px_0_0_#1E9E51] transition-all"
        >
          <MessageCircle size={24} strokeWidth={2.5} stroke="currentColor" />
        </a>
      </div>
    </Router>
  )
}
