import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

// Get All Users
router.get('/', (req, res) => {
  res.json(users);
});

// Create New User
router.post('/', (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userWithID = { ...user, id: userId };

  users.push(userWithID);
  res.send(`User added to database 👍`);
});

// Get Sigle User
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const signleUser = users.find((u) => u.id === id);

  res.send(signleUser);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  const { firstName, lastName, location, age } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  if (location) user.location = location;

  res.send(`User with ID: ${id} Updated 🐱‍🏍`);
});

//  Delete User
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const deletedUser = users.filter((user) => user.id !== id);

  res.send(`User with ID: ${id} deleted 👏`);
});

export default router;
