import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

const Hero = ({ data }) => (
  <div className="hero">
    <div className="hero__image-container">
      <Image
        src="/images/dogs.jpg"
        alt="Hero"
        fill
        className="hero__image"
        priority
        quality={100}
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="hero__content">
      <div>
        <h1 className="hero__title">{data.title}</h1>
        <p className="hero__subtitle">{data.subtitle}</p>
      </div>
    </div>
  </div>
);

const About = ({ data }) => {
  const [currentPanel, setCurrentPanel] = useState(0);

  const nextPanel = () => {
    setCurrentPanel((prev) => (prev + 1) % data.panels.length);
  };

  const prevPanel = () => {
    setCurrentPanel((prev) => (prev - 1 + data.panels.length) % data.panels.length);
  };

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextPanel();
    }, 10000); // 10 seconds

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <section className="about" id="about">
      <h2 className="about__title">{data.title}</h2>
      <div className="about__carousel">
        <button className="about__nav about__nav--prev" onClick={prevPanel}>
          ←
        </button>
        <div className="about__panels">
          {data.panels.map((panel, index) => (
            <div
              key={index}
              className={`about__panel ${index === currentPanel ? 'about__panel--active' : ''}`}
            >
              <div className="about__content">
                <h3 className="about__panel-title">{panel.title}</h3>
                <div className="about__panel-text" dangerouslySetInnerHTML={{ __html: panel.content }} />
              </div>
              <div className="about__image-container">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="about__image"
                />
              </div>
            </div>
          ))}
        </div>
        <button className="about__nav about__nav--next" onClick={nextPanel}>
          →
        </button>
      </div>
    </section>
  );
};

const Features = ({ features }) => (
  <section className="features">
    <div className="features__grid">
      {features.map((feature, index) => (
        <div key={index} className="features__item">
          <span className="features__icon">{feature.icon}</span>
          <h3 className="features__title">{feature.title}</h3>
          <p className="features__description">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Gallery = ({ data }) => (
  <section className="gallery" id="gallery">
    <h2 className="gallery__title">{data.title}</h2>
    <div className="gallery__grid">
      {data.images.map((image, index) => (
        <div key={index} className="gallery__item">
          <div className="gallery__image-container">
            <Image
              src="/images/dogs.jpg"
              alt={image.alt}
              fill
              className="gallery__image"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const UpcomingLitters = ({ data }) => (
  <section className="upcoming-litters" id="litters">
    <h2 className="upcoming-litters__title">{data.title}</h2>
    <div className="upcoming-litters__grid">
      {data.litters.map((litter, index) => (
        <div key={index} className="upcoming-litters__item">
          <h3 className="upcoming-litters__item-title">{litter.title}</h3>
          <p className="upcoming-litters__item-date">{litter.date}</p>
          <p className="upcoming-litters__item-description">{litter.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Contact = ({ data }) => (
  <section className="contact" id="contact">
    <div className="contact__container">
      <h2 className="contact__title">{data.title}</h2>
      <p className="contact__description">{data.description}</p>
      <div className="contact__form-placeholder">
        Contact form will be added here
      </div>
    </div>
  </section>
);

const Nav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar__container">
          <div className="top-bar__logo">
            <Image
              src="/images/logo-1.png"
              alt="London Doodles"
              width={167}
              height={50}
              className="top-bar__logo-image"
              priority
            />
          </div>
          <a href="mailto:amy@londondoodledogs.com" className="top-bar__email">
            amy@londondoodledogs.com
          </a>
        </div>
      </div>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__links">
            <button onClick={() => scrollToSection('about')} className="nav__link">
              What We Do
            </button>
            <button className="nav__link">
              Prices
            </button>
            <button onClick={() => scrollToSection('about')} className="nav__link">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav__link">
              Contact
            </button>
            <button onClick={() => scrollToSection('litters')} className="nav__link">
              Available Puppies
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default function Home({ data }) {
  return (
    <>
      <Nav />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Features features={data.features} />
        <Gallery data={data.gallery} />
        <UpcomingLitters data={data.upcomingLitters} />
        <Contact data={data.contact} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content/home.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return {
    props: {
      data,
    },
  };
}