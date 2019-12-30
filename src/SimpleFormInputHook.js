import React from "react";
import useInputState from "./hooks/useInputState";

function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");
    
    return (
        <div>
            <h1>The Email is .. {email} & Pasword is: {password} </h1>
            <input type="text" value={email} onChange={updateEmail}/>
            <input type="password" value={password} onChange={updatePassword}/>

            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}

export default SimpleFormInputHook;

