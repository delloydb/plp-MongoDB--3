const [tasks, setTasks] = useLocalStorage("tasks", []);
const [filter, setFilter] = useState("all");

function addTask(task) {
  setTasks([...tasks, task]);
}

function deleteTask(id) {
  setTasks(tasks.filter(t => t.id !== id));
}

function toggleComplete(id) {
  setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
}
