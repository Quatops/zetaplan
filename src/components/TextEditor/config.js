const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
export const EDITOR_CONFIG = {
  init: {
    /*setup: (editor) => {
      editor.ui.registry.addButton('custom_button', {
        icon: 'image',
        onAction: () => console.log('하하'),
      });
    },  => 버튼 커스텀할때... icon도 커스텀하긴 할 수 있나보다. 노오력을하면...*/

    /* 기본설정 */
    content_style:
      'body { font-family:나눔고딕,나눔스퀘어,돋움,Helvetica,Arial,sans-serif; font-size:14px }',
    language: 'ko_KR',
    selector: 'textarea',
    placeholder: '내용을 입력하세요.',
    height: '100%',
    statusbar: false,
    menubar: false,
    plugins:
      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    editimage_cors_hosts: ['picsum.photos'],
    toolbar:
      'custom_button image media link emoticons charmap | bold italic underline strikethrough | blocks fontfamily fontsize | forecolor backcolor | alignleft alignCenter alignRight alignjustify | numlist bullist | print ',

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
          reader.onload = function (e: ProgressEvent<FileReader>) {
            console.log('name', e.target.result);
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
      '나눔고딕;나눔스퀘어;나눔바른고딕;돋움;돋움체;굴림;굴림체;궁서;궁서체;Arial=arial;Helvetica=helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
  },
};
