/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import CatApiServices from '../services';
import Response from '../utils/responseUtil';

const responseInstance = new Response();

/**
 * @description cat api controller
 */
class CatApiController {
  /**
   * @description - method that sorts breeds of cats that are most
   * child friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static async fetchChildFriendlyCatBreeds(req, res) {
    responseInstance.initRes(res);
    const response = await CatApiServices.fetchChildFriendlyCatBreeds(
      req.query.no_of_breeds || 5,
    );
    if (response.success) {
      return responseInstance.onSuccess(200, response);
    }
    return responseInstance.onFailure(500, response, 'Check your network');
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * stranger friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static async fetchStrangerFriendlyCatBreeds(req, res) {
    responseInstance.initRes(res);
    const response = await CatApiServices.fetchStrangerFriendlyCatBreeds(
      req.query.no_of_breeds || 5,
    );
    if (response.success) {
      return responseInstance.onSuccess(200, response);
    }
    return responseInstance.onFailure(500, response, 'Check your network');
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * dog friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static async fetchDogFriendlyCatBreeds(req, res) {
    responseInstance.initRes(res);
    const response = await CatApiServices.fetchDogFriendlyCatBreeds(
      req.query.no_of_breeds || 5,
    );
    if (response.success) {
      return responseInstance.onSuccess(200, response);
    }
    return responseInstance.onFailure(500, response, 'Check your network');
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * dog friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static ping(req, res) {
    responseInstance.initRes(res);
    return responseInstance.onSuccess(
      200,
      {},
      'welcome to cat find API'
    );
  }

  /**
   * @description - method that sorts breeds of cats that are most
   * dog friendly in descending order
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - status code and server message
   */
  static handleInvalidRoute(req, res) {
    responseInstance.initRes(res);
    return responseInstance.onFailure(
      404,
      {
        errors: [
          { error: 'invalid route/Method' }
        ],
        data: null,
      },
      'check the http METHOD and ENDPOINT'
    );
  }
}
export default CatApiController;
