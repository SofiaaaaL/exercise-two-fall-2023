//within js you can export and import code
import { useRouter } from "next/router";
import "../../app/globals.css"; //serve as a reset stylesheet
import Data from '../../app/components/data';
import styles from './article.module.css';

export default function Article() {
    const router = useRouter();
    const slug = router.query.slug;

    const articleData = Data.find((val) => val.id === slug); //should equal the article with the slug 
    // const text = Data.map((val) => val.articleText === );

    if(!articleData) return null; //sometimes do this for loading page

    return (
        <main> 
            
            <div className={styles.articleHeader} style={ {backgroundImage: `url('${articleData.image.url}')`} }>
                <div className={styles.articleSection}>
                    {/* <h1>Article</h1> */}
                    <h1>{articleData.title}</h1>
                    <p>{new Date(articleData.publishedDate).toDateString()}</p>
                    <p className={styles.articleHeaderBlurb}>{articleData.blurb}</p>
                    {/* <p>{articleData.articleText}</p> */}
                </div>
            </div>

            <div className={styles.articleBody}>
                <div className={styles.articleSection}>
                    {/* {Data.map((textChunk)) => <p>{textChunk.}</p>} */}
                    
                    {articleData.articleText.map((textChunk) => {
                        switch(textChunk.type){
                            case 'p':
                                return <p>{textChunk.data}</p>
                            case 'h2':
                                return <h2>{textChunk.data}</h2>
                            case 'h3':
                                return <h3>{textChunk.data}</h3>
                            default:
                                return <p>{textChunk.data}</p>
                        }
                    })}

                </div>
            </div>
            
        </main>
    );
}
