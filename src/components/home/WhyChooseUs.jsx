import {
  FiBook, FiMonitor, FiBriefcase, FiUsers,
  FiAward, FiTarget
} from 'react-icons/fi';

const whyItems = [
  {
    icon: <FiBriefcase />,
    title: 'Industry-Oriented Curriculum',
    desc: 'Syllabus built around real industry workflows, OEM requirements, and manufacturing standards.',
  },
  {
    icon: <FiMonitor />,
    title: 'Software-First Training',
    desc: 'Hands-on training with AutoCAD, SolidWorks, Creo, CATIA and NX CAD — the tools employers use.',
  },
  {
    icon: <FiBook />,
    title: 'Project-Based Learning',
    desc: 'Every module includes practical design projects inspired by real industrial and automotive applications.',
  },
  {
    icon: <FiUsers />,
    title: 'Expert Instructors',
    desc: 'Learn from working engineers with direct industry experience in OEM and core manufacturing sectors.',
  },
  {
    icon: <FiAward />,
    title: 'Course Completion Certificate',
    desc: 'Receive a verifiable certificate upon completion to strengthen your engineering portfolio.',
  },
  {
    icon: <FiTarget />,
    title: 'Career-Focused Outcomes',
    desc: 'Programs designed to make you interview-ready with strong CAD portfolio and design knowledge.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad section-bg-light">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why Choose Us</span>
          <h2>What Makes Us Different</h2>
          <div className="underline-bar" />
          <p>We focus on real skills, real software, and real projects — because that's what industry demands.</p>
        </div>

        <div className="row g-4">
          {whyItems.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="why-card">
                <div className="icon-wrap">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
