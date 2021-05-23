import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xec3Dc4BD660a0A817b643dC6D2E9bb7Cd02A760D'
)

export default instance;