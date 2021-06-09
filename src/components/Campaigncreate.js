import React,{useState} from 'react'
import { Button, Form, Input, Message, TableHeader, TextArea } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import '../css/campaigncreate.css'
const {create}=require('ipfs-http-client')
const ipfs=create({host:'ipfs.infura.io',port:5001,protocol:'https'})
function Campaigncreate() {
    
    const [contribution,setcontribution]=useState()
    const [idea,setidea]=useState()
    // const [file,setfile]=useState('')
    const [mh,setmh]=useState('')
    const [filed,setfiled]=useState({buffer:null,metahash:''})
    const[track,settrack]=useState({errors:false,loading:false})
    async function  submitc (){
        try{
            settrack({errors:false,loading:true})
            const {cid}=await ipfs.add(filed.buffer)
            console.log(cid.string);
            setmh(`https://ipfs.io/ipfs/${cid.string}`)
            console.log("done",`https://ipfs.io/ipfs/${mh}`);
        if(contribution<100){
            settrack({errors:true,loading:false})
            throw Error;
        }
        await window.ethereum.enable()
        const accounts=await web3.eth.getAccounts()
        // console.log(accounts[0]);
        await factory.methods.createCampaign(contribution,idea,mh).send({from:accounts[0]})
        settrack({loading:false,errors:false})
    }
    catch(e){
        settrack({errors:true,loading:false})
    }
    }
    async function fileload(event){
        event.preventDefault()
        const filename=event.target.files[0]
        const reader=new window.FileReader()
        await reader.readAsArrayBuffer(filename)
        reader.onloadend=()=>{
            setfiled({buffer:Buffer(reader.result),metahash:''})
        }
        
    }
    return (
        track.errors?<div className="create"><Message negative><h3 style={{color:"red"}}>Not Reached Minimum Please Refresh</h3></Message></div>:
        <div className="create">
            <div className="box" style={{width:"80%",backgroundColor:"#f4f4f4",height:"10%"}}><h2 className="h2">Let's Create a Campaign</h2></div>
            <TextArea placeholder="Enter Your Idea" style={{width:"70%", border:"2px solid #f4f4f4"}} onChange={(e)=>setidea(e.target.value)} rows={8} />
            <Input type="file" style={{width:"70%"}} onClick={(e)=>e.target.value=''} onChange={(e)=>fileload(e)} />
            <Input style={{width:"70%"}} type="number" onChange={(e)=>setcontribution(e.target.value)} placeholder="Enter Minimum Contribution" />
            <Button loading={track.loading?true:false} size="massive" primary onClick={()=>submitc()}>Create</Button>
        </div>
        
    )
}

export default Campaigncreate
