import { useState } from "react"

function Notification({ message }) {

    if (message === null) {
        return
    }
    return (
        <div className='msg'>
            {message}
        </div>
    )
}

export default Notification