import React from "react"
import IconButton  from "@material-ui/core/IconButton"
import AddPhotoALternateIcon from "@material-ui/icons/AddPhotoAlternate"
import ImagePreview from "./ImagePreview"

const ImageArea = React.memo(({images, addImage, deleteImage}) => {
  return (
    <>
      <div className="flex flex-wrap" >
        {images.length > 0 && (
          images.map(image =><ImagePreview deleteImage={deleteImage} src={image?.src} key={image?.src} id={image?.src}/>)
        )}
      </div>    
        <div className="text-right" >
          <span className="font-serif text-lg">画像を選択</span>
          <IconButton className="h-14 w-14" >
            <label>
              <AddPhotoALternateIcon
                className="text-white"
              />
              <input className="hidden" type="file" id="image"  
              onChange={(event) => {
                addImage(event)
                event.target.value = "";
              }}
              />
            </label>
          </IconButton>
        </div>
    </>
    )
})

export default ImageArea