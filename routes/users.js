import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: 'Ahmed',
    lastName: 'Malek',
    age: 21,
    location: 'Egypt',
  },
  {
    firstName: 'test',
    lastName: 'fatest',
    age: 25,
    location: 'USA',
  },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User added to database 👍`);
});

export default router;
