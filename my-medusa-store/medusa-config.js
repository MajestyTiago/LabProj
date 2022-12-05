const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming Medusa from admin
const ADMIN_CORS =
  process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgres://postgres:E97722c1c655@localhost:5432/medusa_teste";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const STRIPE_API_KEY =
  process.env.STRIPE_API_KEY ||
  "sk_test_51M8tTCI3QlZue95BjbrMy5i8Acf750ZZmj9kLHUyn9V0uUehZ355WsCnAqHi0nAX5zn4J1IzlKUitB0Qx4g40C8a00p09JVCbE";
const STRIPE_WEBHOOK_SECRET =
  process.env.STRIPE_WEBHOOK_SECRET ||
  "pk_test_51M8tTCI3QlZue95BPFRSlIOBOx4C9RdgyrUVaE6tyiZ3NnwhWVdePFCVCjrZSBTPnGN1KWwD7FmmgWg0gMoyovXh00HizZjEYy";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  // Uncomment to add Stripe support.
  // You can create a Stripe account via: https://stripe.com
  {
    resolve: `medusa-payment-stripe`,
    options: {
      api_key: STRIPE_API_KEY,
      webhook_secret: STRIPE_WEBHOOK_SECRET,
    },
  },
  {
    resolve: `medusa-payment-paypal`,
    options: {
      sandbox: process.env.PAYPAL_SANDBOX,
      client_id: process.env.PAYPAL_CLIENT_ID,
      client_secret: process.env.PAYPAL_CLIENT_SECRET,
      auth_webhook_id: process.env.PAYPAL_AUTH_WEBHOOK_ID,
    },
  },
];

module.exports = {
  projectConfig: {
    // redis_url: REDIS_URL,
    // For more production-like environment install PostgresQL
    database_url: DATABASE_URL,
    database_type: "postgres",
    //database_database: "./medusa-db.sql",
    //database_type: "sqlite",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
