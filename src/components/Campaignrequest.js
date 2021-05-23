import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Button, Header, Message, Table } from 'semantic-ui-react'
import campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
function Campaignrequest() {
    const[er,seter]=useState({loading:false,error:false})
    const {campaignaddress}=useParams()
    const[requests,setrequests]=useState([])
    const [got,setgot]=useState(false)
    const[ac,sac]=useState(0)
    useEffect(()=>{
        async function request(){
            try{
            if(got){
                throw Error
            }
            const cam=await campaign(campaignaddress)
            const requestcount=await cam.methods.getRequestCount().call()
            const approverscount=await cam.methods.approversCount().call()
            const result=await Promise.all(Array(parseInt(requestcount)).fill().map((element,index)=>{
                return cam.methods.requests(index).call()
            }))
            sac(approverscount)
            setrequests(result)
            setgot(true)
        }
        catch(e){
            console.log("done");

        }
            
        }
        request()

    })
    async function approve(index){
        try{
        seter({loading:true,error:false})
        const accounts=await web3.eth.getAccounts()
        const cam=await campaign(campaignaddress)
        await cam.methods.approveRequest(index).send({from:accounts[0]})
        seter({loading:false,error:false})
        }
        catch(e){
            seter({loading:false,error:true})

        }
    }
    async function finalize(index){
        try{
        seter({error:false,loading1:true})
        const accounts=await web3.eth.getAccounts()
        const cam=await campaign(campaignaddress)
        await cam.methods.finalizeRequest(index).send({from:accounts[0]})
        seter({error:false,loading1:false})
        }
        catch(e){
            seter({error:true,loading1:false})

        }
    }
    return (
        <>
        {er.error?<Message error><Header className="h2" as="h2">Your are not in Approvers or only once Can approve</Header></Message>:
        <Message><Header className="h2" as="h2">Campaign {campaignaddress} Requests</Header></Message>}
        <div style={{overflow:"scroll",justifyContent:"start"}}className="request">
            <Table celled>
                <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Value</Table.HeaderCell>
                        <Table.HeaderCell>Count</Table.HeaderCell>
                        <Table.HeaderCell>Approve</Table.HeaderCell>
                        <Table.HeaderCell>Finalize</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {
                    requests.map((e,index)=>(<Table.Row textAlign="center">
                        <Table.HeaderCell>{index}</Table.HeaderCell>
                        <Table.HeaderCell>{e.description}</Table.HeaderCell>
                        <Table.HeaderCell>{e.value}</Table.HeaderCell>
                        <Table.HeaderCell>{e.approvalCount}/{ac}</Table.HeaderCell>
                        <Table.HeaderCell><Button disabled={e.complete?true:false} loading={er.loading?true:false} onClick={()=>approve(index)} primary style={{margin:"10px 0px"}} >Approve</Button></Table.HeaderCell>
                        <Table.HeaderCell><Button disabled={e.complete?true:false} loading={er.loading1?true:false} style={{margin:"10px 0px"}} onClick={()=>finalize(index)} secondary>Finalize</Button></Table.HeaderCell>
                        </Table.Row>
                        ))
                }

            </Table>
        </div>
        </>
    )
}

export default Campaignrequest
