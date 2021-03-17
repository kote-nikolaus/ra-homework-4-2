import React from 'react';
import WalkAddForm from './WalkAddForm';
import WalksList from './WalksList';
import { useState } from 'react';
import { datejs } from 'datejs';
import './mywalks.css';

export default function MyWalks() {
  const [walks, setWalks] = useState([]);

  const handleAdd = (walk) => {
    setWalks(prevWalks => {
      console.log("prevWalks: ", prevWalks)
      let myWalks = [...prevWalks, walk];
      return sortWalks(myWalks);
    });
  }

  const handleEdit = (walkIndex, length) => {
    setWalks(prevWalks => {
      prevWalks[walkIndex].length += length;
      return [...prevWalks]
    });
  }

  const handleRemove = (id) => {
    setWalks(prevWalks => prevWalks.filter(o => o.id !== id));
  }

  function sortWalks(walks) {
    let sortedWalks = walks;

    if (sortedWalks.length > 0) {
      sortedWalks = walks.map(o => {
        o.date = Date.parse(o.date);
        return o;
      });

      sortedWalks = sortedWalks.sort(function(a, b) {return b.date.getTime() - a.date.getTime()});

      sortedWalks = sortedWalks.map(o => {
        o.date = o.date.toString('dd.MM.yyyy');
        return o;
      });

    }

    return sortedWalks;
  }

  return (
    <React.Fragment>
      <WalkAddForm walks={walks} onAdd={handleAdd} onEdit={handleEdit}/>
      <WalksList walks={walks} onRemove={handleRemove}/>
    </React.Fragment>
  )
}
