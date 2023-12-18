import { useState } from "react";
import TopNav from "./components/TopNav";
import CountDown from "./components/CountDown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <TopNav />
      <CountDown/>
    </>
  );
}

export default App;
