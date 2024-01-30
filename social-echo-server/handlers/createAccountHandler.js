const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

require("dotenv").config();
const { MONGO_URI } = process.env;

const createAccountHandler = async (req, res) => {
  const { firstName, lastName, age, email, nickname, password } = req.body;

  // Ensure that all required fields are present
  if (!firstName || !lastName || !age || !email || !nickname || !password) {
    return res.status(400).json({ message: 'Incomplete data provided' });
  }

  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('users');

    // Check if the user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    await collection.insertOne({
      firstName,
      lastName,
      age,
      email,
      nickname,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
};

module.exports = { createAccountHandler };