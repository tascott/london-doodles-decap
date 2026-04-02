import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Design2Home from '../themes/design2/HomePage';

export default Design2Home;

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
