
import {
  Shield, Menu, Search, ArrowRight, BookOpen,
  Target, Newspaper, GraduationCap, Users,
  Swords, Plane, Anchor, ChevronRight
} from 'lucide-react'

const modules = [
  { icon: Target, title: 'SSB Preparation', desc: 'Prepare for every stage of the selection process.', link: 'Screening, Psychology, GTO & Interview' },
  { icon: Users, title: 'Group Discussion', desc: 'Develop your knowledge, confidence and communication.', link: 'Topics, facts & practice' },
  { icon: BookOpen, title: 'Lecturette', desc: 'Build structured speeches on important topics.', link: 'Topics, outlines & timed practice' },
  { icon: GraduationCap, title: 'Personal Interview', desc: 'Prepare for personal and technical questions.', link: 'CIQs & interview preparation' },
  { icon: Newspaper, title: 'Current Affairs', desc: 'Stay informed about India and the world.', link: 'National, international & defence' },
  { icon: Swords, title: 'Defence Knowledge', desc: 'Explore the Indian Armed Forces and other services.', link: 'Forces, ranks, weapons & exercises' },
]

const forces = [
  { icon: Shield, name: 'Indian Army' },
  { icon: Anchor, name: 'Indian Navy' },
  { icon: Plane, name: 'Indian Air Force' },
  { icon: GraduationCap, name: 'NCC' },
]

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#17251f]">
      <header className="bg-[#101f1b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#c7a75b] text-[#d9bd77]">
              <Shield size={27} />
            </div>
            <div>
              <div className="text-xl font-bold tracking-[0.16em]">DEFENCE EDGE</div>
              <div className="text-[10px] tracking-wider text-[#d9bd77]">लक्ष्य वर्दी, तैयारी पक्की!</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-gray-200 lg:flex">
            <a href="#" className="text-[#d9bd77]">Home</a>
            <a href="#preparation" className="hover:text-[#d9bd77]">SSB Preparation</a>
            <a href="#forces" className="hover:text-[#d9bd77]">Defence Knowledge</a>
            <a href="#updates" className="hover:text-[#d9bd77]">Current Affairs</a>
            <a href="#exams" className="hover:text-[#d9bd77]">Exams</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button aria-label="Search" className="p-2 text-gray-300 hover:text-white"><Search size={19} /></button>
            <button className="border border-[#c7a75b] px-5 py-2 text-sm text-[#e2c77f] hover:bg-[#c7a75b] hover:text-[#101f1b]">Sign In</button>
          </div>

          <button className="lg:hidden" aria-label="Open menu"><Menu /></button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#182c25] text-white">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#d9bd77 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 border border-[#c7a75b]/50 px-3 py-2 text-xs tracking-widest text-[#e1c57e]">
                <Shield size={15} /> YOUR DEFENCE PREPARATION PARTNER
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Prepare with Purpose.<br />
                <span className="text-[#d9bd77]">Serve with Pride.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-gray-300">
                Your learning destination for SSB preparation, defence knowledge and competitive defence examinations.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#preparation" className="flex items-center gap-2 bg-[#c5a45d] px-6 py-3 font-semibold text-[#15241e] hover:bg-[#dfc47e]">
                  Start Preparation <ArrowRight size={18} />
                </a>
                <a href="#forces" className="border border-white/40 px-6 py-3 font-medium hover:bg-white/10">
                  Explore Resources
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="border border-[#c7a75b]/50 p-3">
                <div className="flex aspect-[5/4] flex-col items-center justify-center bg-[#233b31] text-center">
                  <Shield size={100} strokeWidth={1} className="text-[#d9bd77]" />
                  <p className="mt-5 text-2xl font-bold tracking-[0.2em]">DEFENCE EDGE</p>
                  <p className="mt-2 text-sm tracking-widest text-[#d9bd77]">DISCIPLINE · KNOWLEDGE · SERVICE</p>
                  <div className="mt-7 h-px w-24 bg-[#c7a75b]" />
                  <p className="mt-5 text-sm text-gray-300">Your journey towards the uniform begins here.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-0 h-24 w-24 border-b border-r border-[#c7a75b]" />
            </div>
          </div>
        </section>

        <section id="forces" className="border-b border-[#deded3] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-8 md:grid-cols-4 lg:px-8">
            {forces.map(({icon: Icon, name}) => (
              <div key={name} className="flex items-center justify-center gap-3 text-[#24372e]">
                <Icon className="text-[#9b7b38]" size={27} />
                <span className="text-sm font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="preparation" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#987b40]">EXPLORE & LEARN</p>
              <h2 className="text-3xl font-bold text-[#17251f]">Preparation Centre</h2>
              <p className="mt-3 text-sm text-gray-600">Everything you need to strengthen your defence preparation.</p>
            </div>
            <a href="#exams" className="flex items-center gap-2 text-sm font-semibold text-[#8a6c32]">Explore all <ArrowRight size={16} /></a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(({icon: Icon, title, desc, link}) => (
              <a href="#updates" key={title} className="group border border-[#deded3] bg-white p-7 transition hover:border-[#b99a59] hover:shadow-md">
                <Icon size={29} className="mb-6 text-[#9a7b3e]" />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#ecece5] pt-4 text-xs text-[#8a6c32]">
                  <span>{link}</span><ChevronRight size={17} className="transition group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="exams" className="bg-[#e9e9df]">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#987b40]">EXAM PREPARATION</p>
            <h2 className="mt-3 text-3xl font-bold">Your Defence Career. Your Preparation.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {['CDS', 'AFCAT', 'NDA', 'SSC CPO', 'SSC CHSL', 'NCC Special Entry'].map(exam => (
                <span key={exam} className="border border-[#c9c9ba] bg-white px-5 py-3 text-sm font-semibold">{exam}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-l-2 border-[#b99a59] bg-white p-7">
              <Newspaper className="text-[#987b40]" size={28} />
              <h3 className="mt-5 text-xl font-bold">Daily Current Affairs</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">Build awareness of national, international and defence developments with reliable sources.</p>
              <p className="mt-5 text-xs text-[#987b40]">CONTENT SECTION — COMING SOON</p>
            </div>
            <div className="border-l-2 border-[#b99a59] bg-white p-7">
              <Target className="text-[#987b40]" size={28} />
              <h3 className="mt-5 text-xl font-bold">Practice & Assessment</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">Test your knowledge, practise interview questions and track your preparation.</p>
              <p className="mt-5 text-xs text-[#987b40]">CONTENT SECTION — COMING SOON</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#101f1b] px-5 py-8 text-center text-sm text-gray-300">
        <p className="font-bold tracking-[0.2em] text-white">DEFENCE EDGE</p>
        <p className="mt-2 text-[#d9bd77]">लक्ष्य वर्दी, तैयारी पक्की!</p>
        <p className="mt-5 text-xs text-gray-500">Built for learning, preparation and service.</p>
      </footer>
    </div>
  )
}

export default App
