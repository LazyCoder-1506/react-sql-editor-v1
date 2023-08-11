import React, { useEffect, useState } from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

const SqlEditor = ({ query, setQuery, runQuery }) => {
  const [value, setValue] = useState(query)

  useEffect(() => {
    setValue(query)
  }, [query])

  useEffect(() => {
    setQuery(value)
  }, [value])

  const handleClearQuery = () => {
    setValue("")
  }

  const handleSubmitQuery = () => {
    runQuery()
  }

  return (
    <>
      <AceEditor
        mode="mysql"
        id="editor"
        name="editor"
        theme="sqlserver"
        width='100%'
        fontSize={18}
        minLines={15}
        maxLines={10}
        showPrintMargin={false}
        showGutter
        placeholder="Write query..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        onChange={(value) => setValue(value)}
        showLineNumbers
      />
      <div className="flex justify-end mt-4 gap-4">
        <button type="button" onClick={handleClearQuery} className='bg-gray-500 text-white font-medium text-sm px-3 py-2 rounded'>Clear</button>
        <button type="button" onClick={handleSubmitQuery} className='bg-blue-500 text-white font-medium text-sm px-3 py-2 rounded'>Run Query</button>
      </div>
    </>
  )
}

export default SqlEditor