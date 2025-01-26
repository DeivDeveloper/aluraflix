import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";
import { api } from "../../api";

function Player() {
  const [video, setVideo] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 
  const { id } = useParams(); 

  useEffect(() => {
    setLoading(true); 
    setError(false); 

    fetch(`${api}?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener el video");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setVideo(data[0]); 
        } else {
          setError(true); 
        }
      })
      .catch(() => {
        setError(true); 
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [id]);

  if (loading) {
    return <p>Cargando video...</p>; 
  }

  if (error || !video) {
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
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Player;
