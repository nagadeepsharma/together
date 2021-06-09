import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    (CampaignFactory.abi),
    '0x0516026cAbEBdC5d130daf5404663F5AE9847AF7'
)

export default instance;