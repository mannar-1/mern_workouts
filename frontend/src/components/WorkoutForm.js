import {useState} from 'react';
//import {useWorkoutsContext} from "../hooks/useWorkoutsContext"
const WorkoutForm=()=>{
   // const{dispatch}= useWorkoutsContext()
    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')
    const [error,setError]=useState('')
    //----------vedio code----------
    // const handleSubmit= async (e)=>{
    //     e.preventDefault()
    //     const workout={title,load,reps}
    //     const response=await fetch('/api/workouts',{
    //         method:'POST',
    //         body:JSON.stringify(workout),
    //         header:{
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     const json=await response.json()
    //     if(!response.ok){
    //          setError(json.error)
    //     }
    //     if(response.ok){
    //         setError(null)
    //         console.log("added")
    //         setTitle('')
    //         setLoad('')
    //         setReps('')
    //     }
    // }
    //------------corrected code--------------------------
    const handleSubmit= async (e)=>{
        e.preventDefault()
        if (!load) {
            setError('Load field cannot be empty.')
            return
        }
        const workout={title,load,reps}
        const response=await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()
        if(!response.ok){
             setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("added")
            setTitle('')
            setLoad('')
            setReps('')
           // dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    }

    return (
         //from
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <lable>Excersize Title:</lable>
            <input 
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}

           />
           <lable>Load (in kg):</lable>
            <input 
                type="text"
                onChange={(e)=>setLoad(e.target.value)}
                value={load}

           />
           <lable>Reps :</lable>
           <input 
                type="text"
                onChange={(e)=>setReps(e.target.value)}
                value={reps}

           />
           
        <button>Add Workout</button>
        {error && <div className='error'>{error}</div>}

        </form>


    )
}
export default WorkoutForm