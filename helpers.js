export function validateEmail(email) {
/*eslint-disable */
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*eslint-enable */
  return re.test(email);
}

export function validateStatus(status) {
  return status >= 200; // default
}

export function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
  const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const dataView = new DataView(arrayBuffer);
  const blob = new Blob([dataView], { type: mimeString });
  // var blob = new Blob([dataView.buffer], { type: mimeString });
  return blob;
}

export function buildUrl(link, artist) {
  let url = link;
  url = url.split('?')[0];
  url = `${url}?aff=${artist}`;
  return url;
}
