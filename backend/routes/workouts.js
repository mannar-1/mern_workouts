const express=require('express')
const workout=require('../models/workoutmodel')
const router=express.Router()
const {createwout,getwout,getwouts,deletewout,updatewout}=require('../controllers/workoutcontrollers')
router.get('/',getwouts)
//single
router.get('/:id',getwout)
//post a workout
router.post('/',createwout)
//delete a workout
router.delete('/:id',deletewout)
//update a workout
router.patch('/:id',updatewout)

module.exports=router