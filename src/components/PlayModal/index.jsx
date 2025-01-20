import styles from './PlayModal.module.css';
import { MdOutlineCancel } from "react-icons/md";

function PlayModal({ video, onCloseModal }) {

    return (
        <>
            {video && <>
                <div className={styles.overlay} />
                <div open={!!video} className={styles.modal}>
                    
                    <form method="dialog" >
                        <div >
                            <iframe className={styles.video}
                                width="auto"
                                height="auto"
                                src={`${video.link}?autoplay=1`}
                                title={video.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen="" ></iframe>
                        <MdOutlineCancel onClick={onCloseModal} className={styles.closeIcon} />
                        </div>
                    </form>
                
                </div>
            </>}
        </>
    );
}

export default PlayModal;
