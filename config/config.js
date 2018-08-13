const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGO_URI
  },
  default: {
    SECRET: "SUPERSECRETWORD",
    DATABASE: "mongodb://localhost:27017/bookReview"
  }
};

exports.get = function get(env) {
  // will be passed get(process.env.NODE_ENV)
  //which is HEroku NODE_ENV . if not found return default
  return config[env] || config.default;
};
