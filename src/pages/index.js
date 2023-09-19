import Data from '../app/components/data'; //bcs i have export default in the data.js file, so i can name this whatever i want
import ArticleCard from '../app/components/ArticleCard';

export default function Home() {
  const projectName = 'Exercise Two'; //everytime you use a {} you re inserting a js value

  //console.log(Data); //get rid of console.log before submit project
  return (
    <main>
        <h1>{projectName}</h1>
        <ArticleCard title="Cool Title" description="Cool description"/>
        <ArticleCard title="Another Title" />
    </main>
  )
}
