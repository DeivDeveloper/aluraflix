import styles from './EditModal.module.css';
import FormField from '../FormField';
import Textarea from '../Textarea';
import FormButton from '../Button';
import DropdownList from '../DropdownList';
import { useEffect, useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";

function EditModal({ video, onClose, onSave, onCloseModal, categories }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (video) {
            setTitle(video.title);
            setDescription(video.description);
            setLink(video.link);
            setImage(video.image);
            setCategory(video.category);
        } else {
            setTitle('');
            setDescription('');
            setLink('');
            setImage('');
            setCategory('');
        }
    }, [video]);

    const submit = (event) => {
        event.preventDefault();
        const updatedVideo = {
            id: video.id,
            title,
            description,
            link,
            image,
            category
        };
        onSave(updatedVideo);
        onCloseModal();
    };

    return (
        <>
            {video && <>
                <div className={styles.overlay} />
                <dialog open={!!video} className={styles.modal}>
                    <MdOutlineCancel onClick={onCloseModal} className={styles.closeIcon} />
                    <h1>EDITAR CARD</h1>
                    <form onSubmit={submit} method="dialog">
                        <div className={styles.sessionFields}>
                            <div className={styles.fields}>
                                <FormField
                                    required={true}
                                    label="Título"
                                    placeholder="Título del video"
                                    value={title}
                                    onChange={value => setTitle(value)}
                                />

                                <DropdownList
                                    required={true}
                                    label="Categoría"
                                    placeholder="Escoja una categoría"
                                    items={categories}
                                    value={category}
                                    onChange={value => setCategory(value)}
                                />

                                <FormField
                                    required={true}
                                    label="Imagen"
                                    placeholder="Link de la imagen"
                                    value={image}
                                    onChange={value => setImage(value)}
                                />

                                <FormField
                                    required={true}
                                    label="Video"
                                    placeholder="Link del video"
                                    value={link}
                                    onChange={value => setLink(value)}
                                />

                                <Textarea
                                    required={true}
                                    label="Descripción"
                                    placeholder="¿De qué se trata este video?"
                                    value={description}
                                    onChange={value => setDescription(value)}
                                />

                            </div>
                            <div className={styles.buttons}>
                                <FormButton
                                    children="Guardar"
                                    type='submit'
                                />
                                <FormButton
                                    children="Limpiar"
                                    type='reset'
                                />
                            </div>
                        </div>
                    </form>
                </dialog>
            </>}
        </>
    );
}

export default EditModal;
