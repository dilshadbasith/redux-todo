import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
      <h1>To-Do-App</h1>
      <Form/>
      <Todos/>
   
    </div>
  );
}

export default App;
