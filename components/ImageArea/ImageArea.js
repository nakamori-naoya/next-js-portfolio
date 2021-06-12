import React, { useCallback, useState } from "react"
import IconButton  from "@material-ui/core/IconButton"
import AddPhotoALternateIcon from "@material-ui/icons/AddPhotoAlternate"
import {makeStyles} from "@material-ui/styles"
import ImagePreview from "./ImagePreview"

const useStyles = makeStyles( {

})

const ImageArea = ({images, setImages}) => {

  const [src, setSrc] = useState([])
  
  const uploadImage = useCallback((event) => {
    const file = event.target.files[0];
    setImages([file])   
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setSrc(reader.result)
      //setSrc((prevState => [...prevState, reader.result]))
    }
    //setImages((prevState => [...prevState, file]))   
}, []);
console.log(images)


  const deleteImage = useCallback( async (id) => {
    const ret = window.confirm('この画像を削除しますか？')
    if (!ret) {
        return false
    } else {
        const newImages = images.filter(image => image.id !== id)
        setImages(newImages);
        // return storage.ref('images').child(id).delete()
    }
}, [images])

    return (
    <div>
      <div className="flex flex-wrap" >
        {images.length > 0 && (
          images.map(image =><ImagePreview deleteImage={deleteImage} src={src} key={image.id} id={image.id} />)
        )}
      </div>    
        <div className="text-right" >
          <span>プロフィールの画像</span>
          <IconButton className="h-14 w-14" >
            <label>
              <AddPhotoALternateIcon/>
              <input className="hidden" type="file" id="image"  
              onChange={(event) => uploadImage(event)}
              />
            </label>
          </IconButton>
        </div>
    </div>
    )



}

export default ImageArea