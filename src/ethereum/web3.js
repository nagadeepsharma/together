import Web3 from 'web3';

let web3;

if( typeof window != 'undefined' && typeof window.web3 != 'undefined'){
    // We are into the browser and metamask is installed 
    web3 = new Web3(window.web3.currentProvider);;
}
else{
    // we are on the server OR user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/b49dab4978444dfe9e5af7db9d91b27a'
    );
    web3 = new Web3(provider);
}

export default web3;