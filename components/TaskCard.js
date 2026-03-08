import { useState } from "react"

export default function TaskCard({ task }) {
  const [proof, setProof] = useState("")

  function share() {
    if (!proof) return alert("Submit a proof link first!")
    const text = `I just earned BTC completing "${task.title}" on Taskatoshi ⚡`
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    )
  }

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Reward: {task.reward} BTC</p>

      <input
        placeholder="Submit proof link"
        value={proof}
        onChange={(e) => setProof(e.target.value)}
      />
      <button onClick={share}>Submit & Share</button>
    </div>
  )
}
