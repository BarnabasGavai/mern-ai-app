import React, { useMemo } from "react"
import ReactFlow, { Background, Controls } from "reactflow"
import "reactflow/dist/style.css"

import InputNode from "./InputNode"
import ResultNode from "./ResultNode"

function FlowCanvas({ prompt, setPrompt, response, loading }) {
  const nodeTypes = useMemo(
    () => ({
      inputNode: InputNode,
      resultNode: ResultNode,
    }),
    []
  )

  const nodes = useMemo(
    () => [
      {
        id: "1",
        type: "inputNode",
        position: { x: 80, y: 130 },
        data: { prompt, setPrompt },
      },
      {
        id: "2",
        type: "resultNode",
        position: { x: 480, y: 130 },
        data: { response, loading },
      },
    ],
    [prompt, response, loading, setPrompt]
  )

  const edges = useMemo(
    () => [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
      },
    ],
    []
  )

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default FlowCanvas
