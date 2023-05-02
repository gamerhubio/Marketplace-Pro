const { StatusCodes } = require("http-status-codes");
const Users = require("../models/UserModel");
const { sendConfirmationEmail } = require("../libs/mailer");
//create user
 const createUser = async (req, res) => {
  try {
    //create user
    const user = await Users.create({ ...req.body });
    const data = {
        id:user._id,
        email: user.email,
        username: user.username,
        wallets: user.wallets,
        verified:user.verified
      }
    //send email
    await sendConfirmationEmail({ toUser: data, hash: data.id })
    
    //send response
    res.status(StatusCodes.CREATED).json({
      user:data ,
    });
  } catch (error) {
    //throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

//get users
 const getUsers = async (req, res) => {
  try {
    //get users
    const users = await Users.find({});

    res.status(StatusCodes.OK).json({
      users,
    });
  } catch (error) {
    //throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

//get a user
 const getUser = async (req, res) => {
  if (req.query.pointer) {

try {
      const { pointer } = req.query;

      //mark verified
  const user = await Users.findOne({ _id: pointer });
  user.verified = true;
  await user.save()
      res.redirect(StatusCodes.TEMPORARY_REDIRECT, '/')
    } catch (error) {
      //throw error
      res.status(StatusCodes.BAD_REQUEST).send(error);
    }    
  } else {
    try {
    const { address } = req.query;

    //get user
    const user = await Users.find({
      wallets: { $elemMatch: { $eq: address } },
    });

    res.status(StatusCodes.OK).json({
      user,
    });
  } catch (error) {
    //throw error
    res.status(StatusCodes.NOT_FOUND).send(error);
    }
  }
  
};

//update user
 const updateUser = async (req, res) => {
  try {
    const { address } = req.query;

    //update query
    const user = await Users.findOneAndUpdate({ email: address }, req.body, {});

    res.status(StatusCodes.OK).json({
      user,
    });
  } catch (error) {
    //throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser
}