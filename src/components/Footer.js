import React from 'react'
import naga from '../assets/18881A05D5.jpeg'
import durga from '../assets/18881A05F4.jpeg'
import mahi from '../assets/18881A05H0.jpeg'
import { Button, Grid, GridColumn, GridRow, Header, Icon, Modal,Image } from 'semantic-ui-react'

import '../css/footer.css'

function Footer() {
    const [open, setOpen] = React.useState(false)
    return (
        <>
        <div className="footer">
            <Grid className="gridfooter">
            <GridRow style={{marginTop:"1%"}}>
                <GridColumn><Header  className="footerlinks" as="h3" textAlign="center">Contact</Header>
                <GridRow style={{marginTop:"10px"}}>
                <GridColumn>
                <Header  className="footerlinks" as="h5" textAlign="center">(+91)9502542045<br/>nagadeep.chandragiri@gmail.com</Header>
                </GridColumn>
                </GridRow>
                </GridColumn>
                <GridColumn><Header  as="h3" className="footerlinks" textAlign="center">About</Header>
                <GridRow style={{marginTop:"10px"}}>
                <GridColumn style={{display:"flex",justifyContent:"space-between",width:"150px"}}>
                    <Icon className="i"  size="big" name='instagram' />
                    <Icon className="i"  size="big" name='linkedin' />
                    <Icon className="i"  size="big" name='twitter' />
                    <Icon className="i"  size="big" name='facebook' />
                </GridColumn>
                </GridRow>
                </GridColumn>
                <GridColumn><Header  as="h3" className="footerlinks" textAlign="center">
                <Modal style={{width:"70%"}}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button primary style={{width:"180px"}}>Team</Button>}
                >
                <Modal.Header>Team</Modal.Header>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
         <Modal.Content  image>
           <Image size="medium" src={naga} wrapped />
         </Modal.Content>
         <Modal.Content image>
           <Image size='medium' src={durga} wrapped />
         </Modal.Content>
         <Modal.Content image>
           <Image size="medium" src={mahi} wrapped />
         </Modal.Content>
         </div>
         <Modal.Actions>
           <Button onClick={() => setOpen(false)}>Cancel</Button>
           <Button onClick={() => setOpen(false)} positive>
             Ok
           </Button>
         </Modal.Actions>
         </Modal>
                </Header></GridColumn>
            </GridRow>
           
            <GridRow className="gridsocial">
            
            </GridRow>
            </Grid>
            <div style={{height:"5vh",backgroundColor:"#333",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Header as="h3" style={{color:"#f4f4f4",letterSpacing:"1px"}}>togEther &copy; 2021</Header>
            </div>
        </div>

        
         
       
       </>
    )
}

export default Footer
