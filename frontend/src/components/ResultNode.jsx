import { Handle, Position } from "reactflow"

function renderMarkdown(text) {
  if (!text) return "Result appears here"

  let escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  escaped = escaped.replace(/^### (.*$)/gim, "<h3>$1</h3>")
  escaped = escaped.replace(/^## (.*$)/gim, "<h2>$1</h2>")
  escaped = escaped.replace(/^# (.*$)/gim, "<h1>$1</h1>")

  escaped = escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  escaped = escaped.replace(/\*(.+?)\*/g, "<em>$1</em>")

  escaped = escaped.replace(/`(.+?)`/g, "<code>$1</code>")

  escaped = escaped.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer">$1</a>'
  )

  escaped = escaped.replace(/^\s*[-*] (.*$)/gim, "<li>$1</li>")
  escaped = escaped.replace(/(<li>.*<\/li>)/gims, "<ul>$1</ul>")

  escaped = escaped.replace(/\n/g, "<br />")

  return escaped
}

function ResultNode({ data }) {
  const hasResponse = !!data.response

  return (
    <div className="w-80 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
      <Handle type="target" position={Position.Left} />

      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-800">
          Result
        </span>
      </div>

      <div className="min-h-[72px] text-xs text-slate-700">
        {data.loading && (
          <div className="text-[11px] text-slate-400">
            Generating response…
          </div>
        )}

        {!data.loading && (
          <div
            className={`max-h-56 overflow-y-auto pr-1 text-xs leading-relaxed ${
              hasResponse ? "text-slate-800" : "text-slate-400"
            }`}
            dangerouslySetInnerHTML={{
              __html: renderMarkdown(data.response),
            }}
          />
        )}
      </div>
    </div>
  )
}

export default ResultNode
