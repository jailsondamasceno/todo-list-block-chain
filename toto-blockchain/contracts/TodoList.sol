pragma solidity ^0.5.0;
//pragma experimental ABIEncoderV2;

contract TodoList {
  uint public taskCount = 0;

  struct Task {
    uint id;
    string title;
    string description;
    address walletAddress;
    string priority;
    string status;
    uint date;
  }

  mapping(uint => Task) public tasks;

  event TaskCreated(
    uint id,
    string title,
    string description,
    address walletAddress,
    string priority,
    string status,
    uint  date
  );

  event TaskCompleted(
    uint id,
    string status
  );

  constructor() public {
 
  }

  function createTask( string memory _title,  string memory _description, string memory _priority, string memory _status, uint  _date) public {
    taskCount ++;
    tasks[taskCount] = Task(taskCount, _title, _description, msg.sender, _priority, _status, _date);
    emit TaskCreated(taskCount, _title,_description, msg.sender, _priority,_status, _date);
  }

  function updateTask(uint _id, string memory _title,  string memory _description, string memory _priority, string memory _status, uint  _date) public {
    tasks[_id] = Task(_id, _title, _description, msg.sender, _priority, _status, _date);
    emit TaskCreated(_id, _title, _description, msg.sender, _priority,_status, _date);
  }
  

  function toggleCompleted(uint _id) public {
    Task memory _task = tasks[_id];
    _task.status = keccak256(bytes(_task.status))  == keccak256(bytes("1")) ? '0' : '1';
    tasks[_id] = _task;
    emit TaskCompleted(_id, _task.status);
  }

 function removeTask(uint _id) public {
     delete tasks[_id];
    }

}
