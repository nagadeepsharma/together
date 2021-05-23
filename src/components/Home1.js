import React, { useEffect, useState } from 'react'
import one from '../assets/one.jpg' 
import { Button, Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import '../css/home1.css';
import factory from '../ethereum/factory'
function Home1() {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        async function cou(){
            const coun=await factory.methods.getDeployedCampaigns().call()
            setcount(coun.length) 
        }
        cou()




    })
    return (
        <Grid className="grid">
            <GridRow className="gridrow">
                <GridColumn data-aos="fade-right" floated="left" width="6">
                    <Header  className="h2" as="h2">Exploring together with Smart Contract based Dapp. Support future startup's by crowd funding.</Header>
                    <Button primary style={{backgroundColor:"#FF570F"}}>Know More</Button>
                </GridColumn>
                <GridColumn data-aos="fade-left" floated="right" width="10">
                    <img src={one} alt="Temp"/>
                </GridColumn>
            </GridRow>
            <GridRow className="gridrow1" data-aos="fade-down" >
                <div className="track">
                    <Header className="h2" as="h3">{count} Campaigns</Header>
                </div>
                <div className="track">
                    <Header className="h2" as="h3">100 Wei Contribution</Header>
                </div>
            </GridRow>
        </Grid>
    )
}

export default Home1
