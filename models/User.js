const {Schema, model} = require ('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjecyId,
                ref: "User"
            },
        ],
    }
);
userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('user', userSchema);
module.exports = User; 