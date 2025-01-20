import { Link } from 'react-router-dom'
import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit, MdReadMore } from "react-icons/md"
import { useState } from 'react';

function Video({ video, category, onDelete, onEdit, onWatchVideo, onScrollToTop }) {

    const [pageTop, setPageTop] = useState(false);

    const scrollToTop = () => {
        setPageTop(true);
        window.scrollTo(0, 0);
    }

    return (
        <div className={styles.container} style={{ borderColor: category.color }}>
            <div className={styles.image}>
                <img className={styles.imageItem} src={video.image} alt={video.title} />
                <div onClick={() => onWatchVideo(video)} className={styles.imageOverlay} style={{ color: category.color }}></div>
            </div>
            <div className={styles.options}>
                <div className={styles.optionItem}
                    onClick={() => onDelete(video.id)}
                >
                    <MdDeleteForever />
                    <p>Eliminar</p>
                </div>
                <div className={styles.optionItem}
                    onClick={() => { onEdit(video); onScrollToTop(); }}
                >
                    <MdOutlineEdit />
                    <p>Editar</p>
                </div>

                <Link to={`/${video.id}`} onClick={() => { onScrollToTop(); }} className={styles.optionItem}>
                    <MdReadMore />
                    <p>Detalles</p>
                </Link>
            </div>
        </div>
    )
}

export default Video
