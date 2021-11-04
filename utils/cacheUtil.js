/**
 * @description - A custom Cache implementation.
 * @class - CacheUtil
 */
 class CacheUtil {
  /**
   * 
   * @param {Promise<Function>} getFunction - A GET Axios promise
   * @param {Number} minutesToLive - the number of minutes before the cache
   * makes a call to the api
   */
  constructor(getFunction, minutesToLive = 15) {
    this.millisecondsToLive = minutesToLive * 60 * 1000;
    this.getFunction = getFunction;
    this.cache = {};
    this.fetchDate = new Date(0);
  }
  /**
   * @description - it checks if the time of the cache is expired
   * @returns {Boolean} - returns true or false
   */
  isCacheExpired = () => new Date().getTime() > (this.fetchDate.getTime() + this.millisecondsToLive);

  /**
   * @description - the fetchData fetches the data from the cache
   * if the cache has not expired or the url has been called before.
   * It makes an api call if the cache has expired or the url has not
   * been called before
   * @param {String} url - the url string that will be used as the cache key
   * @returns {Object} - the response of the api call
   */
  fetchData = async (url) => {
    try {
      if (this.isCacheExpired() || !this.cache[url]) {
        console.log('expired - fetching new data >>>>>> ');
        const data = await this.getFunction(url);
        this.cache[url] = data;
        this.fetchDate = new Date();
        return this.cache[url];
      } else {
        console.log('cache hit');
        return this.cache[url];
      }

    } catch (err) {
      return { error: err };
    }
  }
}
export default CacheUtil