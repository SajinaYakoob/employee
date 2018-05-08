const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
	first_name :{
		type :String,
		required:true		
	},
	last_name :{
		type: String,
		required: true
	},
	mobile_number:{
		type: String,
		required: true
	}
	
});

const Employees = module.exports = mongoose.model('employee',employeeSchema);