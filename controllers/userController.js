const { User, Thought } = require('../models');

module.exports = {
    // Get all Users
    async getUsers(req, res) {
      try {
        const users = await User.find();
  
        const userObj = {
          users,
          // userCount: await userCount(),
        };
  
        res.json(userObj);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    // Get a single user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
          .populate("thoughts")
          .populate("friends")
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' })
        }

        const thoughts = await Thought.find({ userId: req.params.userId});
  
        res.json({
          user,
          thoughts,
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    // create a new user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Delete a user
    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndRemove({ _id: req.params.userId });
  
        if (!user) {
          return res.status(404).json({ message: 'No such user exists' })
        
        }

        // Delete users thoughts
        await Thought.deleteMany({ _id: { $in: user.thoughts}});
  
        res.json({ message: 'User and thoughts successfully deleted' });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: { user: req.body } },
                { runValidators: true, new: true }
            );
              
            if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
  
    // Add a friend
    async addFriend(req, res) {
      console.log('You are adding a friend');
      console.log(req.body);
  
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.body.friendId } },
          { runValidators: true, new: true }
        );
  
        if (!user) {
          return res
            .status(404)
            .json({ message: 'No user found with that ID :(' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Remove a friend
    async removeFriend(req, res) {
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        );
          console.log('User ID:', req.params.userId);
          console.log('Friend ID:', req.params.friendId);
        if (!user) {
          return res
            .status(404)
            .json({ message: 'No user found with that ID :(' });
        }
  
        res.json(user);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
  };