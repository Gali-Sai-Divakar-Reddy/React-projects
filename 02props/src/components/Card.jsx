import React from 'react'

const Card = (props) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href="">
            <img className='rounded-lg' src={props.img} alt="" />
        </a>
        <div className='p-6 text-left space-y-4'>
            <blockquote>
                <p className='font-sans text-lg font-medium text-slate-300'>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat odio dolorum vero possimus placeat doloribus cumque modi excepturi laudantium dicta!"
                </p>
            </blockquote>
            <figcaption className='font-medium'>
                <div className='text-blue-300'>
                    {props.name}
                </div>
                <div className='text-slate-600'>
                    {props.position}, {props.location}
                </div>
            </figcaption>
        </div>
    </div>

  )
}

export default Card