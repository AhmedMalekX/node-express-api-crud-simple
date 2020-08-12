import express from 'express';

import {
  getAllUsers,
  createNewUser,
  deleteSingleUser,
  getSigleUser,
  updateSignleUser,
} from '../controllers/users.js';

// import userControllers from '../controllers/users';

const router = express.Router();

// Get All Users
router.get('/', getAllUsers);

// Create New User
router.post('/', createNewUser);

// Get Sigle User
router.get('/:id', getSigleUser);

// Update Signle User
router.patch('/:id', updateSignleUser);

//  Delete User
router.delete('/:id', deleteSingleUser);

export default router;
