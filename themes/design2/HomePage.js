import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import FeatureIcon from '../../components/FeatureIcon';
import QuoteMark from '../../components/QuoteMark';
import { NavMenuIcon } from '../../components/NavMenuIcon';
import { whatsAppHref } from '../../lib/whatsapp';

function splitTitle(title) {
  if (!title) return { first: '', rest: '' };
  const parts = String(title).trim().split(/\s+/);
  if (parts.length < 2) return { first: title, rest: '' };
  return { first: parts[0], rest: parts.slice(1).join(' ') };
}

const D2Hero = ({ data }) => {
  const { first, rest } = splitTitle(data?.title);
  return (
    <section className="d2-hero">
      <div className="d2-hero__glow" aria-hidden />
      <div className="d2-hero__layout">
        <div className="d2-hero__copy">
          <p className="d2-hero__eyebrow">{data?.subtitle}</p>
          <h1 className="d2-hero__title">
            {first}
            {rest ? (
              <>
                {' '}
                <span className="d2-hero__title-accent">{rest}</span>
              </>
            ) : null}
          </h1>
          <div className="d2-hero__rule" aria-hidden />
          <p className="d2-hero__tagline">
            Family-raised Australian type Labradoodles from our Hertfordshire home — health-tested lines, lifetime support.
          </p>
        </div>
        <div className="d2-hero__visual">
          <Image
            src="/images/dogs.jpg"
            alt=""
            fill
            className="d2-hero__image"
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 55vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="d2-hero__organic" aria-hidden />
        </div>
      </div>
    </section>
  );
};

const D2About = ({ data }) => {
  const [i, setI] = useState(0);
  const { panels } = data;
  const next = () => setI((p) => (p + 1) % panels.length);
  const prev = () => setI((p) => (p - 1 + panels.length) % panels.length);

  useEffect(() => {
    const t = setInterval(next, 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="d2-about" id="about">
      <div className="d2-about__head">
        <p className="d2-about__label">Our story</p>
        <h2 className="d2-about__title">Where every puppy begins</h2>
      </div>
      <div className="d2-about__carousel">
        <div className="d2-about__panels">
          {panels.map((panel, index) => (
            <div
              key={index}
              className={`d2-about__panel ${index === i ? 'd2-about__panel--active' : ''}`}
            >
              <span className="d2-about__num" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="d2-about__content">
                <h3 className="d2-about__panel-title">{panel.title}</h3>
                <div className="d2-about__panel-text" dangerouslySetInnerHTML={{ __html: panel.content }} />
              </div>
              <div className="d2-about__image-wrap">
                <Image src={panel.image} alt="" fill className="d2-about__image" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
        <div className="d2-about__controls">
          <button type="button" className="d2-about__arrow" onClick={prev} aria-label="Previous">
            ←
          </button>
          <div className="d2-about__dots">
            {panels.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`d2-about__dot ${index === i ? 'd2-about__dot--active' : ''}`}
                onClick={() => setI(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" className="d2-about__arrow" onClick={next} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

const D2Features = ({ features }) => (
  <section className="d2-features" id="features">
    <div className="d2-features__head">
      <p className="d2-features__label">Why families choose us</p>
      <h2 className="d2-features__title">Raised with intention, placed with care</h2>
    </div>
    <div className="d2-features__grid">
      {features.map((f, index) => (
        <article key={index} className="d2-features__card">
          <div>
            <div className="d2-features__icon-wrap">
              <FeatureIcon name={f.icon} className="d2-features__svg" />
            </div>
            <h3 className="d2-features__card-title">{f.title}</h3>
          </div>
          <p className="d2-features__card-text">{f.description}</p>
        </article>
      ))}
    </div>
  </section>
);

const D2Gallery = ({ data }) => (
  <section className="d2-gallery" id="gallery">
    <div className="d2-gallery__head">
      <span className="d2-gallery__watermark" aria-hidden>
        Paws
      </span>
      <h2 className="d2-gallery__title">{data.title}</h2>
      {data.description ? <p className="d2-gallery__desc">{data.description}</p> : null}
    </div>
    <div className="d2-gallery__grid">
      {data.images.map((img, index) => (
        <div key={index} className="d2-gallery__item">
          <div
            className="d2-gallery__img-box"
            style={{ paddingBottom: `${100 + (index % 3) * 25}%` }}
          >
            <Image src={img.image} alt={img.alt} fill className="d2-gallery__image" sizes="(max-width: 520px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const D2Litters = ({ data }) => (
  <section className="d2-litters" id="litters">
    <div className="d2-litters__head">
      <h2 className="d2-litters__title">{data.title}</h2>
    </div>
    <div className="d2-litters__grid">
      {data.litters.map((litter, index) => (
        <article key={index} className="d2-litters__card">
          <h3 className="d2-litters__card-title">{litter.title}</h3>
          <p className="d2-litters__date">{litter.date}</p>
          <p className="d2-litters__card-text">{litter.description}</p>
        </article>
      ))}
    </div>
  </section>
);

const D2Testimonials = ({ data }) => (
  <section className="d2-testimonials">
    <div className="d2-testimonials__head">
      <h2 className="d2-testimonials__title">{data.title}</h2>
    </div>
    <div className="d2-testimonials__grid">
      {data.items.map((item, index) => (
        <blockquote key={index} className="d2-testimonials__card">
          <QuoteMark className="d2-testimonials__quote-icon" />
          <p className="d2-testimonials__quote">{item.quote}</p>
          <footer className="d2-testimonials__author">{item.author}</footer>
        </blockquote>
      ))}
    </div>
  </section>
);

const D2Contact = ({ data }) => {
  const wa = whatsAppHref(data.contact?.whatsappPhone);
  return (
    <section className="d2-contact" id="contact">
      <div className="d2-contact__layout">
        <div className="d2-contact__intro">
          <h2 className="d2-contact__title">{data.aboutUs?.title}</h2>
          <p className="d2-contact__lead">{data.aboutUs?.description}</p>
          {wa ? (
            <>
              <p className="d2-contact__cta-label">Prefer WhatsApp?</p>
              <a href={wa} className="d2-contact__wa" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </>
          ) : null}
        </div>
        <div className="d2-contact__form-card">
          <h3 className="d2-contact__form-title">{data.contact?.title}</h3>
          <form action="https://formspree.io/f/mgejnzkv" method="POST">
            <div className="d2-contact__field">
              <input className="d2-contact__input" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="d2-contact__field">
              <input className="d2-contact__input" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="d2-contact__field">
              <input className="d2-contact__input" type="tel" name="phone" placeholder="Phone (optional)" />
            </div>
            <div className="d2-contact__field">
              <textarea className="d2-contact__input d2-contact__textarea" name="message" placeholder="Your message" required rows={5} />
            </div>
            <button type="submit" className="d2-contact__submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const D2Nav = () => {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    const path = window.location.pathname;
    if (path === '/' || path === '/design1' || path === '/design2') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    setOpen(false);
  };

  return (
    <header className="d2-nav">
      <div className="d2-nav__inner">
        <div className="d2-nav__logo">
          <a href="/">
            <Image src="/images/logo10.png" alt="London Doodles" width={167} height={50} priority />
          </a>
        </div>
        <nav className={`d2-nav__links ${open ? 'd2-nav__links--open' : ''}`} aria-label="Main">
          <button type="button" className="d2-nav__link" onClick={() => go('features')}>
            What we do
          </button>
          <button type="button" className="d2-nav__link" onClick={() => go('about')}>
            Story
          </button>
          <button type="button" className="d2-nav__link" onClick={() => go('gallery')}>
            Gallery
          </button>
          <button type="button" className="d2-nav__link" onClick={() => go('litters')}>
            Litters
          </button>
          <button type="button" className="d2-nav__link" onClick={() => go('contact')}>
            Contact
          </button>
          <a href="/available" className="d2-nav__link">
            Available
          </a>
        </nav>
        <a href="mailto:amy@londondoodledogs.com" className="d2-nav__email">
          Email us
        </a>
        <button type="button" className="d2-nav__menu" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <NavMenuIcon open={open} />
        </button>
      </div>
    </header>
  );
};

export default function Design2Home({ data }) {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  }, []);

  return (
    <>
      <Head>
        <title>London Doodle Dogs | Family Raised Doodles</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="theme-design2">
        <D2Nav />
        <main>
          <D2Hero data={data.hero} />
          <D2About data={data.about} />
          <D2Features features={data.features} />
          <D2Gallery data={data.gallery} />
          <D2Litters data={data.upcomingLitters} />
          <D2Testimonials data={data.testimonials} />
          <D2Contact data={data} />
        </main>
      </div>
    </>
  );
}
