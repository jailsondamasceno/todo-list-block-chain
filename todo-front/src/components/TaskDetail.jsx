import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import useDate from "../hooks/useDate";

const TaskDatail = (props) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (props.task.id) {
      const editTask = props.task;
      editTask.date = useDate(parseInt(props.task.date), "time", "int", "-");
      setFormData(editTask);
    }
    setFormData(props.task);
  }, []);

  return (
    <div className=" row justify-content-between align-items-center">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                type="text"
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="priority">
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
              >
                <option value="">Priority</option>
                <option value="Hight">Hight</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="priority">
              <input
                type="date"
                id="meeting-time"
                name="meeting-time"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              props.createOrUpdateTask(formData);
              props.onHide();
            }}
          >
            Save
          </Button>
          <Button variant="info" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskDatail;
