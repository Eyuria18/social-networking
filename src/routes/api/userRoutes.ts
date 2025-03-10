import { Router } from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
    } from '../../controllers/userController.js';

const router = Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

export { router as userRoutes };
// Compare this snippet from social-network-api/routes/api/thoughtRoutes.ts:
