import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import factory from '../ethereum/factory'
import '../css/campaignshow.css'
import { Dimmer, Message } from 'semantic-ui-react'
function Campaignshow() {
    const[campaings,setcampaigns]=useState([])
    const [track,settrack]=useState({loading:false,error:false})
    useEffect(()=>{
        async function f(){
            try{
                settrack({loading:true,error:false})
                const campaingss=await factory.methods.getDeployedCampaigns().call()
                setcampaigns(campaingss);
                settrack({error:'',loading:false})
            }
            catch(e){
                settrack({error:true,loading:true})
            }
            
            
        }
        f()
        
    },[])
    return (
        <div className="campaignshow">
            {
                track.loading?track.error?<><Message negative><Message.Header>Error</Message.Header></Message></>:<h1>Loading ....</h1>:
                (campaings.map((item)=>(
                <div className="box">
                <h2><Link to={`/campaignshow/${item}`}>{item}</Link></h2>
                </div>
                )))
                
                
            }
        </div>
    )
}

export default Campaignshow
