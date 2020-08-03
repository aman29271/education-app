const mongoose = require('mongoose');

const URI = process.env.MONGO_URI || 'mongodb://localhost:27017/education';
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
function connectDB() {
  const db = mongoose.connection;
  db.once('open', () => {
    console.log('MongoDB database connection established successfully.');
  });
  db.on('error', (err) => {
    console.error(
      "[MONGODB]: It looks like you don't have mongodb server running. Please start the server if installed otherwise install it before proceeding further."
    );
    console.error(err);
  });
}
module.exports = connectDB;
