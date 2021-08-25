/* eslint-disable camelcase */
const validateQueryParam = (req, res, next) => {
  const { no_of_breeds } = req.query;

  if (no_of_breeds) {
    if (isNaN(no_of_breeds)) {
      return res.status(400).send({
        status: 'error',
        error: 'the query params no_of_breeds must be a number'
      });
    }
  }
  return next();
};
export default validateQueryParam;
