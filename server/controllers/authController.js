const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const register = async (req, res) => {
    try {
        const {username, email, password } = req.body;

if(!username || !email || !password) {
    return res.status(404).json({message: 'All Feilds required'})
}

        let user = await User.findOne({username});
        if (user) return res.status(404).json({ message: 'Username Not Available'});

        const hashPassword = await bcrypt.hash(password, 10);

       const Newuser = new User({
            username: username,
            email: email,
            password: hashPassword,
        })
       await Newuser.save();

       return res.status(200).json({message: "Successfully Registered"})
    } catch (err) {
        return res.status(500).json({message: 'Server Failed to Create Account', error: err.message})
    };
}

module.exports = {register};