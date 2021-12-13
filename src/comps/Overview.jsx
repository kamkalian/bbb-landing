import * as React from 'react';
import Grid from '@mui/material/Grid';
import RoomCard from './RoomCard';
import LogoCard from './LogoCard';
import LinkCard from './LinkCard';
import awoLogo from './Awo-logo-08.svg';
import img_gs from './geschäftsstelle.jpg';
import img_agger from './agger.png';
import img_sieg from './sieg.png';
import img_reparaturcafe from './reparaturcafe.png';


export default class Overview extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userCounts: []
        }
    }

    fetchUserCounts = () => {
        fetch('/user_counts').then(res => res.json()).then(data => {
            this.setState({
                userCounts: data
            })
        });
    }

    componentDidMount(){
        this.fetchUserCounts();
        const interval = setInterval(() => {
            this.fetchUserCounts();
          }, 10000);
    }

    render(){
        const roomList = [
            { 
                name: "Geschäftsstelle",
                locked: false,
                href: "https://bbb.kurm-server.de/b/aku-9k7-nvb-7er",
                img: img_gs
            },
            { 
                name: "Raum Sieg",
                locked: true,
                href: "https://bbb.kurm-server.de/b/aku-wtw-uhr-zi3",
                img: img_sieg,
            },
            { 
                name: "Raum Agger",
                locked: true,
                href: "https://bbb.kurm-server.de/b/aku-luo-7gb-gjp",
                img: img_agger,
            },
            { 
                name: "Reparaturwerkstatt",
                locked: false,
                href: "https://bbb.kurm-server.de/b/aku-sut-a9b-4ut",
                img: img_reparaturcafe,
            },
          ];
        const rooms = roomList.map((room, index) => {
            var breakpoint = 4;
            if(index===0) breakpoint = 6;

            var userCount = 0;
            
            this.state.userCounts.forEach((r) => {
                if(r[0]===room.name){
                    userCount = r[1]; 
                    return;
                }
            });

            return(
                <Grid item key={index} md={breakpoint} xs={12}>
                    <RoomCard 
                        roomName={room.name}
                        countUser={userCount}
                        locked={room.locked}
                        href={room.href}
                        img={room.img}
                    />
                </Grid>
            )
        });
        return(
            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    <LogoCard 
                        logo={awoLogo}
                    />
                </Grid>
                {rooms}
                <Grid item md={4} xs={12}>
                    <LinkCard 
                    text={"Als Moderator oder Admin kannst du dich hier einloggen."}
                    link="https://bbb.kurm-server.de/b/signin" 
                    caption="Login"
                    />
                </Grid>
            </Grid>
            
        )
    }
}
