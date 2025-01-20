import Form from '../../components/Form'
import { useEffect, useState } from 'react'
import categories from '../../json/categories.json'
import { api } from '../../api'

function NewVideo() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    const addNewVideo = (newVideo) => {
        setVideos((prevVideos) => [...prevVideos, newVideo])
    }

    return (
        <Form
            onRegister={addNewVideo}
            categories={categories.map((category) => category.name)}
        />
    )
}

export default NewVideo
