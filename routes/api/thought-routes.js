const router = require("express").Router();
const {
    getThoughts,
    getOneThought,
    createThought,
    deleteThought,
    addThoughtReaction,
    deleteThoughtReaction,

  } = require("../../controllers/thought-controller");

  router.route('/').get(getThoughts).post(createThought);

  router.route('/:thoughtId').get(getOneThought).delete(deleteThought);

  router.route('/:thoughtId/reactions').post(addThoughtReaction);
  router.route('/:thoughtId/reactions/:reactionId').delete(deleteThoughtReaction);
  
  module.exports = router