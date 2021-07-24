import React, { useState, useEffect, useRef } from 'react'
import SearchGif from './SearchGif'

const Messages = () => {

    const [messages, setMessages] = useState('')
    const [messageList, setMessageList] = useState([])

    const inputRef = useRef(null)

    // console.log(inputRef)


    useEffect(() => {
        setMessages(inputRef.current.value)
    }, [])


    const handleSubmit = (e) => {

        e.preventDefault();
        // messages = inputRef.current.value

        setMessageList([...messageList, messages])

        setMessages('')

    }

    // const handleGIF = () => {
    //     console.log("GIF btn clcked")
    //     // < SearchGif />
    //     return <SearchGif />
    // }


    // console.log(messageList)

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <input type="text" value={messages} ref={inputRef} onChange={e => setMessages(e.target.value)} />
                {/* <button onClick={handleGIF}>GIF</button> */}
                {/* <button type="submit" onClick={handleClick}>Send</button> */}
            </form>
            <div className="message">
                {
                    messageList !== [] && messageList.map((message, i) => (
                        <h1 key={i}>{message}</h1>
                    ))
                }
            </div>
        </div>
    )
}

export default Messages
