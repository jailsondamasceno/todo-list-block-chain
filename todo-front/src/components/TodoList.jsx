import React, { useState } from "react";

import { ListGroup, Button } from "react-bootstrap";

import TaskDatail from "./TaskDetail.jsx";

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
        <Button
        className="mb-5"
          variant="primary"
          onClick={() => {
            setTaskToShow({});
            setModalShow(true);
          }}
        >
          New task
        </Button>
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
                      props.toggleCompleted();
                    }}
                  />
                  <span className="content">{task.title}</span>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      props.removeTask(task.id)
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
