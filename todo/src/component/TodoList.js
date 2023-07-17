import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate }) => {
  // props 구조 분해 할당

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    // 검색 기능, toLowerCase 메서드를 이용해 문자열에 있는 대문자 -> 소문자로 바꿔서 검색 가능
    return search === "" // 현재 입력한 검색어가 search가 빈 문자열이라면
      ? todo // to를 그대로 반환
      : todo.filter(
          (
            it // 빈 문자열이 아니라면 search의 내용과 일치하는 아이템만 필터링
          ) => it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      {/* 여러 개의 할 일 아이템을 리스트로 보여줄 div 태그 요소 배치 */}
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
