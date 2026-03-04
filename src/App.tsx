import { useState } from "react";
import Start from "./Start/Start";
import Play from "./Play/Play";

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  if (!active) {
    return (
      <>
        <Start onBegin={() => setActive(true)}></Start>
      </>
    );
  }

  return (
    <>
      <Play></Play>
    </>
  );
};

export default App;
