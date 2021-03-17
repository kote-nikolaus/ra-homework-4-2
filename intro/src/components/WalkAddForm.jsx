import React from 'react';
import { useState } from 'react';
import Walk from '../models/Walk';
import { nanoid } from 'nanoid';
import { datejs } from 'datejs';

export default function WalkAddForm(props) {

  const {walks, onAdd, onEdit} = props;
  const defaultForm = {date: '', length: ''}
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let walkIndex = -1;

    if (walks.length > 0) {
      for (let i = 0; i < walks.length; i++) {
        if (walks[i].date === Date.parse(form.date).toString('dd.MM.yyyy')) {
          walkIndex = i;
        }
      }
    }

    if (walkIndex === -1) {
      console.log("form.date: ", form.date)
      const walk = new Walk(nanoid(), form.date, Number(form.length));
      onAdd(walk);
    } else {
      onEdit(walkIndex, Number(form.length));
    }

    setForm(defaultForm);
  }

  return (
    <form className='walk-add-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='date'>Дата: </label>
        <input id='date' name='date' value={form.date} onChange={handleChange} placeholder='мм.дд.гг'/>
      </div>
      <div>
        <label htmlFor='length'>Пройдено: </label>
        <input id='length' name='length' value={form.length} onChange={handleChange} placeholder='км'/>
      </div>
      <button className='walk-add-button'>Добавить</button>
    </form>
  );
}
