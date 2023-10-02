import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { FormTasks } from "./components/FormTasks";
import { ListTasks } from "./components/ListTasks";
import { Container } from "./components/Container";
import { Content } from "./components/Content";
import axios from "axios";

interface Task {
  id: string;
  createdAt: Date;
  title: string;
  loading: boolean; // Add loading property
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const baseURL = "https://651b0144340309952f0e2648.mockapi.io/todo";

  async function getTodo() {
    try {
      const response = await axios.get<Task[]>(baseURL); // Specify the type as Task[]
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  async function createNewTask() {
    const payload = {
      title: newTask,
      id: uuid(),
      createdAt: new Date(),
    };
    try {
      await axios.post(baseURL, payload);
      setNewTask("");
      getTodo();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTasks(id: string) {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, loading: true } : task
      );
      setTasks(updatedTasks);

      await axios.delete(`${baseURL}/${id}`);
      getTodo();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Content>
        <FormTasks
          createNewTask={createNewTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />

        <ul className="w-full">
          {tasks &&
            tasks.map((task) => (
              <ListTasks
                deleteTasks={deleteTasks}
                id={task.id}
                loading={task.loading}
                title={task.title}
                key={task.id}
              />
            ))}
        </ul>
      </Content>
    </Container>
  );
}

export default App;
