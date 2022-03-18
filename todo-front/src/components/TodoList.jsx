import React, { useState } from "react";

import { ListGroup, Button } from "react-bootstrap";

import TaskDatail from "./TaskDetail.jsx";
import useDate from "../hooks/useDate";

const TodoList = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [taskToShow, setTaskToShow] = useState({});

  return (
    <>
      {modalShow && (
        <TaskDatail
          show={modalShow}
          onHide={() => setModalShow(false)}
          task={taskToShow}
          createOrUpdateTask={props.createOrUpdateTask}
        />
      )}

      <div id="content">
        <div className="row mb-5">
          <Button
            className="mx-1"
            variant="primary"
            onClick={() => {
              setTaskToShow({});
              setModalShow(true);
            }}
          >
            New task
          </Button>
          <input
            className="mx-1"
            type="date"
            id="meeting-time"
            name="meeting-time"
            onChange={(e) => props.filterTasks(e.target.value)}
          />
        </div>
        <ListGroup>
          {props.tasks.map((task, key) => {
            return (
              <ListGroup.Item
                key={key}
                className="my-1"
                onClick={() => {
                  setTaskToShow(task);
                  setModalShow(true);
                }}
              >
                <div className=" row justify-content-between align-items-center">
                  <input
                    type="checkbox"
                    className="ml-1"
                    name={task.id}
                    defaultChecked={task.status === "1"}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.toggleCompleted(task.id);
                    }}
                  />
                  <small className="mx-2">
                    {useDate(parseInt(task.date), "time", "int", "-")}
                  </small>

                  <span className="content">{task.title}</span>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      props.removeTask(task.id);
                    }}
                    size="sm"
                    className="ml-3 mx-1"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
};

export default TodoList;
