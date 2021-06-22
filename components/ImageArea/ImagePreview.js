import React from "react"

const ImagePreview = React.memo((props) => {
  return (
    <div className="w-36" onClick={()=> props.deleteImage(props.id)}>
      <img alt="プレビュー画像" src={props.src} />
    </div>
  )
})

export default ImagePreview;