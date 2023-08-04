// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// const MONGODB_URI = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with your MongoDB database name
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a Mongoose model for the values collection
// const ValueSchema = new mongoose.Schema({
//   value: {
//     type: String,
//     required: true,
//   },
// });

// const Value = mongoose.model('Value', ValueSchema);

// // Routes
// app.post('/api/values', async (req, res) => {
//   try {
//     const { value } = req.body;
//     const newValue = new Value({ value });
//     await newValue.save();
//     res.status(201).json({ message: 'Value added successfully', value: newValue });
//   } catch (error) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// app.get('/api/values', async (req, res) => {
//   try {
//     const values = await Value.find();
//     res.status(200).json(values);
//   } catch (error) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
