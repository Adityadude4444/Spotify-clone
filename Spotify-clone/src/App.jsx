import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-between">
      <div className="h-[90%] flex overflow-auto">
        <Sidebar />
        <Display />
      </div>

      <Player />
    </div>
  );
}
