import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null); 
   // État pour la tâche en cours de modification
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    due_date: '',
    status: false,
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  // Fonction pour gérer l'édition d'une tâche
  const handleEdit = (task) => {
    setEditingTask(task.id);  // Définit la tâche en cours de modification
    setFormData({
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
    });
  };

  const handleDelete = async (task_id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:8000/api/tasks/${task_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(tasks.filter(task => task.id !== task_id));
  };

  return (
    <div>
      <h2>Mes Tâches</h2>
      <div>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
