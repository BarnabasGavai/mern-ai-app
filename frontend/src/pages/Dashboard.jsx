import { useState } from "react"
import FlowCanvas from "../components/FlowCanvas"
import HistoryPanel from "../components/HistoryPannel"
import Toolbar from "../components/Toolbar"

import { askAI, savePrompt, getHistory } from "../services/api"

function Dashboard() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)

  const runFlow = async () => {
    if (!prompt) return

    try {
      setLoading(true)
      const res = await askAI(prompt)
      setResponse(res.data.answer || res.data.response)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const saveFlow = async () => {
    if (!prompt || !response) return

    try {
      await savePrompt(prompt, response)
      alert("Saved")
    } catch (err) {
      console.log(err)
    }
  }

  const clearFlow = () => {
    setPrompt("")
    setResponse("")
  }

  const toggleHistory = async () => {
    const next = !showHistory
    setShowHistory(next)

    if (next) {
      try {
        const res = await getHistory()
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.data || []
        setHistory(data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-sky-100 via-slate-50 to-indigo-100 text-slate-900">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            AI Chat Task
          </h1>
          <p className="text-xs text-slate-500 sm:text-sm">
          Ask anything to AI and also save your prompts
          </p>
        </div>

        <Toolbar
          runFlow={runFlow}
          saveFlow={saveFlow}
          clearFlow={clearFlow}
          toggleHistory={toggleHistory}
          loading={loading}
          showHistory={showHistory}
        />
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col overflow-hidden sm:flex-row">
        {/* Canvas */}
        <section className="flex flex-1 items-stretch px-4 py-4 sm:px-5 sm:py-5">
          <div className="h-full w-full min-h-[320px] rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
            <FlowCanvas
              prompt={prompt}
              setPrompt={setPrompt}
              response={response}
              loading={loading}
            />
          </div>
        </section>

        {/* History (right on desktop, bottom sheet on mobile when open) */}
        {showHistory && (
          <aside className="h-64 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_25px_rgba(15,23,42,0.08)] sm:h-auto sm:w-80 sm:border-l sm:border-t-0 sm:px-4 sm:py-4 sm:shadow-none">
            <HistoryPanel
              history={history}
              setPrompt={setPrompt}
              setResponse={setResponse}
            />
          </aside>
        )}
      </main>
    </div>
  )
}

export default Dashboard
