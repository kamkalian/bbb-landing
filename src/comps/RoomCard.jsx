import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GroupIcon from '@mui/icons-material/Group';
import Badge from '@mui/material/Badge';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';


export default class RoomCard extends React.Component{

    render(){
        return (
            <Card className="card">
                <CardContent className="card-body">
                <Typography variant="h5" component="div" className="card-title">
                    {this.props.roomName}
                </Typography>
                <img src={this.props.img} width="200px"></img>
                </CardContent>

                <CardActions className="card-actions">
                    <Grid container alignItems="flex-end">
                        <Grid item sm={3} xs={6} textAlign="left">
                            <Badge badgeContent={this.props.countUser} color="primary">
                                <GroupIcon color="action" sx={{ fontSize: 40, marginLeft:2 }}/>
                            </Badge>
                        </Grid>
                        <Grid item sm={3} xs={6} textAlign="left">
                            {this.props.locked ? (
                                <LockIcon color="action" sx={{ fontSize: 35 }}></LockIcon>
                            ) : ""}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Button 
                                variant="contained" 
                                fullWidth 
                                size="large"
                                href={this.props.href}>Einwählen</Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        )
    }

}
