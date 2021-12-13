import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';


export default class LinkCard extends React.Component{

    render(){
        return (
            <Card className="card">
                <CardContent className="card-body">
                    <Typography>
                        {this.props.text}
                    </Typography>
                </CardContent>
                <CardActions className="card-actions">
                    <Button 
                        variant="contained"
                        fullWidth
                        size="large"
                        href={this.props.link}
                        >{this.props.caption}</Button>
                </CardActions>
            </Card>
        )
    }

}
