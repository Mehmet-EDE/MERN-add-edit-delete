import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../GlobalCss/style.css'
import { Link } from 'react-router-dom'
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box'

const PersonValues = (props) => (
                <Card className="rooti">
                    <CardHeader
                        title={props.person.name}
                        subheader={props.person.hiringdate}
                        className="HeaderText">
                    </CardHeader>
                    <CardMedia component="img" src={props.person.photo} />
                    <CardContent>
                        <Typography variant="body2" className="TextLabel" component="p" >SurName : {props.person.surname}</Typography >
                        <Typography variant="body2" className="TextLabel" component="p" >E-mail :{props.person.email}</Typography >
                        <Link to={'/edit/' + props.person._id}><MdModeEdit /></Link> | <a href="#" onClick={() => { props.deletePerson(props.person._id) }}><MdDeleteForever /></a>
                    </CardContent>
                </Card>
)
export default class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = { persons: "" }
        this.deletePerson = this.deletePerson.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:5858/person/')
            .then(res => {
                this.setState({ persons: res.data })
                console.log(res.data)
            })
            .catch(err => { console.log(err) })
    }
    deletePerson(id) {
        axios.delete('http://localhost5858/person/delete/' + id)
            .then(res => { console.log(res.data) })
        this.setState({
            persons: this.state.persons.filter(per => per._id !== id)
        })
    }
    personList() {
        if (this.state.persons) {
            return this.state.persons.map(pr => {
                return <PersonValues person={pr} deletePerson={this.deletePerson} key={pr._id} />

            })
        }
    }
    render() {
        return (
            <Box>
                {this.personList()}
            </Box>
        )
    }
}