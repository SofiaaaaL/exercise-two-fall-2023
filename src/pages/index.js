import Data from '../app/components/data'; //bcs i have export default in the data.js file, so i can name this whatever i want
import ArticleCard from '../app/components/ArticleCard';
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = 'Exercise Two'; //everytime you use a {} you re inserting a js value

  //console.log(Data); //get rid of console.log before submit project
  return (
    <main className={styles.page}>
        <h1>{projectName}</h1>
        {Data.map((article) => (
          <ArticleCard 
            key={article.id}
            date={new Date(article.publishedDate).toDateString()}
            description={article.blurb}
            imageAlt={article.image.alt}
            imageSrc={article.image.url}
            title={article.title}
          />
        ))}
    </main>
  )
}


{/* <ArticleCard 
        date="a date"
        title="Cool Title" 
        description="Cool description"/> */}