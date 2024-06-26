import './App.css';
import Book from "./components/Book";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Nav from "./components/Nav";


const books = [
  {
      id:111,
      title:"Atomic Habits"
  },
  
  {
      id:222,
      title:"Think like monk"
  },
  
  {
      id:333,
      title:"The power of subconcious mind"
  },
  ]

function App() {
  return (
    <div className="App">
      <Login />
      <About />
      <Register />
      <Nav />
      <h>BooksBuzz.com</h>
      <Book books={books}/>
    </div>
  );
}

export default App;
