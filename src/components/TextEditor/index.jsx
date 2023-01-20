import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { uploadImage } from 'api/uploader';
import ToggleUI from 'components/PostUIs/ToggleUI';
import ReactDOMServer from 'react-dom/server';
import { baseCSS, toggleCSS } from './componentCSS';

export default function TextEditor({ updateValue, post }) {
  const editorRef = useRef(null);
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const content_style = baseCSS + toggleCSS;

  const component = (idx) => {
    switch (idx) {
      case 0:
        return ReactDOMServer.renderToStaticMarkup(
          <>
            <ToggleUI>
              회색 박스 안에 내용을 넣어주세요. 내용을 업로드하면 회색 박스 안
              내용이 토글로 적용됩니다. <br />
              shift+enter를 하면 박스 안에서 줄바꿈을 할 수 있습니다.
            </ToggleUI>
            <br />
          </>,
        );
      case 1:
        break;
    }
  };

  console.log(component(0));
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
        initialValue={post ? post.content : component(0)}
        onEditorChange={(newValue, editor) => {
          updateValue(newValue);
        }}
        init={{
          /* 기본설정 */
          content_style,
          /* dark모드이면 css를 변경해라. */
          content_css: useDarkMode ? 'dark' : 'default',
          language: 'ko_KR',
          selector: 'textarea',
          placeholder: '내용을 입력하세요.',
          statusbar: false,
          menubar: false,
          /* 플러그인 */
          plugins:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
          editimage_cors_hosts: ['picsum.photos'],
          /* 툴바(상단 메뉴들) */
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
