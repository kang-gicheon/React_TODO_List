import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";

function App() {
  return (
    <div className="App">
      {/* 헤더 영역 */}
      <Header />
      {/* 할 일을 작성할 edit 영역 */}
      <TodoEditor />
      {/* 작성한 할 일 목록 영역 */}
      <div>Todo List</div>
    </div>
  );
}

export default App;
