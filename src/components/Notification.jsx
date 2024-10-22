import { useState } from "react"

function Notification({ message, green }) {

    if (message === null) {
        return
    }
    return (
        <div className={green ? "success" : "error"}>
            {message}
        </div>
    )
}

export default Notification