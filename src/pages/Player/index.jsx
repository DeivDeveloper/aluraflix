import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";
import { api } from "../../api";

function Player() {
  const [video, setVideo] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(`${api}?id=${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data);
      });
  }, [params.id]);

  if (!video) {
    return <NotFound />;
  }

  return (
    <section className={styles.content}>
      <h1 className={styles.title}>{video.title}</h1>
      <p className={styles.description}>{video.description}</p>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.video}
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen=""
        ></iframe>
      </div>
    </section>
  );
}

export default Player;
