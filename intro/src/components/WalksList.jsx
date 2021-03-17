import React from 'react';
import Walk from '../models/Walk';
import WalkItem from './WalkItem';

export default function WalksList(props) {
  const {walks, onRemove: handleRemove} = props;
  return (
    <ul className='walks-list'>
      {walks.map(o => <WalkItem key={o.id} walk={o} onRemove={handleRemove}/>)}
    </ul>
  )
}
