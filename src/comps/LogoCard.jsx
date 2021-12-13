import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default class LogoCard extends React.Component{

    render(){
        return (
            <Card className="card">
                <CardContent>
                    <img src={this.props.logo} width="275px" />
                </CardContent>
            </Card>
        )
    }

}
