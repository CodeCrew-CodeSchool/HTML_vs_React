import './App.css';

function TodoItem(props) {
  return <li>{props.text}</li>;
}


function TodoList() {
  return (
    <ul>
      <TodoItem text="Learn HTML" />
      <TodoItem text="Learn spanish" />
      <TodoItem text="Watch a movie" />

    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
