import "./todoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" />
        {/* 할 일 아이템 가장 왼쪽에 할 일 완료 여부를 표시하는 체크박스 배치 */}
      </div>
      <div className="title_col">할 일</div>
      {/* 작성한 할 일 렌더링할 요소 배치 */}
      <div className="date_col">{new Date().toLocaleDateString()}</div>{" "}
      {/* 작성된 시간을 렌더링할 요소 배치 */}
      <div className="btn_col">
        {/* 할 일 삭제 버튼 배치 */}
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
