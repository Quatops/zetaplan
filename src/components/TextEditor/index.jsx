import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { uploadImage } from 'api/uploader';
import ToggleUI from 'components/PostUICard/ToggleUI';

export default function TextEditor({ updateValue, post }) {
  const editorRef = useRef(null);
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const content_style = `
  html {
    padding: 1rem;
    width: 50%;
    margin: 0 auto;
    box-shadow: 0px -3px 14px 0px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0px -3px 14px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px -3px 14px 0px rgba(0,0,0,0.15);
    height: 100%;
  }
  body {
    font-family: pretendard,나눔고딕, 나눔스퀘어, 돋움, Helvetica, Arial, sans-serif;
    font-size: 14px;
    height: 100%;
    overflow:hidden
  }
  textarea{
    background-color: red;
  }
  `;

  const component = (idx) => {
    switch (idx) {
      case 0:
        return <ToggleUI>제목을 입력하세요.</ToggleUI>;
      case 1:
        break;
    }
  };

  return (
    <>
      <form>
        <input
          id="my-file"
          type="file"
          name="my-file"
          style={{ display: 'none' }}
        />
      </form>

      <Editor
        onInit={(evt, editor) => {
          editorRef.current = editor;
          editor.contentCSS.push(require('./style.css'));
        }}
        initialValue={
          post ? post.content : '<ToggleUI>제목을 입력하세요.</ToggleUI>'
        }
        onEditorChange={(newValue, editor) => {
          updateValue(newValue);
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
          images_upload_handler: async (blobInfo) => {
            return new Promise((resolve, reject) => {
              uploadImage(blobInfo.blob())
                .then((url) => {
                  resolve(url);
                })
                .catch((e) => {
                  reject(e);
                });
            });
          },
          file_picker_callback: function (callback, value, meta) {
            if (meta.filetype === 'image') {
              const input = document.getElementById('my-file');
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
            'pretendard;나눔고딕;나눔스퀘어;나눔바른고딕;고닥;돋움;돋움체;굴림;굴림체;궁서;궁서체;Arial=arial;Helvetica=helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
          skin: useDarkMode ? 'oxide-dark' : 'oxide',
        }}></Editor>
    </>
  );
}
