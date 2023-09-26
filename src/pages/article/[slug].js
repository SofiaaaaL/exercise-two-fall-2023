//within js you can export and import code
import { useRouter } from "next/router";
import Data from '../../app/components/data';
import styles from '../../app/page.module.css';

export default function Article() {
    const router = useRouter();
    const slug = router.query.slug;

    const articleData = Data.find((val) => val.id === slug); //should equal the article with the slug 
    // const text = Data.map((val) => val.articleText === );

    if(!articleData) return null; //sometimes do this for loading page

    return (
        <main className={styles.page}>
            <h1>Article</h1>
            <p>{articleData.title}</p>
            <p>{articleData.blurb}</p>
            <p>{articleData.articleText}</p>
            <div>
                {Data.map((textChunk)) => <p>{textChunk.}</p>}
            </div>
        </main>
    );
}
