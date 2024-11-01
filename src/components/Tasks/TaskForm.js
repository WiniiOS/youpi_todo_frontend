import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:8000/api/tasks', {
      title,
      description,
      due_date: dueDate,
      status: false
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    onTaskCreated();  // Recharger la liste après création
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Créer Tâche</button>
    </form>
  );
}

export default TaskForm;
