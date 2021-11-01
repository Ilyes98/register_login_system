const mongoose = require('mongoose');
const dbURI =
  "mongodb+srv://ilyes:12345@cluster0.05fq9.mongodb.net/users?retryWrites=true&w=majority";

module.exports = () => {
  // mongdb cloud connection is here
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("connected to mongodb cloud! :)");
    })
    .catch((err) => {
      console.log(err);
    });
};
