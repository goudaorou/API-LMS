const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String
    },
    content:{
        type:String
    },
    author:{
        type:String
    },
    enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

})

module.exports = mongoose.model("course", courseSchema)