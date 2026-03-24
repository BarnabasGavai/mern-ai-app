function truncate(text, max = 120) {
  if (!text) return ""
  return text.length > max ? text.slice(0, max) + "..." : text
}

function HistoryPanel({ history, setPrompt, setResponse }) {
  const hasHistory = history && history.length > 0

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-800">History</h2>
        {hasHistory && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
            {history.length} runs
          </span>
        )}
      </div>

      {!hasHistory && (
        <div className="text-xs text-slate-400">
          No history yet. Run a prompt to start building your timeline.
        </div>
      )}

      <div className="mt-1 flex-1 space-y-2 overflow-y-auto pr-1">
        {history.map((item) => (
          <button
            key={item._id}
            type="button"
            onClick={() => {
              setPrompt(item.prompt)
              setResponse(item.response)
            }}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs text-slate-800 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md"
          >
            <div className="mb-1">
              <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Prompt
              </div>
              <p className="line-clamp-2 text-xs">
                {truncate(item.prompt)}
              </p>
            </div>
            <div className="border-t border-dashed border-slate-200 pt-1">
              <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Response
              </div>
              <p className="line-clamp-2 text-xs">
                {truncate(item.response)}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HistoryPanel
