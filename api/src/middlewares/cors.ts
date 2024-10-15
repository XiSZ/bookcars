import cors from "cors";

// /**
//  * CORS configuration.
//  *
//  * @type {cors.CorsOptions}
//  */
// const CORS_CONFIG: cors.CorsOptions = {
//     origin: true,
//     credentials: true,
// }

/**
 * CORS configuration.
 *
 * @type {cors.CorsOptions}
 */
const CORS_CONFIG: cors.CorsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*",
};

/**
 * CORS middleware.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {*}
 */
export default () => cors(CORS_CONFIG);
