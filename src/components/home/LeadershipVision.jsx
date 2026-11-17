import { asset } from '../../utils/asset';

const ACHIEVEMENTS = [
  { value: '7,500+', label: 'Students trained per year' },
  { value: '200+', label: 'Industrial projects completed' },
  { value: '5,000+', label: 'Students placed per year' },
  { value: '50+', label: 'Awards won' },
];

export default function LeadershipVision() {
  return (
    <section className="leadership-vision-section">
      <div className="container">
        <header className="leadership-vision-header">
          <span className="eyebrow">Leadership Vision</span>
          <h2>Mr. Mohan Kumar</h2>
          <p>Managing Director of PUMO and MONZ</p>
        </header>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="leadership-portrait">
              <img
                src={asset('/mohan-kumar.png')}
                alt="Mr. Mohan Kumar, Managing Director of PUMO and MONZ"
                loading="lazy"
                onLoad={event => event.currentTarget.classList.add('loaded')}
              />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="leadership-achievements">
              <span className="eyebrow">Our Pumo Achievements</span>
              <h3>Genuine efforts always shine—numbers simply reflect the truth.</h3>
              <p>
                Here at Pumo Technovation, we focus on providing technical knowledge along with
                building a profile of each and every student with White Glove service and support
                because the end goal of our team is to make the students job-ready. Thus, our IT
                Courses have been proven to be the best for students. We, being one of the most
                preferred Software Training Institutes in India, work hard on giving our students
                the best learning experience.
              </p>

              <div className="leadership-stats">
                {ACHIEVEMENTS.map(item => (
                  <div className="leadership-stat" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
