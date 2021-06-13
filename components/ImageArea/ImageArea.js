import React, { useCallback, useState } from "react"
import IconButton  from "@material-ui/core/IconButton"
import AddPhotoALternateIcon from "@material-ui/icons/AddPhotoAlternate"
import ImagePreview from "./ImagePreview"

const ImageArea = ({images, uploadImage, deleteImage}) => {
  console.log()
  return (
    <div>
      <div className="flex flex-wrap" >
        {images.length > 0 && (
          images.map(image =><ImagePreview deleteImage={deleteImage} src={image.src} key={image.file.id} id={image.file.id} />)
        )}
      </div>    
        <div className="text-right" >
          <span className="font-serif text-lg ">プロフィールの画像</span>
          <IconButton className="h-14 w-14" >
            <label>
              <AddPhotoALternateIcon
                className="text-white"
              />
              <input className="hidden" type="file" id="image"  
              onChange={(event) => {
                uploadImage(event)
                event.target.value = "";
              }}
              />
            </label>
          </IconButton>
        </div>
    </div>
    )



}

export default ImageArea