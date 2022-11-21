const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

router
  .route("/")
  .get(getUsers)
  .get(getOneUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

// router
//     .route('/api/users/:userId/friends/:friendId')
//     .
module.exports = router;
