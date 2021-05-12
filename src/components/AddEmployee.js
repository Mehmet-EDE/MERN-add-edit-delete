import React, { Component } from 'react'
import axios from 'axios'
import ReactFileReader from 'react-file-reader';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdFileUpload } from 'react-icons/md';
import '../GlobalCss/style.css'
toast.configure();
export default class addEmployee extends Component {
    constructor(props){
        super(props);
        this.onSbumitPerson=this.onSbumitPerson.bind(this);
        this.state={
            name:'',
            surname:'',
            email:'',
            photo:'',
            hiringdate:'',
        }
    }
    onChangeSurname=(e)=>{
        this.setState({
            surname:e.target.value
        })
    }
    onChangeName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    onChangeHiringDate=(e)=>{
        this.setState({
            hiringdate:e.target.value
        })
    }
    onChangeMail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    onSbumitPerson=(e)=>{
        e.preventDefault();
        var person={
            name:this.state.name,
            surname:this.state.surname,
            email:this.state.email,
            hiringdate:this.state.hiringdate,
            photo:this.state.photo,
        }
        console.log(person)
        axios.post('http://localhost:5858/person/add',person)
        .then(()=>{
            toast.success('Employee Successfully Added', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                this.setState({
                    name:'',
                    surname:'',
                    email:'',
                    photo:'',
                    hiringdate:'',
                })
        })
        .catch(err=>{
            toast.error(' Something Went Wrong '+err, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
    handleFiles = files => {
        this.setState({
            photo:files.base64
        })
        debugger
      }
    render() {
        return (
            <Box border={2}
            borderRadius={9}
            borderColor="primary.main"
            bgcolor='background.paper' 
            display="inline-block" 
            
            p={18} 
            m={12.8}
             mx={50}>
            <TextField label="Name :"
                value={this.state.name}
                onChange={this.onChangeName}></TextField>
                <br />
            <TextField label="Surname :"
                value={this.state.surname}
                onChange={this.onChangesurname}></TextField>
                <br />
            <TextField label="E-mail :"
                value={this.state.email}
                onChange={this.onChangeEmail}></TextField>
                <br /><br />
            <ReactFileReader handleFiles={this.handleFiles}
                fileTypes={[".jpeg", ".png", ".jpg"]}
                multipleFiles={false}
                base64={true}
                value={this.state.photo} >
                <Button className='btn'
                variant="outlined"
                color="primary"><MdFileUpload /> Upload</Button>
            </ReactFileReader>
            <br />
            <TextField
                id="date"
                label="Hiring Date"
                type="date"
                value={this.state.hiringdate}
                onChange={this.onChangeHiringdate}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br /> <br />
            <Button variant="contained"
                color="primary"
                onClick={this.onSbumitPerson}>
                    Submit
                </Button>
        </Box>
        )
    }
}
