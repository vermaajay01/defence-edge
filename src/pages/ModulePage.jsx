
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Target,
  Brain,
  Users,
  MessageSquare,
  ClipboardList,
  Clock,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const modules = {
  screening: {
    category: 'SSB SELECTION PROCESS',
    title: 'Screening Test',
    subtitle: 'Prepare for Stage I of the Services Selection Board assessment.',
    icon: Target,
    overview:
      'The screening stage assesses a candidate through Officer Intelligence Rating tests and the Picture Perception and Discussion Test.',
    sections: [
      {
        title: 'Officer Intelligence Rating (OIR)',
        description:
          'Practise verbal and non-verbal reasoning, including series, analogy, classification, coding-decoding and spatial questions.',
        topics: ['Verbal reasoning', 'Non-verbal reasoning', 'Number and letter series', 'Analogy and classification'],
      },
      {
        title: 'Picture Perception and Discussion Test',
        description:
          'Learn to observe a picture, develop a realistic story and communicate your interpretation during the group discussion.',
        topics: ['Picture observation', 'Story development', 'Character identification', 'Narration and discussion'],
      },
    ],
  },

  psychology: {
    category: 'SSB SELECTION PROCESS',
    title: 'Psychology Tests',
    subtitle: 'Understand the psychological tests and practise expressing your natural responses.',
    icon: Brain,
    overview:
      'The psychology assessment includes four major exercises designed to understand a candidate’s thought process, reactions and self-awareness.',
    sections: [
      {
        title: 'Thematic Apperception Test (TAT)',
        description:
          'Develop realistic stories based on pictures, with a clear situation, practical action and outcome.',
        topics: ['Observation', 'Identifying a central character', 'Planning practical action', 'Story completion'],
      },
      {
        title: 'Word Association Test (WAT)',
        description:
          'Practise forming meaningful and natural sentences in response to stimulus words.',
        topics: ['Positive thinking', 'Clarity of expression', 'Time management', 'Natural responses'],
      },
      {
        title: 'Situation Reaction Test (SRT)',
        description:
          'Practise responding to everyday and challenging situations with practical judgement.',
        topics: ['Decision making', 'Responsibility', 'Problem solving', 'Prioritisation'],
      },
      {
        title: 'Self Description Test (SD)',
        description:
          'Reflect on your personality through the perspectives of yourself and people who know you.',
        topics: ['Self-awareness', 'Strengths and weaknesses', 'Family perspective', 'Improvement plan'],
      },
    ],
  },

  gto: {
    category: 'SSB SELECTION PROCESS',
    title: 'GTO Tasks',
    subtitle: 'Understand group activities, planning exercises and outdoor leadership tasks.',
    icon: Users,
    overview:
      'The Group Testing Officer series consists of individual and group activities that assess practical behaviour, cooperation and communication.',
    sections: [
      {
        title: 'Group Discussion and Planning Exercise',
        description: 'Understand how to contribute constructively and develop practical group plans.',
        topics: ['Group discussion', 'Military planning exercise', 'Resource management', 'Time and priority'],
      },
      {
        title: 'Progressive and Half Group Tasks',
        description: 'Learn the basic principles of group obstacles and cooperation.',
        topics: ['Rules and structures', 'Team coordination', 'Practical problem solving', 'Group participation'],
      },
      {
        title: 'Individual Obstacles and Command Task',
        description: 'Understand individual initiative and responsibility during assigned activities.',
        topics: ['Individual obstacles', 'Command responsibility', 'Team direction', 'Safety awareness'],
      },
      {
        title: 'Lecturette and Final Group Task',
        description: 'Improve speaking confidence and constructive group participation.',
        topics: ['Short speech delivery', 'Clear communication', 'Team coordination', 'Task completion'],
      },
    ],
  },

  interview: {
    category: 'SSB SELECTION PROCESS',
    title: 'Personal Interview',
    subtitle: 'Prepare to present your experiences, decisions and aspirations honestly.',
    icon: MessageSquare,
    overview:
      'The personal interview explores your background, education, interests, responsibilities, awareness and motivation to join the Armed Forces.',
    sections: [
      {
        title: 'Personal Information',
        description: 'Prepare to discuss your family, hometown, education and everyday responsibilities.',
        topics: ['Family background', 'Hometown', 'Friends and relationships', 'Daily routine'],
      },
      {
        title: 'Education and Technical Knowledge',
        description: 'Revise your academic subjects, projects and practical technical fundamentals.',
        topics: ['Academic subjects', 'Final-year project', 'Technical fundamentals', 'Achievements'],
      },
      {
        title: 'Defence Awareness and Motivation',
        description: 'Understand the service, entry, role and responsibilities you are applying for.',
        topics: ['Service knowledge', 'Entry-specific questions', 'Current affairs', 'Motivation to serve'],
      },
      {
        title: 'Experiences and Responsibilities',
        description: 'Reflect on real examples from your school, college, activities and daily life.',
        topics: ['Leadership experiences', 'Challenges faced', 'Teamwork', 'Lessons learned'],
      },
    ],
  },

  gd: {
    category: 'COMMUNICATION & AWARENESS',
    title: 'Group Discussion',
    subtitle: 'Develop balanced opinions and communicate your ideas constructively.',
    icon: Users,
    overview:
      'Group discussion preparation requires awareness, logical reasoning, listening and the ability to contribute relevant points respectfully.',
    sections: [
      {
        title: 'Defence and National Security',
        description: 'Explore military modernisation, national security and strategic developments.',
        topics: ['Defence indigenisation', 'Cyber security', 'Border management', 'Maritime security'],
      },
      {
        title: 'National and Social Issues',
        description: 'Understand important issues affecting Indian society and governance.',
        topics: ['Education', 'Unemployment', 'Women in the workforce', 'Social media'],
      },
      {
        title: 'Economy and International Relations',
        description: "Study economic developments and India's engagement with the world.",
        topics: ['Indian economy', 'India and neighbouring countries', 'Globalisation', 'International organisations'],
      },
      {
        title: 'Discussion Practice',
        description: 'Practise structuring an opening point, supporting arguments and a balanced conclusion.',
        topics: ['Opening a discussion', 'Supporting arguments', 'Respectful disagreement', 'Summarising'],
      },
    ],
  },

  lecturette: {
    category: 'COMMUNICATION & AWARENESS',
    title: 'Lecturette',
    subtitle: 'Learn to organise your thoughts and deliver a clear, confident speech.',
    icon: ClipboardList,
    overview:
      'Lecturette preparation involves developing awareness and presenting a short, structured talk on a selected topic.',
    sections: [
      {
        title: 'Topic Preparation',
        description: 'Build knowledge across defence, national affairs, society and technology.',
        topics: ['Defence topics', 'National issues', 'International affairs', 'Science and technology'],
      },
      {
        title: 'Speech Structure',
        description: 'Organise your speech with an introduction, main discussion and conclusion.',
        topics: ['Opening', 'Background', 'Main arguments', 'Conclusion'],
      },
      {
        title: 'Timed Speaking Practice',
        description: 'Practise preparing and delivering a speech within a limited time.',
        topics: ['Preparation time', 'Speech timing', 'Fluency', 'Voice and confidence'],
      },
      {
        title: 'Self Assessment',
        description: 'Review the quality of your content and delivery after every practice session.',
        topics: ['Content relevance', 'Logical sequence', 'Clarity', 'Time management'],
      },
    ],
  },
}

function ModulePage() {
  const { moduleId } = useParams()
  const module = modules[moduleId]

  if (!module) {
    return (
      <main className="min-h-[70vh] bg-cream px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-defence">Page not found</h1>
        <p className="mt-4 text-gray-600">The requested learning section does not exist.</p>
        <Link to="/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-olive">
          <ArrowLeft size={17} /> Return to homepage
        </Link>
      </main>
    )
  }

  const Icon = module.icon

  return (
    <main className="min-h-screen bg-cream">
      <section className="bg-defence-light px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gold hover:text-white">
            <ArrowLeft size={17} /> Back to Home
          </Link>

          <div className="mt-10 flex items-start gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center border border-gold/50 text-gold sm:flex">
              <Icon size={34} />
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-gold">
                {module.category}
              </p>
              <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
                {module.title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                {module.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="border-l-2 border-gold bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <BookOpen size={23} className="text-olive" />
            <h2 className="text-xl font-bold text-defence">Overview</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            {module.overview}
          </p>
        </div>

        <div className="mb-8 mt-14">
          <p className="text-xs font-bold tracking-[0.2em] text-olive">
            LEARNING ROADMAP
          </p>
          <h2 className="mt-3 text-2xl font-bold text-defence sm:text-3xl">
            Explore the Topics
          </h2>
        </div>

        <div className="space-y-5">
          {module.sections.map((section, index) => (
            <article
              key={section.title}
              className="border border-[#deded3] bg-white p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-widest text-olive">
                  SECTION {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-gray-400">
                  {section.topics.length} topics
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-defence">
                {section.title}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                {section.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 border border-[#ecece5] bg-cream/60 px-4 py-3"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-olive" />
                    <span className="text-sm text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-[#ecece5] pt-5 text-xs text-gray-500">
                <Clock size={15} />
                <span>Detailed lessons and practice activities will be added in the next stage.</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-[#deded3] bg-[#e9e9df] p-7">
          <h2 className="text-xl font-bold text-defence">Continue your preparation</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Explore other preparation areas to develop a balanced understanding of the SSB selection process.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-defence px-5 py-3 text-sm font-semibold text-white hover:bg-olive"
          >
            Explore all modules <ChevronRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ModulePage
