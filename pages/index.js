import { useState } from "react"
import TaskCard from "../components/TaskCard"

export default function Home() {

const [tasks,setTasks] = useState([])
const [title,setTitle] = useState("")
const [reward,setReward] = useState("")

function createTask(){

const newTask = {
id: Date.now(),
title,
reward,
proof:""
}

setTasks([...tasks,newTask])
setTitle("")
setReward("")

}

return (

<div style={{padding:"40px",fontFamily:"Arial"}}>

<h1>⚡ Taskatoshi</h1>
<p>Earn Bitcoin by completing tasks</p>

<h2>Create Task</h2>

<input
placeholder="Task title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Reward (BTC)"
value={reward}
onChange={(e)=>setReward(e.target.value)}
/>

<button onClick={createTask}>
Create Task
</button>

<hr/>

<h2>Bounty Board</h2>

{tasks.map(task => (
<TaskCard key={task.id} task={task}/>
))}

</div>

)

}
