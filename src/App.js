import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  const socket = io("http://localhost:3000", {
    autoConnect: true,
  });

  useEffect(() => {
    socket.on("uxarkeci_data_5_6", (data) => console.log(data));
  }, [socket]);
  return (
    <div
      className="App"
      onClick={() => {
        socket.emit("staca_data", 5, 6, 1, {
          message: "heeeyyy",
          is_typing: false,
          is_active: true,
        });
      }}
    >
      ASDASDASD
    </div>
  );
}

export default App;
