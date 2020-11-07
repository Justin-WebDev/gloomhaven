import React from 'react';

const Item = (imageUrl) => {
  return (
    <img class='item' src={`https://gloomhavendb.com/${imageUrl}`} />
  )
}
export default Item;