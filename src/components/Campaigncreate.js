import React,{useState} from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import '../css/campaigncreate.css'
function Campaigncreate() {
    const [contribution,setcontribution]=useState()
    const[track,settrack]=useState({errors:false,loading:false})
    async function  submitc (){
        try{
            settrack({errors:false,loading:true})
        if(contribution<100){
            settrack({errors:true,loading:false})
            throw Error;
        }
        await window.ethereum.enable()
        const accounts=await web3.eth.getAccounts()
        console.log(accounts[0]);
        await factory.methods.createCampaign(contribution).send({from:accounts[0]})
        settrack({loading:false,errors:false})
    }
    catch(e){
        settrack({errors:true,loading:false})
    }
    }
    return (
        track.errors?<div className="create"><Message negative><h3 style={{color:"red"}}>Not Reached Minimum Please Refresh</h3></Message></div>:
        <div className="create">
            <div className="box" style={{width:"80%",backgroundColor:"#f4f4f4"}}><h2 className="h2">Let's Create a Campaign</h2></div>
            <Input style={{width:"70%"}} type="number" onChange={(e)=>setcontribution(e.target.value)} />
            <Button loading={track.loading?true:false} size="massive" primary onClick={()=>submitc()}>Create</Button>
        </div>
        
    )
}

export default Campaigncreate
