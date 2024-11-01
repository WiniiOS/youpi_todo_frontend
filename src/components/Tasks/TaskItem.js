import React from 'react';

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text"><small>Date d'échéance : {new Date(task.due_date).toLocaleDateString()}</small></p>
        <p className="card-text">
          <small>Statut : {task.status ? "Complétée" : "Non complétée"}</small>
        </p>
        
        <button 
          className="btn btn-primary btn-sm mr-2" 
          onClick={() => onEdit(task)}
        >
          Éditer
        </button>
        <button 
          className="btn btn-danger btn-sm" 
          onClick={() => onDelete(task.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
