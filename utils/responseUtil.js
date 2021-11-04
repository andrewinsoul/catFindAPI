/**
 * @description - properly formats response from http request
 */
class Response {
  /**
   *
   * @param {Number} statusCode - the status code of the http request
   * @param {Boolean} success - http was successful or not
   * @param {Object} data - the http success response
   * @param {Array} errors - the http errors
   * @param {Object} res - express response object
   */
  constructor() {
    this.responseObj = {}
  }

  initRes = res => {
    this.responseObj = res;
  }

  onSuccess = (statusCode, data, msg='OK') => {
    return this.responseObj.status(statusCode).json({
      ...data,
      msg,
      errors: null
    })
  }

  onFailure = (statusCode, errors, msg) => {
    return this.responseObj.status(statusCode).json({
      ...errors,
      msg,
      data: null,
    })
  }

}

export default Response;
