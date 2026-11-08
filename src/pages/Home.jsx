
import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import {
  Menu, X, Search, ArrowRight, Shield, BookOpen,
  Newspaper, Target, Brain, Users, MessageSquare,
  ClipboardList, GraduationCap, ChevronRight, Bookmark,
  Plane, Anchor, Globe, FileText, Crosshair, CalendarDays,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'SSB Preparation', href: '/screening' },
  { label: 'Defence Knowledge', href: '/defence-knowledge' },
  { label: 'Current Affairs', href: '/current-affairs' },
  { label: 'Exams', href: '/exams' },
  { label: 'Practice', href: '/gd' },
  { label: 'Resources', href: '/lecturette' },
]

const forces = [
  { name: 'Indian Army', detail: 'Land warfare and national security', icon: Shield },
  { name: 'Indian Navy', detail: 'Maritime security and operations', icon: Anchor },
  { name: 'Indian Air Force', detail: 'Air power and aerospace defence', icon: Plane },
  { name: 'NCC & Other Forces', detail: 'Service, discipline and leadership', icon: GraduationCap },
]

const shortcuts = [
  { title: 'GD Preparation', subtitle: 'Topics, arguments and practice', icon: Users, to: '/gd' },
  { title: 'Lecturette', subtitle: 'Speech outlines and timed practice', icon: MessageSquare, to: '/lecturette' },
  { title: 'Personal Interview', subtitle: 'CIQs and interview preparation', icon: ClipboardList, to: '/interview' },
  { title: 'GTO Tasks', subtitle: 'Group tasks and planning exercises', icon: Crosshair, to: '/gto' },
  { title: 'Psychology Tests', subtitle: 'TAT, WAT, SRT and SD', icon: Brain, to: '/psychology' },
  { title: 'Screening Test', subtitle: 'OIR and PPDT preparation', icon: Target, to: '/screening' },
  { title: 'Current Affairs', subtitle: 'National, international and defence', icon: Newspaper, to: '/current-affairs' },
  { title: 'Exam Preparation', subtitle: 'CDS, AFCAT, NDA and SSC', icon: BookOpen, to: '/exams' },
]

const exams = ['CDS', 'AFCAT', 'NDA', 'SSC CPO', 'SSC CHSL', 'NCC Special Entry']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101c2b] text-white">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-[#d5ad63] text-[#e2bd78]">
            <Shield size={27} strokeWidth={1.6} />
          </div>
          <div>
            <div className="text-[17px] font-extrabold tracking-[0.16em]">DEFENCE EDGE</div>
            <div className="mt-0.5 text-[10px] tracking-[0.12em] text-[#e2bd78]">
              लक्ष्य वर्दी, तैयारी पक्की!
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="whitespace-nowrap text-[12px] font-medium text-slate-300 transition hover:text-[#e2bd78]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle search"
          >
            <Search size={19} />
          </button>
          <Link
            to="/login"
            className="border border-[#d5ad63] px-5 py-2.5 text-xs font-bold tracking-wide text-[#e2bd78] transition hover:bg-[#d5ad63] hover:text-[#101c2b]"
          >
            SIGN IN
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white xl:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {searchOpen && (
        <div className="border-t border-white/10 bg-[#17263a] px-5 py-3">
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <Search size={18} className="text-[#e2bd78]" />
            <input
              type="search"
              placeholder="Search topics, preparation material and resources..."
              className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      )}

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#101c2b] px-5 py-3 xl:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-sm text-slate-200 hover:text-[#e2bd78]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block border border-[#d5ad63] px-5 py-3 text-xs font-bold text-[#e2bd78]"
          >
            SIGN IN
          </Link>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#142438] text-white lg:min-h-[610px]">
      <img
        src={heroImage}
        alt="Defence Edge preparation platform"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1726] via-[#0b1726]/90 to-[#0b1726]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1726]/70 via-transparent to-[#0b1726]/10" />

      <div className="relative mx-auto flex min-h-[540px] max-w-[1440px] items-center px-5 py-20 lg:min-h-[610px] lg:px-10">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-[#e2bd78] bg-white/5 px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] text-[#f0d49b]">
            <Shield size={15} />
            YOUR DEFENCE PREPARATION PLATFORM
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.13] tracking-tight sm:text-5xl lg:text-[62px]">
            COMPLETE PREPARATION
            <span className="mt-2 block text-[#e5c17d]">FOR SSB & DEFENCE</span>
            <span className="mt-2 block">EXAMINATIONS</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            Prepare with structured study resources, current affairs,
            defence knowledge and practical exercises for your journey
            towards the uniform.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/screening"
              className="inline-flex items-center gap-3 bg-[#d7b36d] px-6 py-4 text-xs font-extrabold tracking-wide text-[#101c2b] transition hover:bg-[#edcf91]"
            >
              START PREPARATION <ArrowRight size={17} />
            </Link>
            <Link
              to="/defence-knowledge"
              className="inline-flex items-center gap-3 border border-white/60 bg-[#101c2b]/30 px-6 py-4 text-xs font-bold tracking-wide text-white transition hover:bg-white/10"
            >
              EXPLORE RESOURCES
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-[11px] font-semibold tracking-wider text-slate-200">
            <span>SSB PREPARATION</span>
            <span>DEFENCE KNOWLEDGE</span>
            <span>COMPETITIVE EXAMS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ForceStrip() {
  return (
    <section className="border-b border-[#dce1e7] bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-[#e5e8ec] px-5 md:grid-cols-4 lg:px-10">
        {forces.map(({ name, detail, icon: Icon }) => (
          <Link
            to="/defence-knowledge"
            key={name}
            className="flex items-center gap-3 px-3 py-6 transition hover:bg-slate-50 sm:px-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#eef1f4] text-[#344d69]">
              <Icon size={23} />
            </div>
            <div>
              <h2 className="text-xs font-extrabold text-[#17283d] sm:text-sm">{name}</h2>
              <p className="mt-1 hidden text-[10px] text-slate-500 sm:block">{detail}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description, link, to = '/' }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-[10px] font-extrabold tracking-[0.22em] text-[#9b7739]">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#17283d] sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        )}
      </div>
      {link && (
        <Link to={to} className="inline-flex items-center gap-2 text-xs font-bold text-[#314c6b] hover:text-[#9b7739]">
          {link} <ArrowRight size={15} />
        </Link>
      )}
    </div>
  )
}

function PreparationShortcuts() {
  return (
    <section className="bg-[#f3f5f7]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="YOUR PREPARATION, ORGANISED"
          title="Explore Preparation Modules"
          description="Access the key areas of SSB preparation and defence examination learning from one place."
          link="VIEW ALL MODULES"
          to="/screening"
        />

        <div className="grid gap-px border border-[#dce1e7] bg-[#dce1e7] sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map(({ title, subtitle, icon: Icon, to }, index) => (
            <Link
              to={to}
              key={title}
              className="group flex min-h-[155px] flex-col justify-between bg-white p-6 transition hover:bg-[#f8fafc]"
            >
              <div className="flex items-start justify-between">
                <Icon size={25} strokeWidth={1.7} className="text-[#3b5674] transition group-hover:text-[#a17d3e]" />
                <span className="text-[10px] font-bold tracking-widest text-slate-300">0{index + 1}</span>
              </div>
              <div className="mt-7 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-sm font-extrabold text-[#17283d]">{title}</h3>
                  <p className="mt-1 text-[11px] leading-5 text-slate-500">{subtitle}</p>
                </div>
                <ChevronRight size={17} className="shrink-0 text-[#9b7739] transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExamsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
        <SectionHeading
          eyebrow="DEFENCE CAREER EXAMINATIONS"
          title="Prepare for Your Target Examination"
          description="Build your subject knowledge and practise for defence and other competitive examinations."
          link="EXPLORE EXAMS"
          to="/exams"
        />
        <div className="flex flex-wrap gap-3">
          {exams.map((exam) => (
            <Link
              to="/exams"
              key={exam}
              className="border border-[#dce1e7] bg-[#f7f8fa] px-5 py-3 text-xs font-bold tracking-wide text-[#263c55] transition hover:border-[#b18a49] hover:bg-[#fffaf0]"
            >
              {exam} <ArrowRight size={13} className="ml-2 inline" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function DailyLearning() {
  return (
    <section className="bg-[#e9edf1]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
        <SectionHeading
          eyebrow="BUILD YOUR DAILY ROUTINE"
          title="Learn. Revise. Practise."
          description="A focused space for current affairs, topic preparation and regular self-assessment."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          <Link to="/current-affairs" className="group bg-[#17283d] p-7 text-white transition hover:bg-[#203b59]">
            <Newspaper size={27} className="text-[#e2bd78]" />
            <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-[#e2bd78]">STAY INFORMED</p>
            <h3 className="mt-2 text-xl font-extrabold">Latest Current Affairs</h3>
            <p className="mt-3 text-xs leading-6 text-slate-300">National, international, defence, economy, science and technology updates with sources.</p>
            <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#e2bd78]">OPEN CURRENT AFFAIRS <ArrowRight size={15} /></span>
          </Link>

          <Link to="/gd" className="group border border-[#d4dce4] bg-white p-7 transition hover:border-[#b18a49]">
            <Users size={27} className="text-[#405c7b]" />
            <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-[#9b7739]">DISCUSSION PRACTICE</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#17283d]">GD Topic of the Day</h3>
            <p className="mt-3 text-xs leading-6 text-slate-600">Study a topic, understand different perspectives and prepare balanced arguments.</p>
            <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#405c7b]">PRACTISE GD <ArrowRight size={15} /></span>
          </Link>

          <Link to="/lecturette" className="group border border-[#d4dce4] bg-white p-7 transition hover:border-[#b18a49]">
            <MessageSquare size={27} className="text-[#405c7b]" />
            <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-[#9b7739]">SPEAK WITH CLARITY</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#17283d]">Lecturette Practice</h3>
            <p className="mt-3 text-xs leading-6 text-slate-600">Organise your thoughts and practise delivering a structured short speech.</p>
            <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#405c7b]">PRACTISE LECTURETTE <ArrowRight size={15} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-10">
        <div>
          <p className="text-[10px] font-extrabold tracking-[0.22em] text-[#9b7739]">YOUR LEARNING SPACE</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#17283d]">Keep Your Preparation on Track</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
            Your personal dashboard will bring together saved topics, revision lists,
            practice history and daily learning targets in one place.
          </p>
          <Link to="/login" className="mt-7 inline-flex items-center gap-2 bg-[#17283d] px-5 py-3 text-xs font-bold text-white hover:bg-[#304d6e]">
            ACCESS YOUR SPACE <ArrowRight size={15} />
          </Link>
        </div>

        <div className="border border-[#dce1e7] bg-[#f5f7f9] p-5 sm:p-7">
          <div className="flex items-center justify-between border-b border-[#dce1e7] pb-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-slate-500">PERSONAL DASHBOARD</p>
              <h3 className="mt-1 text-lg font-extrabold text-[#17283d]">My Preparation</h3>
            </div>
            <Bookmark size={21} className="text-[#9b7739]" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="bg-white p-4">
              <BookOpen size={19} className="text-[#405c7b]" />
              <p className="mt-3 text-xs font-bold text-[#17283d]">Saved Topics</p>
              <p className="mt-1 text-[10px] text-slate-500">Your revision list</p>
            </div>
            <div className="bg-white p-4">
              <Target size={19} className="text-[#405c7b]" />
              <p className="mt-3 text-xs font-bold text-[#17283d]">Daily Targets</p>
              <p className="mt-1 text-[10px] text-slate-500">Your study plan</p>
            </div>
            <div className="bg-white p-4">
              <CalendarDays size={19} className="text-[#405c7b]" />
              <p className="mt-3 text-xs font-bold text-[#17283d]">Practice History</p>
              <p className="mt-1 text-[10px] text-slate-500">Your recent activity</p>
            </div>
            <div className="bg-white p-4">
              <FileText size={19} className="text-[#405c7b]" />
              <p className="mt-3 text-xs font-bold text-[#17283d]">Revision Notes</p>
              <p className="mt-1 text-[10px] text-slate-500">Your study material</p>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-slate-400">Dashboard preview — personal tracking will be enabled after account integration.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#101c2b] text-slate-300">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Shield className="text-[#e2bd78]" size={28} />
            <span className="font-extrabold tracking-[0.16em] text-white">DEFENCE EDGE</span>
          </div>
          <p className="mt-3 text-xs text-[#e2bd78]">लक्ष्य वर्दी, तैयारी पक्की!</p>
          <p className="mt-5 max-w-sm text-xs leading-6 text-slate-400">
            A structured learning platform for SSB preparation, defence knowledge
            and competitive examinations.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-extrabold tracking-widest text-white">PREPARATION</h3>
          <div className="mt-5 space-y-3 text-xs text-slate-400">
            <Link className="block hover:text-[#e2bd78]" to="/screening">Screening</Link>
            <Link className="block hover:text-[#e2bd78]" to="/psychology">Psychology</Link>
            <Link className="block hover:text-[#e2bd78]" to="/gto">GTO Tasks</Link>
            <Link className="block hover:text-[#e2bd78]" to="/interview">Interview</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-extrabold tracking-widest text-white">LEARNING</h3>
          <div className="mt-5 space-y-3 text-xs text-slate-400">
            <Link className="block hover:text-[#e2bd78]" to="/gd">Group Discussion</Link>
            <Link className="block hover:text-[#e2bd78]" to="/lecturette">Lecturette</Link>
            <Link className="block hover:text-[#e2bd78]" to="/current-affairs">Current Affairs</Link>
            <Link className="block hover:text-[#e2bd78]" to="/defence-knowledge">Defence Knowledge</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-extrabold tracking-widest text-white">EXAMINATIONS</h3>
          <div className="mt-5 space-y-3 text-xs text-slate-400">
            {exams.map((exam) => <Link key={exam} className="block hover:text-[#e2bd78]" to="/exams">{exam}</Link>)}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] text-slate-500">
        © {new Date().getFullYear()} Defence Edge. All rights reserved.
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ForceStrip />
        <PreparationShortcuts />
        <ExamsSection />
        <DailyLearning />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  )
}
