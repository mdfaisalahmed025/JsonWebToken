
const jwt = require("jsonwebtoken");
const {BadRequestError} = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  //mongo
  //joi
  //check the controller

  if (!username || !password) {
    throw new BadRequestError(`please provideemail and password`, 400);
  }
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: `user created`, token });
};

const dashboard = async (req, res) => {
  console.log(req.user);

  const luckynumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `hello ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckynumber}`,
  });

};

module.exports = {
  login,
  dashboard,
};
