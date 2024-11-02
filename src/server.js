// Import the required modules
import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';

// Create an instance of an Express app
const app = express();

// Middleware to parse JSON requests
app.use(json());

// MongoDB connection URI (replace with your own URI)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB using Mongoose
connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Set a port for the server to listen on
const PORT = process.env.PORT || 3000;

const fileSchema = new Schema({
  },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
   
  });
  

  app.get('/',(req,res) =>{
    res.render()
  })

  app.post('/upload', async (req, res) => {
    try {
      // Create a new File instance with data from the request body
      const newFile = new (model('File', fileSchema))({
        name: req.body.name,
        text: req.body.name
      });
  
      // Save the file to the database
      const savedFile = await newFile.save();
  
      // Send a success response with the saved file data
      res.status(201).json({ message: 'File uploaded successfully', file: savedFile });
    } catch (error) {
      res.status(500).json({ message: 'Error uploading file', error });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
    const newFile = new (model('File', fileSchema))({

