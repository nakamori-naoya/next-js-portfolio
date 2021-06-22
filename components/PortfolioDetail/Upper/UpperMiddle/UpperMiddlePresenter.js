import React from 'react'
import { ImageSwiper } from './ImageSwiper'

const UpperMiddlePresenter = React.memo(({images}) => {
  return (
    <div className="mx-auto h-full w-96">
      <ImageSwiper
      {...{images}}
      />
    </div>
  )
})

export default UpperMiddlePresenter
