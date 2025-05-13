const Score = require("../models/score");

module.exports.postScore = async(req, res)=>{
    const score = await Score.create({...req.body, user:req.user.id})
    res.status(200).json(score)
}

module.exports.getUserScore = async(req,res)=>{
    const score = await Score.find({User:req.params.userId})
    res.status(201).json({message:"score added successfully",score})
};
module.exports.getCourseScore = async(req, res)=>{
    const scores = await Score.find({course:req.params.courseId});
    res.json(scores)
}