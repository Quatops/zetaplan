export const baseCSS = `
html {
  padding: 1rem;
}
body {
  font-family: pretendard,나눔고딕, 나눔스퀘어, 돋움, Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: calc(100vh - 80px);
  overflow:scroll;
  padding: 0;
  margin: 0;
}

::-webkit-scrollbar {
  border-radius: 10px;
  height: 7px;
  width: 7px;
}

::-webkit-scrollbar-track {
  border: 1px solid rgb(231, 231, 231);
  border-radius: 7px;
}

::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  border: 0;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:active {
  background-color: #727272;
}

`;

export const toggleCSS = ` 
/* toggle ui css*/
.card_ui {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.toggle_label {
  display: flex;
  align-items: center;
}

.toggle_prefix {
  width: 30px;
  height: 30px;
  margin-right: 20px;
}

.toggle_checkbox{
  display:none;
}
.toggle_prefix img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.toggle_title {
  font-weight: 600;
  font-size: 1.4rem;
}

/*.toggle_title::after {
  content: '';
  position: absolute;
  width: 100%;
  top: 50%;
  height: 1px;
  background-color: var(--color-grey);
}*/
.toggle_content {
  font-family: pretendard;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 10px;
}
.card_ui input[type='checkbox']:checked + .toggle_label + .toggle_content {
  display: none;
}

`;
export const photoCardCSS = `
.photocard_ui {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

.photocard {
  border: 1px solid #eeeeee;
  border-radius: 10px;
  height: 230px;
  overflow: hidden;
}

.photocard_img {
  width: 100%;
  object-fit: contain;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photocard_img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.photocard_caption {
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;
