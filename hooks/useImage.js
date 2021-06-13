import { useState , useCallback } from 'react';

const useImage = (Multipule) => {
  const [images, setImages] = useState([])

  const uploadImage = useCallback((event) => {
    const file = event.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      Multipule ? 
      setImages((prevState => [...prevState, {file: file, src: reader.result}])) 
      : 
      setImages([{file: file, src: reader.result}]) 
    }  
}, []);


  const deleteImage = useCallback( async (id) => {
    const ret = window.confirm('この画像を削除しますか？')
    if (!ret) {
        return false
    } else {
        const newImages = images.filter(image => image.file.id !== id)
        setImages(newImages);
    }
}, [images])

  return {images, uploadImage, deleteImage}
}

export default useImage
