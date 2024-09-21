const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://gps:789456123@movie.tyfde.mongodb.net/?retryWrites=true&w=majority&appName=movie', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
    name: String,
    duration: String,
    genre: String,
    image: String,
});

const Movie = mongoose.model('Movie', movieSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/movies', upload.single('image'), async (req, res) => {
    try {
        const { name, duration, genre } = req.body;
        const image = req.file ? req.file.buffer.toString('base64') : null;

        const newMovie = new Movie({
            name,
            duration,
            genre,
            image,
        });

        await newMovie.save();
        res.status(201).json({ message: 'Movie added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving movie' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
