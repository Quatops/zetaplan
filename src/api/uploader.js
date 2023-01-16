// export async function uploadImage(files) {
//   const data = new FormData();
//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     data.append('file', file);
//     data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
//     fetch(process.env.REACT_APP_CLOUDINARY_URL, {
//       method: 'POST',
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data.url));
//   }
// }

export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
