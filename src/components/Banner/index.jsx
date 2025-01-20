import styles from './Banner.module.css';
import video from '../../json/featured.json';
import { useEffect, useState } from 'react';
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { Link } from 'react-router-dom';

function Banner() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const shuffledVideo = video.sort(() => Math.random() - 0.5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledVideo.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [shuffledVideo]);

    const nextItem = () => {    
        setCurrentIndex((prevIndex) => (prevIndex + 1) % video.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + video.length) % video.length);
    };

    const currentItem = video[currentIndex];

    return (
        <section className={styles.container}>
            <div
                className={styles.background}
                style={{
                    backgroundImage: `linear-gradient(to bottom,
                        rgba(0, 0, 0, 0.56),
                        rgba(0, 0, 0, 0.56)),
                      url('${currentItem.image}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    width: '100%',
                    maxHeight: 'auto',
                }}
            >
                <div className={styles.previousAndNext}>
                    <FcPrevious onClick={prevItem} className={styles.icon} />
                    <FcNext onClick={nextItem} className={styles.icon} />
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 style={{ backgroundColor: currentItem.color }} >{currentItem.category}</h1>
                        <h2>{currentItem.title}</h2>
                        <p>{currentItem.description}</p>
                    </div>
                    <div className={styles.minibanner} style={{ color: currentItem.color }}>
                        <img className={styles.image} alt={currentItem.title} src={currentItem.image} />
                        <Link to={`/${currentItem.id}`}>
                            <div className={styles.imageContainer} style={{ color: currentItem.color }}></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
