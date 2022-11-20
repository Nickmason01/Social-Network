const { ObjectId } = require('bson');
const {Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema (
    {
        reactionId : {
            type: Schema.Types.ObjectId,
            default:  new ObjectId
        },
        reactionBody : {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            dateFormat
        }
    },
    {
        toJSON: {
          getters: true,
        },
      }
);
module.exports = reactionSchema;