import React from 'react'
import { Grid, GridColumn, GridRow, Header, Icon } from 'semantic-ui-react'
import '../css/footer.css'

function Footer() {
    return (
        <div className="footer">
            <Grid className="gridfooter">
            <GridRow>
                <GridColumn><Header  className="footerlinks" as="h3" textAlign="center">Contact</Header>
                <GridRow style={{marginTop:"10px"}}>
                <GridColumn>
                <Header  className="footerlinks" as="h5" textAlign="center">(+91)9502542045<br/>nagadeep.chandragiri@gmail.com</Header>
                </GridColumn>
                </GridRow>

                <GridRow style={{marginTop:"10px"}}>
                <GridColumn style={{display:"flex",justifyContent:"space-between",width:"150px"}}>
                    <Icon className="i"  size="big" name='instagram' />
                    <Icon className="i"  size="big" name='linkedin' />
                    <Icon className="i"  size="big" name='twitter' />
                    <Icon className="i"  size="big" name='facebook' />
                </GridColumn>
                </GridRow>
                </GridColumn>
                <GridColumn><Header  as="h3" className="footerlinks" textAlign="center">About</Header></GridColumn>
                <GridColumn><Header  as="h3" className="footerlinks" textAlign="center">Team</Header></GridColumn>
            </GridRow>
           
            <GridRow className="gridsocial">
            
            </GridRow>
            </Grid>
            <div style={{height:"5vh",backgroundColor:"grey",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Header as="h3" style={{color:"#f4f4f4",letterSpacing:"1px"}}>togEther &copy; 2021</Header>
            </div>
        </div>
    )
}

export default Footer
