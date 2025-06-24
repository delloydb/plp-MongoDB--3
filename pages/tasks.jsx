/ Tasks.jsx
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Task Manager</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
          className="border px-3 py-2 rounded w-full dark:bg-gray-800 dark:text-white"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded">
            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
            <div className="space-x-2">
              <Button variant="secondary" onClick={() => toggleTask(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
