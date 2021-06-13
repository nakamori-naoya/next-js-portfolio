import React from 'react'

const NormalInput = ({
  name, type,required, 
  autoComplete, placeholder, 
  value, onChange 
}) => {
  return (  
  <div>
    <input
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
  )
}

export default NormalInput
