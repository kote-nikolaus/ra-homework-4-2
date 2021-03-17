import React from 'react';
import Walk from '../models/Walk';

export default function WalkItem(props) {
  const {walk, onRemove: handleRemove} = props;

  return (
    <li className='walk-item' key={walk.id}>
      <p className='walk-date'>{walk.date}</p>
      <p className='walk-length'>{walk.length}</p>
      <button className='walk-item-remove' onClick={()=>handleRemove(walk.id)}>x</button>
    </li>
  )
}
