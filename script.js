// projectID = ba544584e9f5405b8f86d7edcac49793

const Web3 = require('web3')

class TransactionChecker{
    web3;
    account;

    constructor(acccount){
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ba544584e9f5405b8f86d7edcac49793'))
        this.account = acccount.toLowerCase();
    }

    async checkBlock(){
        let block = await this.web3.eth.getBlock('latest')
        let number = block.number;
        console.log("searching block" + number)

        if(block != null && block.transactions != null){
            for(let txHash of block.transactions){

                let tx = await this.Web3.getTransaction(txHash);
                if(this.account == tx.to.toLowerCase()){
                    console.log('Transaction found on the block')
                    console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestam: new Date()})
                }
            }
        }
    }
}

let txChecker = new TransactionChecker("0x94b25e1df27119BFc235355d0602B5bff2fED6c9")
txChecker.checkBlock()