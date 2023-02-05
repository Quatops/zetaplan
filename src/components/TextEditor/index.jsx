import React, { useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import { baseCSS, toggleCSS, photoCardCSS } from './componentCSS';

import { Editor } from '@tinymce/tinymce-react';
import { uploadImage } from 'api/uploader';
import ToggleUI from 'components/PostUIs/ToggleUI';
import CardUI from 'components/PostUIs/CardUI';
import WriteFormList from 'components/WriteFormList';

export default function TextEditor({ updateValue, post, fileRef }) {
  const editorRef = useRef(null);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const updateIsActiveModal = (isActive) => {
    setIsActiveModal(isActive);
  };

  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const content_style = baseCSS + toggleCSS + photoCardCSS;
  const component = (idx, row, col, space) => {
    switch (idx) {
      case 0:
        return ReactDOMServer.renderToString(
          <>
            <ToggleUI>
              회색 박스 안에 내용을 넣어주세요. 내용을 업로드하면 회색 박스 안
              내용이 토글로 적용됩니다. <br />
              말머리 이미지를 변경하고 싶다면, 이미지에 오른쪽클릭을 한 후
              업로드해주세요. (이미지 규격 : 30 x 30)
            </ToggleUI>
            <br />
          </>,
        );
      case 1:
        return ReactDOMServer.renderToStaticMarkup(
          <>
            <CardUI row={row} col={col} space={space}>
              내용을 적어주세요.
            </CardUI>
            <br />
          </>,
        );
        break;
    }
  };

  const insertComponent = (idx, row, col, space) => {
    editorRef.current.insertContent(
      component(idx, row && row, col && col, space && space),
    );
  };

  return (
    <>
      <input
        id="my-file"
        type="file"
        name="my-file"
        style={{ display: 'none' }}
      />
      {isActiveModal && (
        <WriteFormList
          insertComponent={insertComponent}
          updateIsActiveModal={updateIsActiveModal}
        />
      )}
      <Editor
        onInit={(evt, editor) => {
          editorRef.current = editor;
          editor.contentCSS.push(require('./style.css'));
          /* 커스텀 버튼 넣기 */
        }}
        initialValue={post ? post.content : ''}
        onEditorChange={(newValue, editor) => {
          updateValue(newValue);
        }}
        init={{
          /* 기본설정 */
          setup: (editor) => {
            editor.ui.registry.addButton('customInsertButton', {
              text: '레이아웃 추가',
              tooltip: '지정된 레이아웃을 추가하세요.',
              onAction: function (_) {
                setIsActiveModal(true);
              },
            });
          },
          content_style,
          // content_css: useDarkMode ? 'dark' : 'default',
          content_css: 'default',
          language: 'ko_KR',
          selector: 'textarea',
          placeholder: '내용을 입력하세요.',
          statusbar: false,
          menubar: true,
          plugins:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
          editimage_cors_hosts: ['picsum.photos'],
          toolbar:
            'image media link emoticons charmap | bold italic underline strikethrough | blocks fontfamily fontsize | forecolor backcolor | alignleft alignCenter alignRight alignjustify | numlist bullist | print | customInsertButton',

          images_file_types: 'png,jpg,svg,webp',
          file_picker_types: 'image',
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
              input.accept = 'image/gif, image/jpeg, image/png';
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
          quickbars_selection_toolbar:
            'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
          font_family_formats:
            'pretendard;나눔고딕;나눔스퀘어;나눔바른고딕;고닥;돋움;돋움체;굴림;굴림체;궁서;궁서체;Arial=arial;Helvetica=helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
          skin: useDarkMode ? 'oxide-dark' : 'oxide',
        }}></Editor>
    </>
  );
}
