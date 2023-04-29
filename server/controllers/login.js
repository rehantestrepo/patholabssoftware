const User = require('../models/user');

const login = async (req, res) => {
    const { username, password } = req.body
  
    if (!username || !password) {
      return res.status(401).json('Please provide username and password')
    }

    const user = await User.findOne({ username })
    if (!user) {
      return res.status(401).json('Username does not exists!')
    }

    if (password !== user.password) {
      return res.status(401).json('Invalid Password')
    }

    return res.status(200).json({ user: user._id  })
  }

module.exports = login