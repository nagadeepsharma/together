import React,{useState} from 'react'
import { Button, Form, Input, Message, TableHeader, TextArea } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import '../css/campaigncreate.css'
import together from '../assets/together.PNG'
const {create}=require('ipfs-http-client')
const ipfs=create({host:'ipfs.infura.io',port:5001,protocol:'https'})
function Campaigncreate() {
    
    const [contribution,setcontribution]=useState()
    const [idea,setidea]=useState()
    const [filed,setfiled]=useState({buffer:null,metahash:''})
    const[track,settrack]=useState({errors:false,loading:false})
    
    async function  submitc(){
        try{
            if(contribution<100){
                settrack({errors:true,loading:false})
                throw Error;
            }
            settrack({errors:false,loading:true})
            
        
            await window.ethereum.enable()
            const accounts=await web3.eth.getAccounts()
            // console.log(accounts[0]);
            await factory.methods.createCampaign(contribution,idea,filed.metahash).send({from:accounts[0]})
            settrack({loading:false,errors:false})
        
    }
    catch(e){
        settrack({errors:true,loading:false})
    }
    }
    async function fileload(event){
        event.preventDefault()
        try{
        const filename=event.target.files[0]
        const reader=new window.FileReader()
        reader.readAsArrayBuffer(filename)
        reader.onloadend=async()=>{
            
            settrack({errors:false,loading:true})
            const {cid}=await ipfs.add(Buffer(reader.result))
            const temp=cid.string
            setfiled({buffer:Buffer(reader.result),metahash:`https://ipfs.io/ipfs/${temp}`})
            console.log(filed);
            settrack({loading:false,errors:false})
        }
            
        }
        catch(e){
            settrack({errors:true,loading:false})
        }
        
    }
    return (
        track.errors?<div className="create"><Message negative><h3 style={{color:"red"}}>Not Reached Minimum or Invalid Action Please Refresh</h3></Message></div>:
        <div className="create">
            <div className="box" style={{width:"80%",backgroundColor:"#f4f4f4",height:"10%"}}><h2 className="h2">Let's Create a Campaign</h2></div>
            <TextArea placeholder="Enter Your Idea" style={{width:"70%", border:"2px solid #f4f4f4"}} onChange={(e)=>setidea(e.target.value)} rows={8} />
            <div style={{width:"70%"}}>
                <Message warning>For Verification, First Select Dummy File and Select Original</Message>
            <Input  type="file" style={{width:"100%"}} onChange={fileload}  />
            </div>
            <Input style={{width:"70%"}} type="number" onChange={(e)=>setcontribution(e.target.value)} placeholder="Enter Minimum Contribution" />
            <Button loading={track.loading?true:false} size="massive" primary onClick={()=>submitc()}>Create</Button>
        </div>
        
    )
}

export default Campaigncreate
