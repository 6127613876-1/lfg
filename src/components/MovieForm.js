import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
    const [movie, setMovie] = useState({
        name: '',
        duration: '',
        genre: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            ...prevMovie,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setMovie((prevMovie) => ({
            ...prevMovie,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', movie.name);
        formData.append('duration', movie.duration);
        formData.append('genre', movie.genre);
        formData.append('image', movie.image);

        try {
            const response = await axios.post('http://localhost:5000/movies', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error adding movie', error);
        }
    };

    return (
        <div style={{margin:"240px"}}>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit} style={{paddingLeft:"350px"}}>
                <div style={{paddingBottom:"20px"}}>
                    <label>Movie Name:</label>
                    <input type="text" name="name" value={movie.name} onChange={handleChange} required  />
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <label>Duration:</label>
                    <input type="text" name="duration" value={movie.duration} onChange={handleChange} required />
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={movie.genre} onChange={handleChange} required />
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <label >Image:</label>
                    <input type="file" onChange={handleFileChange} required style={{paddingLeft:"20px"}}/>
                </div>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default MovieForm;
