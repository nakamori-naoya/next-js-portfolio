import { useState , useCallback } from 'react';

const useImage = (isMultipule) => {
  const [images, setImages] = useState([])

  const addImage = useCallback((event) => {
    const file = event.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      isMultipule ? 
      setImages((prevState => [...prevState, {file: file, src: reader.result}])) 
      : 
      setImages([{file: file, src: reader.result}]) 
    }  
}, []);


  const deleteImage = useCallback( async (id) => {
    console.log("id",id)
    const ret = window.confirm('この画像を削除しますか？')
    if (!ret) {
        return false
    } else {
        const newImages = images.filter(image => image.src !== id)
        setImages(newImages);
    }
}, [images])



  return {images, addImage, deleteImage}
}

export default useImage
