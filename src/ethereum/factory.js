import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    (CampaignFactory.abi),
    '0x6B207fbb4286c5605d133eC87BD8Bdf0546ed161'
)

export default instance;