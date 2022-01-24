const router = require("express").Router();
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

// Update
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                // update first
                { $set: req.body },
                // then it show new data
                { new: true }
            
            );
            
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("You can update only your account!");
    }
});


// Delete
// Get One User
// Get All Users
// Get Users Stats

module.exports = router;


