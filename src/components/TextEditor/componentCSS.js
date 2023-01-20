export const baseCSS = `
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

export const toggleCSS = ` 
/* toggle ui css*/
.card_ui {
  width: 100%;
  display: flex;
  flex-direction : column;
  justify-content: center;
  position: relative;
}
.toggle_header{
  display: flex;
  align-items: center;
}

.toggle_prefix {
  width: 30px;
  height: 30px;
  margin-right: 20px;
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


.toggle_title::after {
  content: '';
  position: absolute;
  width: 100%;
  top: 50%;
  height: 1px;
  background-color: var(--color-grey);
}
.toggle_content{
  font-family: pretendard;
}
`;
