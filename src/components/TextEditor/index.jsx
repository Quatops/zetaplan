import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({ images, updateValue, updateText }) {
  const editorRef = useRef(null);
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const content_style = `
  html {
    padding: 1rem;
    width: 50%;
    margin: 0 auto;
    -webkit-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 0.2);
    height: 100%;
  }
  body {
    font-family: 나눔고딕, 나눔스퀘어, 돋움, Helvetica, Arial, sans-serif;
    font-size: 14px;
    border: none;
  }
  #tinymce{
    height: 100%;
    overflow: scroll;
  }
  
  `;

  useEffect(() => {
    if (editorRef.current) {
      console.log('출력해봐라', editorRef.current.getContent());
    }
  }, []);

  return (
    <>
      <input
        id="my-file"
        type="file"
        name="my-file"
        style={{ display: 'none' }}
      />
      <Editor
        onInit={(evt, editor) => {
          editorRef.current = editor;
          editor.contentCSS.push(require('./style.css'));
        }}
        onEditorChange={(newValue, editor) => {
          updateValue(newValue);
          updateText(editor.getContent({ format: 'text' }));
        }}
        init={{
          /* 기본설정 */
          content_style,
          content_css: useDarkMode ? 'dark' : 'default',
          language: 'ko_KR',
          selector: 'textarea',
          placeholder: '내용을 입력하세요.',
          statusbar: false,
          menubar: false,
          plugins:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
          editimage_cors_hosts: ['picsum.photos'],
          toolbar:
            'image media link emoticons charmap | bold italic underline strikethrough | blocks fontfamily fontsize | forecolor backcolor | alignleft alignCenter alignRight alignjustify | numlist bullist | print ',

          /*이미지 설정 */
          images_file_types: 'png,jpg,svg,webp',
          file_picker_types: 'file image media',
          image_advtab: true,
          image_caption: true,
          file_browser_callback_types: 'image',
          file_picker_callback: function (callback, value, meta) {
            if (meta.filetype === 'image') {
              let input = document.getElementById('my-file');
              if (!input) return;
              input.click();
              input.onchange = function () {
                let file = input?.files[0];
                let reader = new FileReader();
                reader.onload = (e) => {
                  callback(e.target.result, {
                    alt: file.name,
                  });
                };
                reader.readAsDataURL(file);
              };
            }
          },

          /* 폰트설정 */
          quickbars_selection_toolbar:
            'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
          font_family_formats:
            '나눔고딕;나눔스퀘어;나눔바른고딕;고닥;돋움;돋움체;굴림;굴림체;궁서;궁서체;Arial=arial;Helvetica=helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
          skin: useDarkMode ? 'oxide-dark' : 'oxide',
        }}
      />
    </>
  );
}
