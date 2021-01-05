import './App.css';
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";

function App() {
  return (
    <div className="App">

      {/* sidebar */}
      <Sidebar />
      
      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />

    </div>
  );
}

export default App;
