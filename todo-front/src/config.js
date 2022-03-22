export const TODO_LIST_ADDRESS = '0xd6a64979C59Eb46a82f8691e4438E8955e647048'

export const TODO_LIST_ABI =[
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tasks",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "walletAddress",
        "type": "address"
      },
      {
        "name": "priority",
        "type": "string"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "date",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8d977672"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "taskCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xb6cb58a5"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "title",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "walletAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "priority",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "status",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "date",
        "type": "uint256"
      }
    ],
    "name": "TaskCreated",
    "type": "event",
    "signature": "0x30a94aa78def75bc7da69119c96b92000e40c5fc7c95145b17bdcd727b3efec0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "status",
        "type": "string"
      }
    ],
    "name": "TaskCompleted",
    "type": "event",
    "signature": "0x7e6ffc29fe63759579d96a0457a8f2e08339aca345bd469f59dc2e61f82a5aeb"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_title",
        "type": "string"
      },
      {
        "name": "_description",
        "type": "string"
      },
      {
        "name": "_priority",
        "type": "string"
      },
      {
        "name": "_status",
        "type": "string"
      },
      {
        "name": "_date",
        "type": "uint256"
      }
    ],
    "name": "createTask",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x91ed7c57"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_title",
        "type": "string"
      },
      {
        "name": "_description",
        "type": "string"
      },
      {
        "name": "_priority",
        "type": "string"
      },
      {
        "name": "_status",
        "type": "string"
      },
      {
        "name": "_date",
        "type": "uint256"
      }
    ],
    "name": "updateTask",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x4494936b"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "toggleCompleted",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x455f5024"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "removeTask",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xc3084117"
  }
]
