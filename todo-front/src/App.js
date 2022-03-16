import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";
import TodoList from "./components/TodoList.jsx";
//import myTasks from "./components/tasks";
import useDate from "./hooks/useDate";
import useDateToday from "./hooks/useDateToday";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState();
  const [dateTasks, setDateTasks] = useState(useDateToday("int"));

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    setTodoList(todoList);
    const taskCount = await todoList.methods.taskCount().call();
    const getTasks = [];
    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call();
      console.log("tasks", task, dateTasks);
      if (task.title) getTasks.push(task);
    }
    setTasks(getTasks);
    setLoading(false);
  };

  const createTask = (task) => {
    setLoading(true);
    todoList.methods
      .createTask(
        task.title,
        task.description,
        task.priority,
        task.status,
        task.date
      )
      .send({ from: account })
      .once("receipt", (receipt) => {
        setup();
      });
  };

  const toggleCompleted = (taskId) => {
    setLoading(true);
    todoList.methods
      .toggleCompleted(taskId)
      .send({ from: account })
      .once("receipt", () => {
        setup();
      });
  };

  const updateTask = (task) => {
    todoList.methods
      .updateTask(
        task.id,
        task.title,
        task.description,
        task.priority,
        task.status,
        task.date
      )
      .send({ from: account })
      .once("receipt", (receipt) => {
        setup();
      });
  };

  const createOrUpdateTask = (task) => {
    const newDate = useDate(task.date, "int", "time", "-");
    const taskSave = task;
    taskSave.date = newDate;
    console.log("task", taskSave);
    if (taskSave.id) return updateTask(taskSave);
    taskSave.status = "0";
    createTask(taskSave);
  };

  const removeTask = (taskId) => {
    setLoading(true);
    todoList.methods
      .removeTask(taskId)
      .send({ from: account })
      .once("receipt", () => {
        setLoading(false);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
          target="_blank"
        >
          Todo List
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small>
              <a className="nav-link" href="#">
                <span id="account"></span>
              </a>
            </small>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex justify-content-center">
            {loading ? (
              <div id="loader" className="text-center">
                <p className="text-center">Loading...</p>
              </div>
            ) : (
              <TodoList
                dateTasks={dateTasks}
                tasks={tasks}
                createTask={createTask}
                toggleCompleted={toggleCompleted}
                createOrUpdateTask={createOrUpdateTask}
                removeTask={removeTask}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
