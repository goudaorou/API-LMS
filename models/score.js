const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"ref"},
    coures:{type:mongoose.Schema.Types.ObjectId, ref:"ref"}
})

module.exports = mongoose.model("score",scoreSchema)