import express from 'express';
import controller from '../controllers';

const router = express.Router();

router
  .get('/get/dog_friendly/breed',
    controller.fetchDogFriendlyCatBreeds)
  .get(
    '/get/stranger_friendly/breed',
    controller.fetchStrangerFriendlyCatBreeds
  )
  .get(
    '/get/child_friendly/breed',
    controller.fetchChildFriendlyCatBreeds
  );
export default router;
