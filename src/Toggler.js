import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, setIsHappy] = useToggle(true);
  const [isHeartBroken, setIsHeartBroken] = useToggle(false);

  return (
    <div>
      <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? "😀" : "😑"}</h1>
      <h1 onClick={() => setIsHeartBroken(!isHeartBroken)}>{isHeartBroken ? "💔" : "💗"}</h1>
    </div>
  );
}

export default Toggler;
