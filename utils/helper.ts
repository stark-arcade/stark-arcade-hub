// export const imageWidthAndHeight = (provideFile: any) => {
//   // take the given file (which should be an image) and return the width and height
//   const imgDimensions = { width: null, height: null };

//   return new Promise(resolve => {
//     const reader = new FileReader();

//     reader.readAsDataURL(provideFile);
//     reader.onload = function () {
//       const img: any = new Image();
//       img.src = reader.result;

//       img.onload = function () {
//         imgDimensions.width = img.width;
//         imgDimensions.height = img.height;

//         resolve(imgDimensions);
//       };
//     };
//   });
// };

export const imageWidthAndHeight = (
  file: File
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = event => {
      const img = new window.Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        reject(new Error('Failed to load image.'));
      };
      img.src = event.target?.result as string;
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file.'));
    };
    reader.readAsDataURL(file);
  });
};

export const uploadFileIPFS = async (fileToUpload: any) => {
  try {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    const res = await fetch('/api/files', {
      method: 'POST',
      body: formData,
    });
    const ipfsHash = await res.text();
    return ipfsHash;
  } catch (e) {
    console.log('error IPFS', e);
  }
};

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
