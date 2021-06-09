import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x697A064451051df600e62cd2242B0b9485DEAFf6'
)

export default instance;