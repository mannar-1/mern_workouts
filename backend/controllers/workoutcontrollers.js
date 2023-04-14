const workout=require('../models/workoutmodel')
const mongoose=require('mongoose')
//get all workout
const getwouts=async(req,res)=>{
    const wouts=await workout.find({}).sort({createdAt:-1}).lean();
    res.status(200).json(wouts)


}

//get single workout
const getwout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"error no such doc"})

    }
    const wout=await workout.findById(id)
    if(!wout){
        return res.status(404).json({error:"no such work out"})

    }
    res.status(200).json(wout);

}

//create a workout

const createwout= async(req,res)=>{
    const {title,load,reps}=req.body
    try{

        const wout=await workout.create({title,load,reps})
        res.status(200).json(wout)
    }
    catch(error){
        res.status(400).json({error:error.message})
        console.log(error);

    }
}
//delete a workout
const deletewout= async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"error no such doc"})

    }
    const wout=await workout.findOneAndDelete({_id:id})
    if(!wout){
        return res.status(404).json({error:"no such work out"})

    }
    res.status(200).json(wout);

}
//update a workout
const updatewout =async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"error no such doc"})

    }
    const wout=await workout.findOneAndUpdate({_id:id},{
       ...req.body
    })
    if(!wout){
        return res.status(404).json({error:"no such work out"})

    }
    res.status(200).json(wout);

}
module.exports={
    createwout,
    getwout,
    getwouts,
    deletewout,
    updatewout
}