import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address

const address = '0x3f0d40e5fd5d8f298c8413e403b9455da7269f18';

//use the ABI from your contract

const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "name": "sendHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export default new web3.eth.Contract(abi, address);