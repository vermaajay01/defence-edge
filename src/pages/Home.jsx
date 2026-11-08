
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield, Menu, X, ArrowRight, Target, Brain,
  Users, MessageSquare, ClipboardList, BookOpen,
  Newspaper, Plane, Anchor, GraduationCap,
  ChevronRight, Crosshair, Globe,
} from 'lucide-react'

const modules = [
  { title: 'Screening Test', description: 'OIR tests, picture perception and discussion.', icon: Target, path: '/screening' },
  { title: 'Psychology Tests', description: 'TAT, WAT, SRT and Self Description.', icon: Brain, path: '/psychology' },
  { title: 'GTO Tasks', description: 'Group activities, planning and outdoor tasks.', icon: Users, path: '/gto' },
  { title: 'Personal Interview', description: 'Personal, educational and technical questions.', icon: MessageSquare, path: '/interview' },
  { title: 'GD Preparation', description: 'Important topics, arguments and discussion practice.', icon: Globe, path: '/gd' },
  { title: 'Lecturette', description: 'Speech outlines and timed speaking practice.', icon: ClipboardList, path: '/lecturette' },
]

const exams = [
  ['CDS', 'Combined Defence Services'],
  ['AFCAT', 'Air Force Common Admission Test'],
  ['NDA', 'National Defence Academy'],
  ['SSC CPO', 'Sub-Inspector Examination'],
  ['SSC CHSL', 'Combined Higher Secondary Level'],
  ['NCC Entry', 'NCC Special Entry Preparation'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ['Home', '/'],
    ['SSB Preparation', '/screening'],
    ['GD Preparation', '/gd'],
    ['Lecturette', '/lecturette'],
    ['Defence Knowledge', '/defence-knowledge'],
    ['Current Affairs', '/current-affairs'],
  ]

  return (
    <header className="sticky top-0 z-50 bg-defence text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-gold text-gold">
            <Shield size={27} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-[0.16em]">DEFENCE EDGE</h1>
            <p className="text-[10px] text-gold">लक्ष्य वर्दी, तैयारी पक्की!</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, path]) => (
            <Link key={path} to={path} className="text-sm text-gray-300 hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 px-5 py-3 lg:hidden">
          {links.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-sm hover:text-gold"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-defence-light text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <p className="mb-7 inline-flex items-center gap-2 border border-gold/50 px-3 py-2 text-xs tracking-widest text-gold">
                <Shield size={15} /> DISCIPLINE · KNOWLEDGE · SERVICE
              </p>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Your Journey Towards the
                <span className="block text-gold">Uniform Begins Here.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-300">
                Prepare for SSB, understand India's Armed Forces, strengthen
                your defence knowledge and work towards your goal with
                structured learning resources.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/screening" className="flex items-center gap-2 bg-gold px-6 py-3.5 text-sm font-bold text-defence hover:bg-[#dfc47e]">
                  Start Preparation <ArrowRight size={18} />
                </Link>
                <Link to="/defence-knowledge" className="border border-white/40 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
                  Explore Resources
                </Link>
              </div>
            </div>

            <div className="border border-gold/50 p-3">
              <div className="flex aspect-[5/4] flex-col items-center justify-center bg-[#233b31] text-center">
                <Shield size={100} strokeWidth={1} className="text-gold" />
                <p className="mt-6 text-2xl font-bold tracking-[0.2em]">DEFENCE EDGE</p>
                <div className="mt-4 h-px w-24 bg-gold" />
                <p className="mt-5 text-sm tracking-widest text-gold">लक्ष्य वर्दी, तैयारी पक्की!</p>
                <p className="mt-3 text-xs text-gray-300">Learn · Practise · Prepare</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e2e1d7] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-5 py-9 md:grid-cols-4 lg:px-8">
            {[
              [Shield, 'Indian Army'],
              [Anchor, 'Indian Navy'],
              [Plane, 'Indian Air Force'],
              [GraduationCap, 'NCC'],
            ].map(([Icon, name]) => (
              <div key={name} className="flex items-center justify-center gap-3">
                <Icon size={27} className="text-olive" />
                <span className="text-sm font-semibold text-defence">{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-olive">LEARN AND PREPARE</p>
          <h2 className="mt-3 text-3xl font-bold text-defence sm:text-4xl">SSB Preparation Centre</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
            Understand each stage of the selection process with organised learning material and practice.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ title, description, icon: Icon, path }, index) => (
              <Link
                to={path}
                key={path}
                className="group border border-[#deded3] bg-white p-7 transition hover:-translate-y-1 hover:border-gold hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <Icon size={29} className="text-olive" />
                  <span className="text-xs tracking-widest text-[#b3a77f]">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-lg font-bold text-defence">{title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">{description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#ecece5] pt-4 text-xs font-semibold text-olive">
                  <span>Explore section</span>
                  <ChevronRight size={18} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="exams" className="bg-[#e9e9df]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-olive">EXAMINATION PREPARATION</p>
            <h2 className="mt-3 text-3xl font-bold text-defence sm:text-4xl">Prepare for Your Next Opportunity</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
              Explore resources for defence and other competitive examinations.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {exams.map(([name, description]) => (
                <div key={name} className="flex items-center justify-between border border-[#d4d3c8] bg-white p-6">
                  <div>
                    <h3 className="text-lg font-bold text-defence">{name}</h3>
                    <p className="mt-2 text-xs text-gray-500">{description}</p>
                  </div>
                  <ArrowRight size={19} className="text-olive" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-olive">STAY INFORMED · KEEP IMPROVING</p>
          <h2 className="mt-3 text-3xl font-bold text-defence">Learning & Practice Resources</h2>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <Link to="/current-affairs" className="border-l-2 border-gold bg-white p-8 hover:shadow-md">
              <Newspaper size={30} className="text-olive" />
              <h3 className="mt-6 text-xl font-bold text-defence">Daily Current Affairs</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Follow national, international, defence, economy and technology developments with reliable sources.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-olive">
                Explore section <ArrowRight size={15} />
              </span>
            </Link>

            <Link to="/gd" className="border-l-2 border-gold bg-white p-8 hover:shadow-md">
              <Crosshair size={30} className="text-olive" />
              <h3 className="mt-6 text-xl font-bold text-defence">Practice & Assessment</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Strengthen your preparation through discussion practice, quizzes and revision activities.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-olive">
                Start practising <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-defence px-5 py-10 text-center text-gray-300">
        <div className="flex items-center justify-center gap-2 text-white">
          <Shield size={22} className="text-gold" />
          <span className="font-bold tracking-[0.2em]">DEFENCE EDGE</span>
        </div>
        <p className="mt-3 text-sm text-gold">लक्ष्य वर्दी, तैयारी पक्की!</p>
        <p className="mt-5 text-xs text-gray-500">
          A learning platform for SSB and Defence examination preparation.
        </p>
        <p className="mt-7 border-t border-white/10 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Defence Edge. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home
