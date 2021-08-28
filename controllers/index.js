import Axios from 'axios';
import sortInDescendingOrder from '../utils';

/**
 * @description cat api controller
 */
class CatAPIController {
  /**
   * @description - method that sorts breeds of cats that are most
   * child friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static async fetchChildFriendlyCatBreeds(req, res) {
    try {
      const { data } = await Axios.get(
        process.env.THIRD_PARTY_API
      ); // fetch data from 3rd party api

      const noOfBreeds = req.query.no_of_breeds || 5;

      const sortedData = sortInDescendingOrder(data, 'child_friendly');
      res.status(200).send(
        {
          success: true,
          data: isNaN(noOfBreeds)
            ? sortedData.slice(0)
            : sortedData.slice(0, noOfBreeds)
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json(
        {
          success: false,
          error: 'encountered server error'
        }
      );
    }
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * stranger friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static async fetchStrangerFriendlyCatBreeds(req, res) {
    try {
      const { data } = await Axios.get(
        process.env.THIRD_PARTY_API
      ); // fetch data from 3rd party api
      const noOfBreeds = req.query.no_of_breeds || 5;
      const sortedData = sortInDescendingOrder(data, 'stranger_friendly');

      res.status(200).send(
        {
          success: true,
          data: isNaN(noOfBreeds)
            ? sortedData.slice(0)
            : sortedData.slice(0, noOfBreeds)
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json(
        {
          success: false,
          error: 'encountered server error'
        }
      );
    }
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * dog friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static async fetchDogFriendlyCatBreeds(req, res) {
    try {
      const { data } = await Axios.get(
        process.env.THIRD_PARTY_API
      ); // fetch data from 3rd party api
      const noOfBreeds = req.query.no_of_breeds || 5;
      const sortedData = sortInDescendingOrder(data, 'dog_friendly');

      res.status(200).send(
        {
          success: true,
          data: isNaN(noOfBreeds)
            ? sortedData.slice(0)
            : sortedData.slice(0, noOfBreeds)
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json(
        {
          success: false,
          error: 'encountered server error'
        }
      );
    }
  }
}
export default CatAPIController;
