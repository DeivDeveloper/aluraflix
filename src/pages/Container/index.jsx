import { useEffect, useState } from "react";
import styles from "./Container.module.css";
import Banner from "../../components/Banner";
import CategorySection from "../../components/CategorySection";
import EditModal from "../../components/EditModal";
import PlayModal from "../../components/PlayModal";
import categories from "../../json/categories.json";
import { api } from "../../api";

function Container() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoToWatch, setVideoToWatch] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setNotification({ type: "error", message: "Error cargando videos." });
      });
  }, []);

  function deleteVideo(id) {
    // Actualizar interfaz inmediatamente
    setVideos(videos.filter((video) => video.id !== id));

    // Llamar a la API
    fetch(`${api}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        setNotification({
          type: "success",
          message: "Video eliminado exitosamente.",
        });
      })
      .catch((error) => {
        console.error("Delete error:", error);
        setNotification({
          type: "error",
          message: "Error al eliminar el video.",
        });
      });
  }

  const updateVideo = (updatedVideo) => {
    // Actualizar interfaz inmediatamente
    setVideos((prev) =>
      prev.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
    );

    // Llamar a la API
    fetch(`${api}/${updatedVideo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVideo),
    })
      .then((response) => {
        console.log(response)
        setNotification({
          type: "success",
          message: "Video actualizado exitosamente.",
        });
      })
      .catch((error) => {
        console.error("Update error:", error);
        setNotification({
          type: "error",
          message: "Error al actualizar el video.",
        });
      });

    setSelectedVideo(null); // Cerrar modal
  };

  const editVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setVideoToWatch(null);
  };

  const watchVideo = (video) => {
    setVideoToWatch(video);
  };

  // Notificación temporal
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <>
      <Banner category={categories} onWatchVideo={watchVideo} />
      <section className={styles.categories}>
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            category={category}
            videos={videos.filter((video) => video.category === category.name)}
            onDelete={deleteVideo}
            onEdit={editVideo}
            onWatchVideo={watchVideo}
          />
        ))}
      </section>
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
      <EditModal
        video={selectedVideo}
        onSave={updateVideo}
        onCloseModal={closeModal}
        categories={categories.map((category) => category.name)}
      />
      <PlayModal video={videoToWatch} onCloseModal={closeModal} />
    </>
  );
}

export default Container;
