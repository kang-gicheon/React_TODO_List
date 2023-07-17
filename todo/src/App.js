import { useState, useRef } from "react";
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
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3); // 게시물 테스트 파일에 맞게 초깃값 ref객체 3으로 저장

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current, // idRef(현재값 : 3 = 새로 추가할 아이템 id 지정), 처음 추가라면 아이템 id = 3
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1; // idRef의 현재값 + 1, 아이템을 추가할때마다 idRef의 현재값 1씩 증가 (고유 id 갖게함)
  };

  const onUpdate = (targetId) => {
    // 게시물 수정 함수
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) => {
    // 게시글 삭제 함수
    setTodo(todo.filter((it) => it.id !== targetId));
  }; // 삭제 버튼 클릭 -> 삭제할 아이템 id 저장, 해당 id 요소를 뺀 새 배열로 todo 업데이트, 대상 아이템 삭제

  return (
    <div className="App">
      {/* 헤더 영역 */}
      <Header />
      {/* 할 일을 작성할 edit 영역 */}
      <TodoEditor onCreate={onCreate} />
      {/* 작성한 할 일 목록 영역 */}
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
