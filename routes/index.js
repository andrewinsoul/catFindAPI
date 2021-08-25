import express from 'express';
import controller from '../controllers';
import validateQueryParam from '../middleware';

const router = express.Router();

router
  .get('/get/dog_friendly/breed',
    validateQueryParam,
    controller.fetchDogFriendlyCatBreeds)
  .get(
    '/get/stranger_friendly/breed',
    validateQueryParam,
    controller.fetchStrangerFriendlyCatBreeds
  )
  .get(
    '/get/child_friendly/breed',
    validateQueryParam,
    controller.fetchChildFriendlyCatBreeds
  );
export default router;
