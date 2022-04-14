/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React from 'react';
import useEditor from 'hooks/useEditor';

const EditorComponent = () => {
  const editor = useEditor();

  return (
    <>
      <div id="editor" />
      <button onClick={() => console.log(editor?.getHTML())}>버튼</button>
    </>
  );
};

export default EditorComponent;
