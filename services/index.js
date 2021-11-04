/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import Axios from 'axios';
import sortInDescendingOrder from '../utils/sortUtil';
import CacheUtil from '../utils/cacheUtil';

const apiGetCall = (url) => Axios.get(url);
const cacheInstance = new CacheUtil(apiGetCall);

/**
 * @description cat api services
 */
class CatApiServices {
  /**
   * @description - method that sorts breeds of cats that are most
   * child friendly in descending order
   * @param {Number} noOfBreeds - The number of items to return
   * @param {String} breedName - the name of breed to fetch
   * @returns {object} - status code and server message
   */
  static async fetchBreed(noOfBreeds, breedName) {
    const response = await cacheInstance.fetchData(
      process.env.THIRD_PARTY_API
    );

    if (response.data) {
      const sortedData = sortInDescendingOrder(response.data, breedName);
      const data = isNaN(noOfBreeds)
        ? sortedData.slice(0)
        : sortedData.slice(0, noOfBreeds);

      return {
        success: true,
        data
      };
    }
    return {
      success: false,
      error: response.error.message || 'An error occured'
    };
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * child friendly in descending order
   * @param {Number} noOfBreeds - The number of items to return
   * @returns {object} - status code and server message
   */
  static async fetchChildFriendlyCatBreeds(noOfBreeds) {
    const data = await CatApiServices.fetchBreed(noOfBreeds, 'child_friendly');
    return data;
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * stranger friendly in descending order
   * @param {Number} noOfBreeds - The number of items to return
   * @returns {object} - status code and server message
   */
  static async fetchStrangerFriendlyCatBreeds(noOfBreeds) {
    const data = await CatApiServices.fetchBreed(
      noOfBreeds, 'stranger_friendly'
    );
    return data;
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * dog friendly in descending order
   * @param {Number} noOfBreeds - The number of items to return
   * @returns {object} - status code and server message
   */
  static async fetchDogFriendlyCatBreeds(noOfBreeds) {
    const data = await CatApiServices.fetchBreed(
      noOfBreeds, 'dog_friendly'
    );
    return data;
  }
}
export default CatApiServices;
