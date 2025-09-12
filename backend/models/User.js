const mongoose = require('mongoose');





const ProviderSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  providerId: { type: String, required: true }
}, { _id: false });
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  picture: String,
  providers: [ProviderSchema],
  createdAt: { type: Date, default: Date.now }
});





module.exports = mongoose.model('User', UserSchema);
