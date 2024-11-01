import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div>
      <h2>Mes Tâches</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.status ? 'Complétée' : 'Non complétée'}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
