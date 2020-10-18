import React from 'react';
import UserIcon from "./UserIcon";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import UserIconEditable from "./UserIconEditable";

export default class UserBasicInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgSrc: props.userIcon
        }
    }

    render(){
        const setImgSrc = (src) => {
            this.setState({imgSrc:src});
        }

        return (
            <React.Fragment>
                <Card>
                    <List >
                        <ListItem style={{ justifyContent:'center','margin-top':'1rem' }} >
                            <UserIconEditable size="large" fullName={this.props.fullName} imgSrc={this.state.imgSrc} setImgSrc={setImgSrc}/>
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

