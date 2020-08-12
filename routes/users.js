import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userWithID = { ...user, id: userId };

  users.push(userWithID);
  res.send(`User added to database 👍`);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const signleUser = users.find((u) => u.id === id);

  res.send(signleUser);
});

export default router;
