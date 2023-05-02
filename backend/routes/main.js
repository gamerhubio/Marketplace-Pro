const express = require('express');


const router = express.Router();
const { recordSubscription } = require("../controllers/SubscriptionController")
const {
    createUser,
    getUser,
    getUsers,
    updateUser
} = require("../controllers/UsersController")

router.route('/users').post( createUser).get(getUsers);
router.route('/users/:address').get(getUser).patch(updateUser);
router.route('/subscription').post(recordSubscription);




module.exports = router;
