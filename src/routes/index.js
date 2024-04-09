import { App } from './App';
import { TodoProvider } from '../TodoContext'
function App() {

  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}

export default App;
