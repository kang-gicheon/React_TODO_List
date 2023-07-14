import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  // 사용자가 입력 폼에 입력한 데이터를 저장할 state 생성(변수명: content)
  const [content, setContent] = useState("");
  // 입력 폼의 onChange 이벤트 핸들러 onChangeContent 제작
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏</h4>
      <div className="editor_wrapper">
        {/* 입력 폼의 value 속성을 이용한 content 값, 설정 */}
        <input
          value={content}
          onChange={onChangeContent} // 입력 폼의 value 속성을 이용한 content 값, 설정
          placeholder="새로운 Todo"
        />
        <button>추가하기</button>
      </div>
    </div>
  );
};
export default TodoEditor;
