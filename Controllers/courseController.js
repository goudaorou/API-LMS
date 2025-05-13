const Course = require("../models/course");

module.exports.getCourse = async(req, res)=>{
    const course = await Course.find();
    res.status(200).json(course)
};

module.exports.postCourse = async(req,res)=>{
    const course = await Course.create(req.body)
    res.status(200).json(course)
};

module.exports.updateCourse = async(req,res)=>{
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(course)
};

module.exports.deleteCourse = async(req, res)=>{
    await Course.findByIdAndDelete(req.params.id)
    res.status(200).json({message:" course supprimé"})
};
module.exports.enrollCourse = async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course.enrolledUsers.includes(req.user.id)) {
      course.enrolledUsers.push(req.user.id);
      await course.save();
    }
    res.json({ message: 'Enrolled successfully' });
  };