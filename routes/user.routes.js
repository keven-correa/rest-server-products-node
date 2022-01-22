import {Router} from 'express';
import { getUsers, postUser, deleteUser, updatePatchUser, updateUser } from '../controllers/users.controller.js';

const router = Router();


router.get('/', getUsers);
router.post('/', postUser);
router.delete('/', deleteUser)
router.put('/:id', updateUser);
router.patch('/', updatePatchUser);

export default router;