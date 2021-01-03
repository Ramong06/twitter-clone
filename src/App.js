import './App.css';
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";

function App() {
  return (
    <div className="App">
        <h1>Ramon's-Twitter-Clone</h1>

      {/* sidebar */}
      <Sidebar />
      
      {/* feed */}
      <Feed />

      {/* widgets */}

    </div>
  );
}

export default App;
