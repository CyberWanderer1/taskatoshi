import { useState, useEffect } from "react"
import TaskCard from "../components/TaskCard"
import "../styles/globals.css"

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [reward, setReward] = useState("")
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light")
    } else {
      document.body.classList.add("light")
    }
  }, [darkMode])

  function createTask() {
    if (!title || !reward) return alert("Enter title and reward")
    const newTask = {
      id: Date.now(),
      title,
      reward,
      proof: ""
    }
    setTasks([...tasks, newTask])
    setTitle("")
    setReward("")
  }

  return (
    <div style={{ padding: "40px" }}>
      {/* Toggle Switch */}
      <div className="toggle-container">
        <label className="toggle-switch">
          {darkMode ? "Dark" : "Light"}
          <input
            type="checkbox"
            checked={!darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <h1>⚡ Taskatoshi</h1>
      <p>Earn Bitcoin by completing tasks</p>

      <h2>Create Task</h2>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Reward (BTC)"
        value={reward}
        onChange={(e) => setReward(e.target.value)}
      />
      <button onClick={createTask}>Create Task</button>

      <hr />

      <h2>Bounty Board</h2>
      {tasks.length === 0 && <p>No tasks yet.</p>}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
