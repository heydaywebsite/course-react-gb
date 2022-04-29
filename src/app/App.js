import "./App.module.scss";
import { Message } from "../components/Message/Message";

function App() {
  const message = "Learn React";

  return (
    <div>
      <Message message={message} />
    </div>
  );
}

export default App;
