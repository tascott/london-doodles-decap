import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Head from 'next/head';
import { Nav, Hero, Contact } from './index';

const AvailableGallery = ({ data }) => (
  <section className="gallery" id="gallery">
    <h2 className="gallery__title">{data.title}</h2>
    <p className="gallery__description">{data.description}</p>
    <div className="gallery__grid">
      {data.images.map((image, index) => (
        <div key={index} className="gallery__item">
          <div className="gallery__image-container">
            <Image
              src={image.image}
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

export default function Available({ data }) {
  return (
    <>
      <Head>
        <title>Available Doodles | London Doodle Dogs</title>
      </Head>
      <Nav />
      <main>
        <Hero data={data.hero} />
        <AvailableGallery data={data.gallery} />
        <Contact data={data} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content/available.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return {
    props: {
      data,
    },
  };
}
