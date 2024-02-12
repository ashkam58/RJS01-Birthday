import React from 'react'

const list = ({people}) => {
  return (
    <>
      {people.map((person)=>{
        const {id, name, age, image} = person;
        return (
          <article className='person'>
          <img src={image} className='img' />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
          </article>
        )
      })}

    </>
  )
}

export default list
