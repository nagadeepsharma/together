import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { Redirect, useParams } from 'react-router'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import campaign from '../ethereum/campaign' 
import web3 from '../ethereum/web3'
function Campaigndetail(props) {
    const [cont,setcont]=useState()
    const [track,settrack]=useState({loading:false,error:false,contribu:false})
    const [tr,settr]=useState({error:false,contribu:false})
    const {address}=useParams()
    const [details,setdetails]=useState([])
    async function contri(){
        try{
            settr({contribu:true})
            const cam=await campaign(address)
            const ac=await web3.eth.getAccounts()
            await cam.methods.contribute().send({from:ac[0],value:cont})
            settr({contribu:false})
        }
        catch(e){
            settr({error:true,contribu:false})
        }
    }
    useEffect(()=>{
        async function detail(){
            try{
            settrack({error:'',loading:true})    
            const c=await campaign(address)
            const detail=await c.methods.getSummary().call()
            setdetails([detail])
            settrack({error:'',loading:false})
            }
            catch(e){
                settrack({error:true,loading:true})
            }
        }
        detail()
    },[])
    return (
        <div class="campaignshow">
            {   track.loading?<h1>Loading ....</h1>:
                details.map((item)=>{
                    return(
                        <>
                        <div className="box">
                            {tr.error?<Message error>Wrong Input or Network Busy</Message>:
                            <Input onChange={(e)=>setcont(e.target.value)}style={{width:"40%",height:"40%"}} type="number" placeholder="Enter The Contribition"></Input>}
                            <Button style={{marginTop:tr.error?"-1%":"0%",marginLeft:"2%"}} size="large" loading={tr.contribu?true:false} primary onClick={()=>contri()}>Contribute</Button>
                            <Button style={{marginTop:tr.error?"-1%":"0%",marginLeft:"2%"}} size="large" ><Link to= {`/campaigncreaterequest/${address}`} style={{color:"#184478"}}>Create Request</Link></Button>
                            <Button  style={{marginTop:tr.error?"-1%":"0%",marginLeft:"2%"}} size="large" color="google plus" ><Link to={`/campaignrequest/${address}`}style={{color:"#f4f4f4"}}>View Requests</Link></Button>

                        </div>
                        <div className="box">
                        <h2 className="h2">Campaign Address : {address}</h2>
                        </div>
                        <div className="box">
                        <h2 className="h2">Manager : {item[4]}</h2>
                        </div>
                        <div className="box">
                        <h2 className="h2">Balance :{web3.utils.fromWei(item[1],'ether')} eth</h2>
                        </div>
                        <div className="box">
                        <h2 className="h2">Minimum Contribution :{item[0]} Wei</h2>
                        </div>
                        <div className="box">
                        <h2 className="h2">Requests Count :{item[2]}</h2>
                        </div>
                        <div className="box">
                        <h2 className="h2">Approvers Count :{item[3]}</h2>
                        </div>
                        
                        </>
                    )
                })
            }
        </div>
    )
}

export default Campaigndetail
