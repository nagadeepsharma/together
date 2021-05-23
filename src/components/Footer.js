import React from 'react'
import { Grid, GridColumn, GridRow, Header, Icon } from 'semantic-ui-react'
import '../css/footer.css'

function Footer() {
    return (
        <div className="footer">
            <Grid className="gridfooter">
            <GridRow>
                <GridColumn><Header  className="footerlinks" as="h3" textAlign="center">Contact</Header></GridColumn>
                <GridColumn><Header  as="h3" className="footerlinks" textAlign="center">About</Header></GridColumn>
                <GridColumn><Header  as="h3" className="footerlinks" textAlign="center">Team</Header></GridColumn>
            </GridRow>
            <GridRow className="gridsocial">
            <GridColumn><Header  className="footerlinks" as="h3" textAlign="center"><Icon color="grey" name='instagram' /></Header></GridColumn>
            <GridColumn><Header  className="footerlinks" as="h3" textAlign="center"><Icon color="grey" name='linkedin' /></Header></GridColumn>
            <GridColumn><Header  className="footerlinks" as="h3" textAlign="center"><Icon color="grey" name='twitter' /></Header></GridColumn>
            <GridColumn><Header  className="footerlinks" as="h3" textAlign="center"><Icon color="grey" name='facebook' /></Header></GridColumn>
            </GridRow>
            </Grid>
        </div>
    )
}

export default Footer
