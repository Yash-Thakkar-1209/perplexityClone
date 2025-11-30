import "./App.css";
import ChatList from "./components/ChatList";
import Header from "./components/Header";
import InputBox from "./components/InputBox";

function App() {
  return (
    <div className="h-screen">
      <Header />

      <ChatList />
      <InputBox />
    </div>
  );
}

export default App;
