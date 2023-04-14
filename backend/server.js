require('dotenv').config()

const express=require('express')
const workoutroutes=require('./routes/workouts')
const mongoose=require('mongoose')
//express app creation and stored in app
const app=express()

//middlewere
app.use(express.json())


//listien for requests
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use('/api/workouts',workoutroutes)
//db con
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('listing on port 4000...')
    })
    
})
.catch((error)=>{
    console.log("error");

})

