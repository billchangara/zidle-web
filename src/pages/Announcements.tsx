import { Link } from 'react-router-dom'

const announcements = [
  {
    id: '1',
    title: 'ZIDLE Launches v1.0 — Your All-in-One Learning Platform',
    date: 'January 15, 2026',
    excerpt: 'We are proud to announce the official launch of ZIDLE v1.0, bringing adaptive learning, offline access, and expert-led instruction to Zimbabwean students.'
  },
  {
    id: '2',
    title: 'Preparing for O-Levels: How ZIDLE Sets You Up for Success',
    date: 'January 10, 2026',
    excerpt: 'With the O-Level exams approaching, ZIDLE provides targeted practice tests, detailed explanations, and structured study plans to help you excel.'
  },
  {
    id: '3',
    title: 'Learn Anywhere: Our New Offline Learning Mode',
    date: 'January 5, 2026',
    excerpt: 'Download lessons and study on your own terms. ZIDLE v1.0 now supports full offline access to all courses, videos, and practice materials.'
  }
]

export default function Announcements() {
  return (
    <div className="text-textPrimary min-h-screen flex flex-col">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-black text-textPrimary mb-4">Announcements & Blog</h1>
          <p className="text-lg text-textSecondary">Latest updates, study tips, and platform news from BiLaTech.</p>
        </div>
        <div className="space-y-8">
          {announcements.map((item) => (
            <article key={item.id} className="bg-surface border-2 border-border rounded-2xl p-8 shadow-[0_4px_0_0_#E5E5E5] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-bold text-textSecondary">{item.date}</span>
              </div>
              <h2 className="text-2xl font-black text-textPrimary mb-4">{item.title}</h2>
              <p className="text-textSecondary leading-relaxed mb-6">{item.excerpt}</p>
              <Link
                to="/#downloads"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H4" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
