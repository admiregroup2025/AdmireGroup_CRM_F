import React from 'react'

const Card = ({ title, icon, value, description}) => {
  return (
    <div className='w-fit border border-gray-500 rounded-md p-3'>
        <div className='w-full flex justify-between gap-6 mb-6'>
            <div className='text-black'>{title}</div>
            <div className='text-gray-600'>{icon}</div>
        </div>
        <div className='text-black text-lg font-semibold'>{value}</div>
        <div className='text-gray-500 text-md'>{description}</div>
    </div>
  )
}

export default Card