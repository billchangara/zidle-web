import { useState } from 'react';
import {
  Smartphone,
  Monitor,
  PlaySquare,
  Video,
  Brain,
  TrendingUp,
  CheckCircle,
  BookOpen,
  MessageCircle,
  QrCode,
  ChevronDown,
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Does ZIDLE work offline?',
      a: 'Yes, all downloaded lessons, notes, and documents can be viewed without an internet connection.',
    },
    {
      q: 'What subjects are available?',
      a: 'We cover the full Form 1 to Form 6 curriculum across all core ZIMSEC subjects.',
    },
    {
      q: 'How do I pay for a subscription?',
      a: 'We accept EcoCash, Paynow, and bank transfers. Contact us via WhatsApp to complete your payment.',
    },
    {
      q: 'Can I use one account on multiple devices?',
      a: 'Yes, your progress and downloads sync seamlessly across your Android phone and Windows PC.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="py-20 lg:py-32 max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-block bg-surface border-2 border-border text-textSecondary text-xs font-bold px-3 py-1 rounded-full mb-6">
              ZIDLE is a product of BiLaTech Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-textPrimary tracking-tight">
              Zimbabwe’s Smartest Digital Learning Ecosystem.
            </h1>
            <p className="text-lg text-textSecondary mt-6 max-w-lg">
              Master your subjects with offline video lessons, live virtual classrooms, and AI-driven exam predictions. Available on Android and Windows.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#downloads"
                className="bg-primary text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_4px_0_0_#46A302] hover:bg-primaryDark active:translate-y-[2px] active:shadow-[0_2px_0_0_#46A302] transition-all flex items-center gap-2"
              >
                <Smartphone className="w-5 h-5" /> Download App
              </a>
              <a
                href="#downloads"
                className="bg-white text-textPrimary border-2 border-border font-bold py-3.5 px-6 rounded-xl shadow-[0_4px_0_0_#E5E5E5] hover:bg-surface active:translate-y-[2px] active:shadow-[0_2px_0_0_#E5E5E5] transition-all flex items-center gap-2"
              >
                <Monitor className="w-5 h-5" /> Windows App
              </a>
            </div>
          </div>
          {/* Right Side - Device Mockups */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Desktop Mockup (Back) */}
            <div className="absolute right-0 top-10 w-[500px] hidden lg:block bg-[#1C1C1E] rounded-t-xl p-2 shadow-2xl border-4 border-[#3A3A3C] transform rotate-2 opacity-90">
              <div className="flex gap-2 mb-2 px-1">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="bg-surface rounded-lg h-[350px] p-6 flex flex-col gap-4">
                <div className="w-1/3 h-8 bg-gray-300 rounded font-bold flex items-center px-4 text-gray-500 text-xs">
                  ZIDLE Desktop
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-border rounded-xl h-32 shadow-sm flex flex-col items-center justify-center">
                    <PlaySquare className="w-8 h-8 text-primary mb-2" />{' '}
                    <span className="text-xs font-bold text-gray-600">Video Lesson</span>
                  </div>
                  <div className="bg-white border-2 border-border rounded-xl h-32 shadow-sm flex flex-col items-center justify-center">
                    <BookOpen className="w-8 h-8 text-secondary mb-2" />{' '}
                    <span className="text-xs font-bold text-gray-600">PDF Notes</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Phone Mockup (Front) */}
            <div className="absolute left-0 bottom-0 z-10 relative w-[280px] h-[580px] bg-[#1C1C1E] rounded-[40px] p-2 shadow-2xl border-[6px] border-[#3A3A3C] transform -rotate-2">
              <div className="w-full h-full bg-[#F7F7F7] rounded-[32px] overflow-hidden flex flex-col relative border border-gray-200">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-50"></div>
                <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[10px] font-bold text-black z-40">
                  <span>09:41</span>
                  <span>5G 🔋</span>
                </div>
                <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20 no-scrollbar">
                  <div className="flex gap-3 mb-6">
                    <div className="flex-1 bg-white border-2 border-gray-100 rounded-xl p-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-xs font-black text-gray-800">Predictions</div>
                      <div className="text-[10px] text-gray-400 font-semibold">Avg: 35%</div>
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-100 rounded-xl p-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-xs font-black text-gray-800">Assignments</div>
                      <div className="text-[10px] text-gray-400 font-semibold">Tasks</div>
                    </div>
                  </div>
                  <div className="text-sm font-black text-gray-800 mb-3">Subjects</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white border-2 border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-xs font-black text-gray-800 text-center">Chemistry</div>
                      <div className="text-[10px] text-gray-400 font-semibold text-center">Form 4</div>
                    </div>
                    <div className="bg-white border-2 border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-xs font-black text-gray-800 text-center">Biology</div>
                      <div className="text-[10px] text-gray-400 font-semibold text-center">Form 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y-2 border-border bg-surface py-6 w-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm font-bold text-textSecondary">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" /> Offline Learning Supported
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" /> Safe Student Chat
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Form 1 to 6 Curriculum
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="py-24 max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-black text-center mb-2">Everything you need to pass.</h2>
        <p className="text-textSecondary text-center mb-12">No more carrying heavy textbooks. ZIDLE has it all.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface rounded-2xl p-8 border-2 border-border">
            <PlaySquare className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-black mb-2">Offline Video Lessons</h3>
            <p className="text-textSecondary">Download high-quality video lessons and watch them without using any data.</p>
          </div>
          <div className="bg-primary text-white rounded-2xl p-8 border-2 border-primaryDark">
            <Video className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-black mb-2">Live Classes</h3>
            <p className="text-white/80">Join virtual classrooms with your teachers in real-time.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-border shadow-[0_4px_0_0_#E5E5E5]">
            <Brain className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-xl font-black mb-2">Smart Flashcards</h3>
            <p className="text-textSecondary">Spaced repetition to help you memorize formulas faster.</p>
          </div>
          <div className="md:col-span-2 bg-secondary text-white rounded-2xl p-8 border-2 border-secondaryDark">
            <TrendingUp className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-black mb-2">Exam Predictions</h3>
            <p className="text-white/80">Our algorithm analyzes your quiz scores to predict your final grade.</p>
          </div>
        </div>
      </section>
      {/* DOWNLOADS */}
      <section id="downloads" className="py-24 bg-surface border-t-2 border-border w-full">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-2">Download ZIDLE</h2>
          <p className="text-textSecondary text-center mb-12">Available now for Android and Windows.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-[0_6px_0_0_#E5E5E5]">
              <Smartphone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-black mb-1">ZIDLE for Android</h3>
              <p className="text-textSecondary mb-6">Download the APK (v1.0.0)</p>
              <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-[0_4px_0_0_#46A302] hover:bg-primaryDark active:translate-y-[2px] active:shadow-[0_2px_0_0_#46A302] transition-all mb-6">
                Download APK
              </button>
              <div className="flex items-center gap-4 mb-6">
                <QrCode className="w-16 h-16 text-textSecondary" />
                <p className="text-xs text-textSecondary font-semibold">Scan with your phone camera to download instantly.</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-xs font-bold text-orange-800 mb-2">How to Install (3 Steps)</p>
                <ol className="text-xs text-orange-700 list-decimal list-inside space-y-1">
                  <li>Download the APK file.</li>
                  <li>Go to Settings &gt; Security &gt; Allow Unknown Sources.</li>
                  <li>Open the downloaded file and tap Install.</li>
                </ol>
              </div>
            </div>
            <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-[0_6px_0_0_#E5E5E5]">
              <Monitor className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-2xl font-black mb-1">ZIDLE for Windows</h3>
              <p className="text-textSecondary mb-6">Download the .exe installer (v1.0.0)</p>
              <button className="w-full bg-white text-textPrimary border-2 border-border font-bold py-3 px-6 rounded-xl shadow-[0_4px_0_0_#E5E5E5] hover:bg-surface active:translate-y-[2px] active:shadow-[0_2px_0_0_#E5E5E5] transition-all mb-6">
                Download for Windows
              </button>
              <p className="text-xs text-textSecondary">Requires Windows 10 or 11. Built with Tauri for native performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="py-24 max-w-4xl mx-auto px-4 w-full text-center">
        <h2 className="text-3xl font-black mb-12">The Minds Behind ZIDLE</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white font-black text-2xl mb-4 border-4 border-primaryDark">
              LM
            </div>
            <h3 className="text-lg font-black">Lawrence Maparara</h3>
            <p className="text-sm font-bold text-textSecondary">CEO & Marketing Chief</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-white font-black text-2xl mb-4 border-4 border-secondaryDark">
              BC
            </div>
            <h3 className="text-lg font-black">Bill Changara</h3>
            <p className="text-sm font-bold text-textSecondary">Chief Tech Officer & Engineer</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface border-y-2 border-border w-full">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border-2 border-border rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 font-bold text-left hover:bg-gray-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-textSecondary border-t-2 border-border/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-4">Get in touch.</h2>
            <p className="text-textSecondary mb-8">We are here to help you, your school, or your parents with anything ZIDLE related.</p>
            <div className="space-y-4">
              <a href="mailto:support@zidle.co.zw" className="flex items-center gap-3 font-bold text-textPrimary hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                support@zidle.co.zw
              </a>
              <a href="tel:+263771234567" className="flex items-center gap-3 font-bold text-textPrimary hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                +263 77 123 4567
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-[0_4px_0_0_#E5E5E5] text-center">
            <h3 className="text-xl font-black mb-2">BiLaTech Solutions</h3>
            <p className="text-sm text-textSecondary">Harare, Zimbabwe</p>
          </div>
        </div>
      </section>
    </div>
  );
}