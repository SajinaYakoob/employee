const express = require('express');
const router = express.Router();
const Joi = require('joi');
//var bcrypt = require('bcrypt-nodejs');

const Employees = require('../models/employees');
const RegisteredUsers = require('../models/users');

//validation schema
 
const userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
})

//retrieving employee details
router.get('/employees',(req,res,next)=>{
	Employees.find(function(err,employees){
		res.json(employees);
	});	
});

//add employee details

router.post('/employees',(req,res,next)=>{
	let newEmployee = new Employees({
		first_name:req.body.first_name,
		last_name: req.body.last_name,
		mobile_number:req.body.mobile_number
	});
	
	newEmployee.save((err,employees)=>{
		if(err){
			res.json({msg:'failed to add employee'});
		}else{
			res.json({msg:'employee added successfully'});
		}
	});
});


//delete employee details

router.delete('/employees/:id',(req,res,next)=>{
	Employees.remove({_id:req.params.id},function(err,result){
		if(err){
			res.json(err);
		}else{
			res.json(result);
		}
	});
});


//add a new user
  
router.post('/register',(req,res,next)=>{
	let newUsers = new  RegisteredUsers({
			user_name:req.body.user_name,
			email:req.body.email,
			password:req.body.password
		});
	newUsers.save((err,users)=>{
		if(err){
			res.json({msg:'user not added successfully'});
		}else{
			res.json({msg:'user added successfully'});
		}
	});
});

  
  
router.get('/register',(req,res,next)=>{
	RegisteredUsers.find(function(err,users){
		res.json(users);
	});	
});

router.post('/authenticate',(req,res,next)=>{
    RegisteredUsers.findOne({username: req.body.user_name,password:req.body.password}, function(err,user){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		if(!user){
			return res.status(404).send();
		}
		return res.status(200).send(user);
	}
   );
   
});

  





module.exports = router;