import { useState } from "react";
import TopNav from "./components/TopNav";
import CountDown from "./components/CountDown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen">
    
      <TopNav />
      <CountDown/>
    </div>
  );
}

export default App;
