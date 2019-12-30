import React, { useState } from "react";

function SimpleFormHooks() {
    const [email, setEmail] = useState("");
    return (
        <div>
            <h1>The value is .. {email} </h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
    )
}

export default SimpleFormHooks;