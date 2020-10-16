import React from 'react';
import UserIcon from "./UserIcon";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default class UserBasicInfo extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Card style={{ display:'flex', justifyContent:'center' ,margin:"1rem"}}>
                    <List >
                        <ListItem style={{ justifyContent:'center','margin-top':'1rem' }} >
                            <UserIcon size="large" fullName={this.props.fullName} imgSrc={this.props.userIcon}/>
                        </ListItem>
                        <ListItem style={{ justifyContent:'center' }}>
                            <Typography variant="h1" component="h1" style={{ justifyContent:'center' }}>{this.props.username}</Typography>
                        </ListItem >
                    </List>
                </Card>
            </React.Fragment>
        )
    }
}

