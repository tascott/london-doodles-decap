import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import HomePageDesign1 from '../themes/design1/HomePage';

export default HomePageDesign1;

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
