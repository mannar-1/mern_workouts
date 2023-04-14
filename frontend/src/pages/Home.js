 import {useEffect,useState} from 'react'
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"
   //cpmponents
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
 const Home=()=>{
    const [workouts,setWorkouts]=useState(null)
    useEffect(()=>{


const fetchworkouts=async()=>{
    //console.log("helloe");

   const response=await fetch('/api/workouts')
   const json=await response.json()   //array of workout object
   if(response.ok){
    setWorkouts(json)
   }
}
   fetchworkouts()
    })  
//-------updatetd code after useReducer------

//     const{workouts,dispatch}=  useWorkoutsContext()
//     useEffect(()=>{


// const fetchworkouts=async()=>{
   

//    const response=await fetch('/api/workouts')
//    const json=await response.json()   //array of workout object
//    if(response.ok){
//        dispatch({type:'SET_WORKOUTS',payload:json})
       
//    }
// }
//    fetchworkouts()
//     },[])  //[]=>only ones
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                      <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>

    )
}
export default Home;