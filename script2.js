const Web3 = require('web3')

const web3 = new Web3('https://mainnet.infura.io/v3/ba544584e9f5405b8f86d7edcac49793')

web3.eth.accounts.wallet.add('0x29839da0f26E14C925267941142C44Ee60EEe3A1')

web3.eth.getBalance('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
.then(balance => console.log(balance))

const contract = new Web3.eth.Contract(abi, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')