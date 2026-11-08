
import {
  ArrowRight,
  Shield,
  Menu,
  X,
  Target,
  BookOpen,
  Newspaper,
  GraduationCap,
  Users,
  Plane,
  Anchor,
  ChevronRight,
  Crosshair,
  ClipboardList,
  Brain,
  MessageSquare,
  Trophy,
  Globe,
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'SSB Preparation', href: '#ssb' },
  { label: 'Defence Knowledge', href: '#forces' },
  { label: 'Current Affairs', href: '#current-affairs' },
  { label: 'Exams', href: '#exams' },
]

const forces = [
  { name: 'Indian Army', icon: Shield, description: 'Land-based defence force' },
  { name: 'Indian Navy', icon: Anchor, description: 'Maritime defence force' },
  { name: 'Indian Air Force', icon: Plane, description: 'Air and aerospace defence' },
  { name: 'NCC', icon: GraduationCap, description: 'National Cadet Corps' },
]

const preparationModules = [
  {
    title: 'Screening Test',
    description: 'Prepare for OIR tests, picture perception and group discussion.',
    icon: Target,
    number: '01',
  },
  {
    title: 'Psychology Tests',
    description: 'Practise TAT, WAT, SRT and Self Description with guidance.',
    icon: Brain,
    number: '02',
  },
  {
    title: 'GTO Tasks',
    description: 'Understand group discussions, planning and outdoor tasks.',
    icon: Users,
    number: '03',
  },
  {
    title: 'Personal Interview',
    description: 'Prepare personal, educational, technical and service questions.',
    icon: MessageSquare,
    number: '04',
  },
  {
    title: 'GD Preparation',
    description: 'Study important topics, develop arguments and practise discussions.',
    icon: Globe,
    number: '05',
  },
  {
    title: 'Lecturette',
    description: 'Build structured speeches with timed speaking practice.',
    icon: ClipboardList,
    number: '06',
  },
]

const exams = [
  { name: 'CDS', description: 'Combined Defence Services' },
  { name: 'AFCAT', description: 'Air Force Common Admission Test' },
  { name: 'NDA', description: 'National Defence Academy' },
  { name: 'SSC CPO', description: 'Sub-Inspector Examination' },
  { name: 'SSC CHSL', description: 'Combined Higher Secondary Level' },
  { name: 'NCC Entry', description: 'NCC Special Entry Preparation' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-defence text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-gold text-gold">
            <Shield size={27} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-[0.16em]">
              DEFENCE EDGE
            </h1>
            <p className="text-[10px] tracking-wider text-gold">
              लक्ष्य वर्दी, तैयारी पक्की!
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#preparation"
            className="border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-defence"
          >
            Start Learning
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-defence px-5 py-4 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-sm text-gray-200 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#preparation"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block bg-gold px-5 py-3 text-sm font-semibold text-defence"
          >
            Start Learning
          </a>
        </nav>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-defence-light text-white"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(199,167,91,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(199,167,91,0.5) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 border border-gold/50 px-3 py-2 text-[11px] font-semibold tracking-[0.18em] text-gold">
            <Shield size={15} />
            DISCIPLINE · KNOWLEDGE · SERVICE
          </div>

          <h2 className="max-w-2xl text-4xl font-bold leading-[1.16] sm:text-5xl lg:text-6xl">
            Your Journey
            <br />
            Towards the
            <span className="block text-gold">Uniform Begins Here.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-300">
            Prepare for SSB, understand India's Armed Forces, strengthen your
            defence knowledge and work towards your goal with structured
            learning resources.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#preparation"
              className="inline-flex items-center gap-3 bg-gold px-6 py-3.5 text-sm font-bold text-defence transition hover:bg-[#dfc47e]"
            >
              Start Preparation <ArrowRight size={18} />
            </a>

            <a
              href="#forces"
              className="inline-flex items-center gap-3 border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Resources
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
            <div>
              <p className="text-sm font-bold text-gold">SSB</p>
              <p className="mt-1 text-xs text-gray-400">Selection preparation</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gold">Defence</p>
              <p className="mt-1 text-xs text-gray-400">Knowledge hub</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gold">Exams</p>
              <p className="mt-1 text-xs text-gray-400">Structured practice</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="border border-gold/50 p-3">
            <div className="relative flex aspect-[5/4] flex-col items-center justify-center overflow-hidden bg-[#233b31] px-5 text-center">
              <div className="absolute left-0 top-0 h-20 w-20 border-l border-t border-gold/50" />
              <div className="absolute bottom-0 right-0 h-20 w-20 border-b border-r border-gold/50" />

              <Shield size={94} strokeWidth={1} className="text-gold" />

              <p className="mt-6 text-2xl font-bold tracking-[0.2em]">
                DEFENCE EDGE
              </p>

              <div className="mt-4 h-px w-24 bg-gold" />

              <p className="mt-5 text-sm tracking-[0.16em] text-gold">
                लक्ष्य वर्दी, तैयारी पक्की!
              </p>

              <p className="mt-3 text-xs text-gray-300">
                Learn · Practise · Prepare
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 -z-0 h-24 w-24 border-b border-l border-gold/70" />
          <div className="absolute -right-4 -top-4 -z-0 h-20 w-20 border-r border-t border-gold/70" />
        </div>
      </div>
    </section>
  )
}

function ForcesSection() {
  return (
    <section id="forces" className="border-b border-[#e2e1d7] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-5 py-9 md:grid-cols-4 lg:px-8">
        {forces.map(({ name, icon: Icon, description }) => (
          <div key={name} className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-cream text-olive">
              <Icon size={25} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-defence">{name}</h3>
              <p className="mt-1 text-xs text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function PreparationSection() {
  return (
    <section id="ssb" className="bg-cream">
      <div
        id="preparation"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-olive">
              LEARN AND PREPARE
            </p>
            <h2 className="mt-3 text-3xl font-bold text-defence sm:text-4xl">
              SSB Preparation Centre
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
              Understand each stage of the selection process and prepare with
              organised study material and practical exercises.
            </p>
          </div>

          <a
            href="#exams"
            className="inline-flex items-center gap-2 text-sm font-bold text-olive hover:text-defence"
          >
            Explore examination preparation <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preparationModules.map(({ title, description, icon: Icon, number }) => (
            <a
              href="#module-details"
              key={number}
              className="group border border-[#deded3] bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <Icon size={29} className="text-olive" />
                <span className="text-xs font-semibold tracking-widest text-[#b3a77f]">
                  {number}
                </span>
              </div>

              <h3 className="mt-7 text-lg font-bold text-defence">
                {title}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-600">
                {description}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-[#ecece5] pt-4 text-xs font-semibold text-olive">
                <span>Explore section</span>
                <ChevronRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExamSection() {
  return (
    <section id="exams" className="bg-[#e9e9df]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="text-xs font-bold tracking-[0.22em] text-olive">
          EXAMINATION PREPARATION
        </p>

        <h2 className="mt-3 text-3xl font-bold text-defence sm:text-4xl">
          Prepare for Your Next Opportunity
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
          Explore examination resources, subject-wise learning material and
          practice activities for defence and other competitive examinations.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam) => (
            <a
              href="#exam-details"
              key={exam.name}
              className="flex items-center justify-between border border-[#d4d3c8] bg-white p-6 transition hover:border-gold hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-defence">{exam.name}</h3>
                <p className="mt-2 text-xs text-gray-500">{exam.description}</p>
              </div>
              <ArrowRight size={19} className="text-olive" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResourcesSection() {
  return (
    <section id="current-affairs" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.22em] text-olive">
            STAY INFORMED · KEEP IMPROVING
          </p>
          <h2 className="mt-3 text-3xl font-bold text-defence sm:text-4xl">
            Learning & Practice Resources
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="border-l-2 border-gold bg-cream p-8">
            <Newspaper size={31} className="text-olive" />
            <h3 className="mt-6 text-xl font-bold text-defence">
              Daily Current Affairs
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Follow national, international, defence, economy, science and
              technology developments with dated information and reliable
              sources.
            </p>
            <span className="mt-6 inline-block text-xs font-bold tracking-wider text-olive">
              LEARNING SECTION IN DEVELOPMENT
            </span>
          </article>

          <article className="border-l-2 border-gold bg-cream p-8">
            <Crosshair size={31} className="text-olive" />
            <h3 className="mt-6 text-xl font-bold text-defence">
              Practice & Assessment
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Strengthen your preparation through topic-wise quizzes, timed
              practice, explanations and revision activities.
            </p>
            <span className="mt-6 inline-block text-xs font-bold tracking-wider text-olive">
              PRACTICE SECTION IN DEVELOPMENT
            </span>
          </article>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ForcesSection />
        <PreparationSection />
        <ExamSection />
        <ResourcesSection />
      </main>
      <footer className="bg-defence px-5 py-10 text-center text-gray-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-2 text-white">
            <Shield size={22} className="text-gold" />
            <span className="font-bold tracking-[0.2em]">DEFENCE EDGE</span>
          </div>

          <p className="mt-3 text-sm text-gold">
            लक्ष्य वर्दी, तैयारी पक्की!
          </p>

          <p className="mt-5 text-xs text-gray-500">
            A learning platform for SSB and Defence examination preparation.
          </p>

          <div className="mt-7 border-t border-white/10 pt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} Defence Edge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
