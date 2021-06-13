import React from 'react'

const RequiredTextCounter = ({target,limit}) => {
  const count = limit - target.length
  return (
    <div className="text-right">
      {count >= 0 ? 
      (
      <span className="text-xs text-white">
        {count}
      </span>
      ) : (
      <span className="text-sm text-red-600">
        {count}
      </span>
      )}
    </div>
  )
}

export default RequiredTextCounter
