import FormField from "../FormField";
import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import DropdownList from "../DropdownList";
import Textarea from "../Textarea";
import FormButton from "../Button";
import fetch from "cross-fetch";
import { api } from "../../api";

function Form({ onRegister, categories }) {
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    category: "",
  });

  const clearForm = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      link: "",
      category: "",
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log(response);
          setNotification({
            type: "success",
            message: "Video creado exitosamente.",
          });
        })
        .catch((error) => {
          console.error("Update error:", error);
          setNotification({
            type: "error",
            message: "Error al actualizar el video.",
          });
        });

      if (response.ok) {
        console.log("Video successfully registered!");
        clearForm();
        onRegister(formData);
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <form onSubmit={handleSave} onReset={clearForm} className={styles.form}>
      <div className={styles.header}>
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
      <div className={styles.sectionFields}>
        <h2>Crear Tarjeta</h2>
        <div className={styles.fields}>
          <FormField
            required={true}
            label="Título"
            placeholder="Título del video"
            value={formData.title}
            onChange={(value) => setFormData({ ...formData, title: value })}
            type="text"
            minLength="3"
            maxLength=""
          />

          <DropdownList
            required={true}
            label="Categoría"
            placeholder="Escoja una categoría"
            items={categories}
            value={formData.category}
            onChange={(value) => setFormData({ ...formData, category: value })}
          />

          <FormField
            required={true}
            label="Imagen"
            placeholder="Link de la imagen"
            value={formData.image}
            onChange={(value) => setFormData({ ...formData, image: value })}
            type="url"
          />

          <FormField
            required={true}
            label="Video"
            placeholder="Link del video"
            value={formData.link}
            onChange={(value) => setFormData({ ...formData, link: value })}
            type="url"
          />

          <Textarea
            required={true}
            label="Descripción"
            placeholder="¿De qué se trata este video?"
            value={formData.description}
            onChange={(value) =>
              setFormData({ ...formData, description: value })
            }
            type="text"
            minLength="10"
            maxLength="250"
          />
        </div>
        <div className={styles.buttons}>
          <FormButton children="Guardar" type="submit" />
          <FormButton children="Limpiar" type="reset" />
        </div>
      </div>
    </form>
  );
}

export default Form;
