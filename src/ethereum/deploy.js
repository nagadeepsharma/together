
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new  HDWalletProvider(
    'spoon dumb sure bitter scare topic spin edit number penalty story female',
    'https://rinkeby.infura.io/v3/b49dab4978444dfe9e5af7db9d91b27a'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy contract from account : ' , accounts[0]);
    const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data : compiledFactory.evm.bytecode.object })
    .send({ from : accounts[0] , gas : '2000000'})

    console.log('Contract deployed at address :',result.options.address);
};

deploy();

