import React from 'react'
import { Grid, GridRow, Header,GridColumn ,Step,Icon} from 'semantic-ui-react'
import '../css/home2.css';
import two from '../assets/two.jpg'

function Home2() {
    return (
        <div className="home2">
            <Header data-aos="fade-down" textAlign="center" className="h2" as="h2" >How tog<span>Ether</span> works</Header>
            <hr style={{border:"1px solid #F4F4F4"}}/>
            <Grid className="grid">
                <GridRow className="gridrow">
                <GridColumn data-aos="fade-right" floated="left" width="8">
                    <img src={two} alt="Temp"/>
                </GridColumn>
                <GridColumn className="timeline" data-aos="fade-left" floated="right" width="8">
                    <Step.Group vertical>
                    <Step completed>
                        <Icon name="truck" />
                        <Step.Content>
                            <Step.Description  style={{color:"#184478",fontSize:"1.5em"}}>Create Campaign</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step completed>
                        <Icon name="truck" />
                        <Step.Content>
                            <Step.Description  style={{color:"#184478",fontSize:"1.5em"}}>Create Fund Request</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step completed>
                        <Icon name="truck" />
                        <Step.Content>
                            <Step.Description   style={{color:"#184478",fontSize:"1.5em"}}>Satisfy the rules to finalize request</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step completed>
                        <Icon name="truck" />
                        <Step.Content>
                            <Step.Description  style={{color:"#184478",fontSize:"1.5em"}}>Transfer fund to Manager</Step.Description>
                        </Step.Content>
                    </Step>
                    </Step.Group>
                </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default Home2
