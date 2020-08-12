import { v4 as uuidv4 } from 'uuid';

let users = [];

// Get All Users

export const getAllUsers = (req, res) => {
  res.json(users);
};

// Create New User

export const createNewUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userWithID = { ...user, id: userId };

  users.push(userWithID);
  res.send(`User added to database 👍`);
};

// Get Sigle User

export const getSigleUser = (req, res) => {
  const { id } = req.params;

  const signleUser = users.find((u) => u.id === id);

  res.send(signleUser);
};

// Update Signle User

export const updateSignleUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  const { firstName, lastName, location, age } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  if (location) user.location = location;

  res.send(`User with ID: ${id} Updated 🐱‍🏍`);
};

//  Delete User

export const deleteSingleUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with ID: ${id} deleted 👏`);
};
