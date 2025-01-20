import Video from '../Video'
import styles from './CategorySection.module.css'

function CategorySection({ videos, category, onAdd, onDelete, onEdit, onWatchVideo, onTop }) {
    return (
        (videos.length > 0) && <section className={styles.category} >
            <h3 style={{ backgroundColor: category.color }}>
                {category.name}
            </h3>
            <div className={styles.videos}>
                {videos.map((video, index) => {
                    return <Video
                        className={styles.videos}
                        video={video}
                        key={index}
                        category={category}
                        onAdd={onAdd}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onWatchVideo={onWatchVideo}
                        onTop={onTop}
                    />
                })}
            </div>
        </section>
    );
}

export default CategorySection;
