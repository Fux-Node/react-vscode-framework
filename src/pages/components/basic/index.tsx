import useStore from '@src/pages/hooks/useStore'
import React, { useEffect, useState } from 'react'
import "@styles/basic.css"

const SubBasic = () => {
  const { localSet, localGet, localClear } = useStore();
  const [storeKeyInput, setStoreKeyInput] = useState("");
  const [storeValueInput, setStoreValueInput] = useState("");

  const [fetchKeyInput, setfetchKeyInput] = useState("");
  const [fetchValueInput, setfetchValueInput] = useState("");

  const [clearKeyInput, setclearKeyInput] = useState("");

  const [storeMessage, setstoreMessage] = useState("")
  const [clearMessage, setclearMessage] = useState("")

  const [error, setError] = useState<string>("")

  const handleStore = () => {
    localSet(storeKeyInput, storeValueInput);
    setStoreKeyInput("")
    setStoreValueInput("")
    setstoreMessage("saved successfully")
  }

  const handleFetch = async () => {
    const data = await localGet(fetchKeyInput);
    if (data === "") {
      setfetchValueInput("")
      return setError("No value found.")
    } else {
      return setfetchValueInput(data)
    }
  }

  const handleClear = () => {
    localClear(clearKeyInput)
    setclearMessage("cleared")
  }

  useEffect(() => {
    if (storeMessage !== "") {
      setTimeout(() => setstoreMessage(""), 5000)
    }
    if (error !== "") {
      setTimeout(() => setError(""), 5000)
    }
    if (clearMessage) {
      setTimeout(() => setclearMessage(""), 5000)
    }
  }, [storeMessage, clearMessage, error])

  return (
    <div>
      <h3>Local Storage Demo</h3>
      <h4>Store Value</h4>
      <input className='input-box' value={storeKeyInput} onChange={(e) => setStoreKeyInput(e.target.value)} placeholder='Enter Key' /><br />
      <input className='input-box' value={storeValueInput} onChange={(e) => setStoreValueInput(e.target.value)} placeholder='Enter value' /><br />
      <button className='button-87' onClick={handleStore}>store</button>
      {storeMessage !== "" && <h5 style={{ color: "green" }}>{storeMessage}</h5>}
      <h4>Fetch Value</h4>
      <input className='input-box' placeholder='Enter Key' value={fetchKeyInput} onChange={(e) => setfetchKeyInput(e.target.value)} /><br />
      <input className='input-box' placeholder='value' disabled value={fetchValueInput} /><br />
      <button className='button-87' onClick={handleFetch}>get value</button>
      {error !== "" && <h5 style={{ color: "red" }}>{error}</h5>}
      <h4>Clear Value</h4>
      <input className='input-box' placeholder='Enter Key' value={clearKeyInput} onChange={(e) => setclearKeyInput(e.target.value)} /><br />
      <button className='button-87' onClick={handleClear}>Clear</button>
      {clearMessage !== "" && <h5 style={{ color: "green" }}>{clearMessage}</h5>}
    </div>
  )
}

export default SubBasic;