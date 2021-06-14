import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    (CampaignFactory.abi),
    '0xFCD28a2504898734F74fF88fEa8d20900D39A532'
)

export default instance;