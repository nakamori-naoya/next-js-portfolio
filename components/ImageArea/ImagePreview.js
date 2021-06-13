import React from "react"

const ImagePreview = (props) => {
  return (
    <div className="w-52" onClick={()=> props.deleteImage(props.id)}>
      <img alt="プレビュー画像" src={props.src} />
    </div>
  )
}

export default ImagePreview;