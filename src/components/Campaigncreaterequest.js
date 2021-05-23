import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router'
import { Button, Form, Header, Message } from 'semantic-ui-react'
import '../css/createrequest.css'
import campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'

function Campaigncreaterequest() {
    const [trac,settrac]=useState({loading:false,error:false,done:false})
    const {createaddress}=useParams()
    const [fdata,setfdata]=useState({des:'',val:0,rec:''})
    async function addreq(){
        try{
            settrac({loading:true,error:false,done:false})
            const accounts=await web3.eth.getAccounts()
            const cam=await campaign(createaddress)
            await cam.methods.createRequest(fdata.des,fdata.val,fdata.rec).send({from:accounts[0]})
            settrac({loading:false,error:false,done:true})
            setfdata({des:'',val:0,rec:''})

            
        }
        catch(e){
            settrac({loading:false,error:true})
            setfdata({des:'',val:'',rec:''})
        }

    } 
    return (
        trac.done?<Redirect to={`/campaignrequest/${createaddress}`} />:
        <div className="request">
            {trac.error?<Message error style={{width:"80%"}}><Header className="h2" as="h2">Invalid Data</Header></Message>:
            <Message style={{width:"80%"}}><Header className="h2" as="h2">Create Request</Header></Message>}
            <Form className="requestform">
                <Form.Field width={16}>
                    <input type="text" value={fdata.des}onChange={(e)=>setfdata({...fdata,des:e.target.value})} placeholder="Enter Description" required></input>
                </Form.Field>
                <Form.Field width={16}>
                    <input type="number" value={fdata.val}onChange={(e)=>setfdata({...fdata,val:e.target.value})} placeholder="Enter Value" required></input>
                </Form.Field>
                <Form.Field width={16}>
                    <input type="text" value={fdata.rec} onChange={(e)=>setfdata({...fdata,rec:e.target.value})} placeholder="Enter Address of Recipient" required></input>
                </Form.Field>
                <Button loading={trac.loading?true:false} style={{width:"80%"}} onClick={()=>addreq()}  primary size="large">Create</Button>
            </Form>
        </div>
        
    )
}

export default Campaigncreaterequest
