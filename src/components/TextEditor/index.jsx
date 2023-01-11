import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { EDITOR_CONFIG } from './config';

export default function TextEditor() {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <input
        id="my-file"
        type="file"
        name="my-file"
        style={{ display: 'none' }}
      />
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        {...EDITOR_CONFIG}
      />
      <button onClick={log}>클릭해서 열어라.</button>
    </>
  );
}
