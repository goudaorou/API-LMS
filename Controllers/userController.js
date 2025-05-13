const User = require("../models/user");

module.exports.getAllUser = async(req, res)=>{
    const user = await User.find();
    res.status(200).json(user)
}

module.exports.updateUser = async(req, res)=>{
    const update = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(update);
};

module.exports.deleteUser = async(req, res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"utilisateur supprime"})
}