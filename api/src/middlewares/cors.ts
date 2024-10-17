import cors from "cors";

/**
 * CORS configuration.
 *
 * @type {cors.CorsOptions}
 */
const CORS_CONFIG: cors.CorsOptions = {
  origin: "*", // Allow any origin
  allowedHeaders: "*", // Allow any headers
  methods: "*", // Allow any methods
  credentials: true,
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
