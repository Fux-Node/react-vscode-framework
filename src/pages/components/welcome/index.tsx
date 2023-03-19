import React, { useEffect, useState } from 'react'
import "@styles/welcome.css"
import intro from "@src/constants/web/card-intro.png"
import { executeCommand, notification, sendCommand } from '@src/global/middlewares/w2e'
import { FOCUS_EXTENSION } from '@src/types/custom'
import { ABOUT_WEB_VIEW_COMMAND } from '@src/types/webview'

const SubWelcome = () => {
    const [selectedValue, setSelectedValue] = useState<any>("error")
    const [message, setmessage] = useState("welcome to react-vscode-framework v1.0")

    const [error, setError] = useState("")

    const handleSubmit = () => {
        if (message === "") return setError("please type your message in input.")
        notification({ type: selectedValue, message })
    }

    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 5000)
    }, [error])

    return (
        <div className='container'>
            <img src={intro} className='intro-img' />
            <div className='content'>
                <h1 className='header'>Demo Of Notification</h1>
                <div className='input-group'>
                    <select className='input-box' value={selectedValue} onChange={(e) => {
                        setSelectedValue(e.target.value)
                    }}>
                        <option className='option-bg'>error</option>
                        <option className='option-bg'>information</option>
                        <option className='option-bg'>warning</option>
                    </select>
                    <input className='input-box' value={message} onChange={e => setmessage(e.target.value)} placeholder='Enter your message' />
                    {error !== "" && <h6 style={{ color: "red" }}>{error}</h6>}
                </div>
                <button className='button-87' onClick={handleSubmit}>submit</button>
                <button
                    className='button-87'
                    onClick={() => {
                        sendCommand(FOCUS_EXTENSION)
                    }}>Click for Local Storage Demo</button>
            </div>

            <div className='push-end'>
                <button className='button-87' onClick={() => executeCommand(ABOUT_WEB_VIEW_COMMAND)}>About Me</button>
            </div>
        </div>
    )
}

export default SubWelcome;