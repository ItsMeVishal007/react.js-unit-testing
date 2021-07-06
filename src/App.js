import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    { id: 0, title: 'wash dishes', complete: false },
    { id: 1, title: 'cook food', complete: true },
  ]
  return (
    <div className="App">
      {
        todos.map(todo => (
          <Todo todo={todo} />
        ))
      }
    </div>
  );
}

export default App;
