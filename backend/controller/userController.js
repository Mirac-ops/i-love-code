const User = require('../models/User');

exports.getUsers = async (req, res) => { // <<< zum User gehen mit getUsers.
    try {
        const users = await User.find(); // <<< User finden.
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send("Error fetching users");
    }
};

exports.createUser = async (req, res) => {
    const newUser = req.body;
    try {
        const user = await User.create(newUser);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send("Error creating user");
    }
};