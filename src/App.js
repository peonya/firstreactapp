import Message from "./Message";
import './App.css';

function App() {
  const number = 1;
  return (
    <div className="App">
      <header className="App-header">
        <Message counter={number} />
      </header>
    </div>

  );
}

export default App;
