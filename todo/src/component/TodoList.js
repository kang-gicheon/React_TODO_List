import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      {/* 여러 개의 할 일 아이템을 리스트로 보여줄 div 태그 요소 배치 */}
      <div className="list_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
