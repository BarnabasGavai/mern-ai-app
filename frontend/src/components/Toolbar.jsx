function Toolbar({
  runFlow,
  saveFlow,
  clearFlow,
  toggleHistory,
  loading,
  showHistory,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={runFlow}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
      >
        {loading ? "Running..." : "Run"}
      </button>

      <button
        onClick={saveFlow}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-green-500 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
      >
        Save
      </button>

      <button
        onClick={clearFlow}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-200 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
      >
        Clear
      </button>

      <button
        onClick={toggleHistory}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-50 shadow-sm transition hover:bg-slate-800 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
      >
        {showHistory ? "Hide history" : "Show history"}
      </button>
    </div>
  )
}

export default Toolbar
