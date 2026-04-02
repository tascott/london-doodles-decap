import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import FeatureIcon from '../../components/FeatureIcon';
import QuoteMark from '../../components/QuoteMark';
import { NavMenuIcon } from '../../components/NavMenuIcon';
import { whatsAppHref } from '../../lib/whatsapp';

export const Hero = ({ data }) => (
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
        <h1 className="hero__title">{data?.title}</h1>
        <p className="hero__subtitle">{data?.subtitle}</p>
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextPanel();
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__head">
        <p className="about__kicker">Our story</p>
        <h2 className="about__section-title">How we raise every litter</h2>
      </div>
      <div className="about__carousel">
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
        <div className="about__controls">
          <button type="button" className="about__nav about__nav--prev" onClick={prevPanel} aria-label="Previous slide">
            ←
          </button>
          <div className="about__dots" role="tablist" aria-label="About slides">
            {data.panels.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === currentPanel}
                className={`about__dot ${index === currentPanel ? 'about__dot--active' : ''}`}
                onClick={() => setCurrentPanel(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" className="about__nav about__nav--next" onClick={nextPanel} aria-label="Next slide">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

const Features = ({ features }) => (
  <section className="features" id="features">
    <div className="features__head">
      <p className="features__kicker">What we offer</p>
      <h2 className="features__section-title">Raised with care, placed with intention</h2>
    </div>
    <div className="features__grid">
      {features.map((feature, index) => (
        <div key={index} className="features__item">
          <span className="features__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <FeatureIcon name={feature.icon} className="features__icon-svg" />
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
    <p className="gallery__description">{data.description}</p>
    <div className="gallery__grid">
      {data.images.map((image, index) => (
        <div key={index} className="gallery__item">
          <div
            className="gallery__image-container"
            style={{
              paddingBottom: `${100 + (index % 3) * 25}%` // Varies height between 100-150%
            }}
          >
            <Image
              src={image.image} // Use actual image path from data
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

const Testimonials = ({ data }) => (
  <section className="testimonials">
    <div className="testimonials__container">
      <h2 className="testimonials__title">{data.title}</h2>
      <div className="testimonials__grid">
        {data.items.map((testimonial, index) => (
          <div key={index} className="testimonials__card">
            <p className="testimonials__quote">
              <QuoteMark className="testimonials__quote-mark" />
              {testimonial.quote}
            </p>
            <p className="testimonials__author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = ({ data }) => {
  const waUrl = whatsAppHref(data.contact?.whatsappPhone);
  return (
  <section className="contact" id="contact">
    <div className="contact__container">
      <h2 className="contact__title">{data.aboutUs?.title}</h2>
      <p className="contact__description">{data.aboutUs?.description}</p>
      <h3 className="contact__form-title">{data.contact?.title}</h3>
      {waUrl ? (
        <p className="contact__whatsapp-wrap">
          <a
            href={waUrl}
            className="contact__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </p>
      ) : null}
      <form
        action="https://formspree.io/f/mgejnzkv"
        method="POST"
        className="contact__form"
      >
        <div className="contact__form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="contact__input"
          />
        </div>
        <div className="contact__form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="contact__input"
          />
        </div>
        <div className="contact__form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (optional)"
            className="contact__input"
          />
        </div>
        <div className="contact__form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="contact__input contact__textarea"
          ></textarea>
        </div>
        <button type="submit" className="contact__submit">
          Send Message
        </button>
      </form>
    </div>
  </section>
  );
};

export const Nav = () => {
  const scrollToSection = (id) => {
    // Check if we're on the home page
    if (['/', '/design1', '/design2'].includes(window.location.pathname)) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${id}`;
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__bar">
        <div className="header__inner">
          <div className="header__logo">
            <Image
              src="/images/logo10.png"
              alt="London Doodles"
              width={167}
              height={50}
              className="header__logo-image"
              priority
            />
          </div>
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`} aria-label="Main">
            <div className="header__links">
              <button type="button" onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }} className="header__link">
                What we do
              </button>
              <button type="button" onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="header__link">
                About us
              </button>
              <button type="button" onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="header__link">
                Contact
              </button>
              <button type="button" onClick={() => { scrollToSection('litters'); setIsMenuOpen(false); }} className="header__link">
                Litters & prices
              </button>
              <a href="/available" className="header__link" onClick={() => setIsMenuOpen(false)}>
                Available doodles
              </a>
            </div>
          </nav>
          <a href="mailto:amy@londondoodledogs.com" className="header__email">
            amy@londondoodledogs.com
          </a>
          <button type="button" className="header__menu-btn" onClick={toggleMenu} aria-label="Menu" aria-expanded={isMenuOpen}>
            <NavMenuIcon open={isMenuOpen} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default function Home({ data }) {
  useEffect(() => {
    // Check for hash in URL and scroll to section
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>London Doodle Dogs | Family Raised Doodles</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="theme-design1">
        <Nav />
        <main>
          <Hero data={data.hero} />
          <About data={data.about} />
          <Features features={data.features} />
          <Gallery data={data.gallery} />
          <UpcomingLitters data={data.upcomingLitters} />
          <Testimonials data={data.testimonials} />
          <Contact data={data} />
        </main>
      </div>
    </>
  );
}
