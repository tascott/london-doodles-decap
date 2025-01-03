import { useEffect } from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// Component imports
const Hero = ({ data }) => (
  <div className="relative h-[600px]">
    <div className="absolute inset-0">
      <Image
        src={data.image}
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    <div className="relative h-full flex items-center justify-center text-center text-white px-4">
      <div>
        <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
        <p className="text-xl">{data.subtitle}</p>
      </div>
    </div>
  </div>
);

const Litters = ({ data }) => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.puppies.map((puppy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={puppy.image}
                alt={puppy.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{puppy.name}</h3>
              <p className="text-gray-600 mb-2">{puppy.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600">{puppy.price}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {puppy.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = ({ data }) => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data.items.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <p className="font-bold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = ({ data }) => (
  <section className="py-16 px-4 bg-blue-600 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
      <p className="mb-8">{data.description}</p>
      <a
        href={data.buttonLink}
        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
      >
        {data.buttonText}
      </a>
    </div>
  </section>
);

export default function Home({ data }) {
  return (
    <main>
      <Hero data={data.hero} />
      <Litters data={data.availableLitters} />
      <Testimonials data={data.testimonials} />
      <CTA data={data.cta} />
    </main>
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