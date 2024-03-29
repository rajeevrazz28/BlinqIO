
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/User');

const app = express();
const PORT = 8000;

app.use(cors());


app.use(express.json());
const MONGODB_URI='mongodb+srv://r4zz:r4zz123@cluster0.g0dnjhz.mongodb.net/?retryWrites=true&w=majority&appName=cluster0';


mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));




app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));