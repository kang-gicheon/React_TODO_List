import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

// 목(Mock) 데이터 설정, 테스트 목적 사용 데이터

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },

  {
    id: 0,
    isDone: false,
    content: "잠자기",
    createDate: new Date().getTime(),
  },

  {
    id: 0,
    isDone: false,
    content: "아무것도 안 하기",
    createDate: new Date().getTime(),
  },
];

function App() {
  // 할 일 아이템 상태를 관리할 state, 배열로 초기화
  const [todo, setTodo] = useState([mockTodo]);

  return (
    <div className="App">
      {/* 헤더 영역 */}
      <Header />
      {/* 할 일을 작성할 edit 영역 */}
      <TodoEditor />
      {/* 작성한 할 일 목록 영역 */}
      <TodoList />
    </div>
  );
}

export default App;
