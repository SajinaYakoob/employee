const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	user_name :{
		type :String,
		required:true		
	},
	password :{
		type: String,
		required: true
	}
});

const RegisteredUsers = module.exports = mongoose.model('users',userSchema);

module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  } catch(error) {
    throw new Error('Hashing failed', error)
  }
}