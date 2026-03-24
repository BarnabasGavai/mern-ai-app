import { Handle, Position } from "reactflow"

function InputNode({ data }) {
  return (
    <div className="w-72 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-800">
          Prompt
        </span>
        <span className="text-[10px] text-slate-400">
          Describe what you want
        </span>
      </div>

      <textarea
        className="h-28 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs text-slate-900 outline-none ring-0 transition focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500"
        value={data.prompt}
        onChange={(e) => data.setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
      />

      <p className="mt-1 text-[10px] text-slate-400">
        Use Enter for new lines. Click <span className="font-semibold">Run</span> to
        generate.
      </p>

      <Handle type="source" position={Position.Right} />
    </div>
  )
}

export default InputNode
