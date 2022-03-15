import React, { useEffect, useState } from "react";
/* import Web3 from "web3"; */
import "./App.css";
/* import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config"; */
import TodoList from "./components/TodoList.tsx";
import myTasks from "./components/tasks";
import useDate from './hooks/useDate'

const App = () => {
  const [tasks, setTasks] = useState([]);
  /*   const [account, setAccount] = useState(""); */
  const [loading, setLoading] = useState(true);
  /*   const [todoList, setTodoList] = useState(); */

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    setTasks(myTasks.tasks);


    /*     const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    setTodoList(todoList);
    const taskCount = await todoList.methods.taskCount().call();
    for (var i = 1; i <= taskCount; i++) {
      console.log("engegeiughui", i);
      const task = await todoList.methods.tasks(i).call();
      setTasks([...tasks, task]);
    } */
    setLoading(false);
  };

  const createTask = (content) => {
    console.log('createTask')

   // this.setLoading(true);
   /*  todoList.methods
      .createTask(content)
      .send({ from: account })
      .once("receipt", (receipt) => {
        setLoading(false);
      }); */
  };

  const toggleCompleted = (taskId) => {
    setLoading(true);
   /*  todoList.methods
      .toggleCompleted(taskId)
      .send({ from: account })
      .once("receipt", (receipt) => {
        setLoading(false);
      }); */
  };

  const updateTask = (task)=>{
    console.log('updateTask')

  }

  const createOrUpdateTask = (task)=>{
    const newDate = useDate(task.date, 'int', 'time', '-')
    const taskSave = task
    taskSave.date = newDate 
    console.log('task', taskSave)
    if(taskSave.id) return updateTask(taskSave)
    createTask(taskSave)
  }

  const removeTask = (taskId)=>{
    console.log('removeTask', taskId)
  }

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
