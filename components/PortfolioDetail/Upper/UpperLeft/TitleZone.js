import React from 'react'

const TitleZone = React.memo(({title}) => {
  return (
    <div>
      {title != null ? (
        <h2 className="font-serif text-3xl text-center">{title}</h2>)
        :(
        <h2 className="font-serif text-3xl text-center">タイトルなし</h2>
      )}
    </div>
  )
})

export default TitleZone
