import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// Connect to the database
const db = mongoose.connection;
// The open event is called when the database connects successfully
db.once('open', () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});