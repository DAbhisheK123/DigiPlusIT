import React, { useState, useEffect } from 'react';

function App() {
  const [treeData, setTreeData] = useState([
    { id: 1, text: 'Root Node', children: [] },
  ]);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeAdd = (nodeType, text) => {
    const newNode = { id: Date.now(), text, children: [] };

    if (nodeType === 'Single Node') {
      setTreeData([...treeData, newNode]);
    } else if (nodeType === 'Child Node' && selectedNode) {
      setTreeData(
        treeData.map((node) =>
          node.id === selectedNode.id
            ? { ...node, children: [...node.children, newNode] }
            : node
        )
      );
    } else if (nodeType === 'Parent Node' && selectedNode) {
      const parentIndex = treeData.findIndex((node) => node.id === selectedNode.id);
      if (parentIndex !== 0) {
        const parentNode = treeData[parentIndex - 1];
        setTreeData(
          treeData.map((node) =>
            node.id === parentNode.id
              ? { ...node, children: [newNode, ...node.children] }
              : node
          )
        );
      }
    }

    setSelectedNode(null); // Reset selected node after adding
  };

  return (
    <div>
      <TreeView
        data={treeData}
        onNodeSelected={setSelectedNode}
      />
      <Form
        onSubmit={handleNodeAdd}
        selectedNode={selectedNode}
      />
    </div>
  );
}

function TreeView({ data, onNodeSelected }) {
  return (
    <ul>
      {data.map((node) => (
        <li key={node.id} onClick={() => onNodeSelected(node)}>
          {node.text}
          {node.children.length > 0 && (
            <TreeView data={node.children} onNodeSelected={onNodeSelected} />
          )}
        </li>
      ))}
    </ul>
  );
}

function Form({ onSubmit, selectedNode }) {
  const [nodeType, setNodeType] = useState('Single Node');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nodeType, text);
    setText(''); // Clear form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="node-type">Node Type:</label>
      <select id="node-type" value={nodeType} onChange={(e) => setNodeType(e.target.value)}>
        <option value="Single Node">Single Node</option>
        <option value="Child Node">Child Node</option>
        <option value="Parent Node">Parent Node</option>
      </select>
      <br />
      <label htmlFor="node-text">Node Text:</label>
      <input id="node-text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button type="submit">Add Node</button>
    </form>
  );
}

export default App;
