import './App.css';
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import Switch from "./Components/Switch";

function App() {
  return (
    <div className="App">

      {/* sidebar */}
      <Sidebar />
      
      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />

      <Switch />

    </div>
  );
}

export default App;
