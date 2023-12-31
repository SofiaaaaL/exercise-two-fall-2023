"use client";

import data from "../data";
import Link from 'next/link';
import styles from "./articleCard.module.css";

const ArticleCard = ({ date, description, id, imageAlt, imageSrc, text, title }) => {
    return (
        <div className={styles.articleCard}>
            <div className={styles.articleCardImage}>
                <img src={imageSrc} alt={imageAlt} />
            </div>

            <div className={styles.articleCardContent}>
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{description}</p>
                <p>
                    <Link href={`article/${id}`}>Read More</Link>
                </p>
           </div>
        </div>
    );
};

export default ArticleCard;