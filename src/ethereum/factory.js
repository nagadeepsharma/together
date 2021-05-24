import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6e5825bb9C1Ad3472102E9CcFDF712Ab20A04722'
)

export default instance;