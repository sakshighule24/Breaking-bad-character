import React from 'react';

const eachItem = ({ item, quotes }) => {
  return (
    <div className='card'>
          <div className='box'>
              <div className='charImg'>
                  <img src={ item.img } alt='' />
              </div>
              <div className='content'>
                  <h3>{item.name}</h3>
                  <p>Actor Name: {item.portrayed}</p>
                  <p>Nickname: {item.nickname}</p>
                  <p>Birthdate: {item.birthday}</p>
                  <p>Status: {item.status}</p>
                  <p>Seasons: {item.appearance}</p>
                  <p>Occupation: {item.occupation} </p>
                  <p>Quotes: {quotes.quote}</p>
              </div>
          </div>
      </div>
  )
}

export default eachItem;