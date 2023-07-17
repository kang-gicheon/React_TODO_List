import "./todoItem.css";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate }) => {
  const onChangeCheckbox = () => {
    // 함수 onUpdate 추가, 체크박스를 클릭시 onChangeCheckbox 함수 호출
    onUpdate(id); // 인수로 현재 클릭이 발생한 할 일 아이템 id 전달
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        {/* onChange 이벤트 핸들러를 함수 onChangeCheckbox로 설정 */}
        <input onChange={onChangeCheckbox} type="checkbox" />
        {/* 할 일 아이템 가장 왼쪽에 할 일 완료 여부를 표시하는 체크박스 배치 */}
      </div>
      <div className="title_col">{content}</div>
      {/* 작성한 할 일 렌더링할 요소 배치 */}
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>{" "}
      {/* 작성된 시간을 렌더링할 요소 배치 */}
      <div className="btn_col">
        {/* 할 일 삭제 버튼 배치 */}
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
