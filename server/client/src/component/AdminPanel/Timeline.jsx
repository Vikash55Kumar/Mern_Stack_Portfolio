import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { addTimeline, deleteTimeline, getUser } from '../../action/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import "./Timeline.css";
import "./Project.css"

const Timeline= ()=> {
    
    const dispatch = useDispatch();
    const alert=useAlert();

    const {message, error, loading} = useSelector(state=>state.update);
    const {message:loginMessage} = useSelector(state=>state.login);
    const {user} =useSelector((state)=> state.user);
    
    const [title, setTitle]=useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage]=useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date', date);
        formData.append('image', image); // Ensure this is correct
      
        await dispatch(addTimeline(formData));
        dispatch(getUser());
      };
    
    const deleteHandler = async(id)=> {
        await dispatch(deleteTimeline(id));
        dispatch(getUser());
    }

    const handleTimeImage=(e)=> {
        const file=e.target.files[0];
        setImage(file);
    }

    useEffect(()=> {
        if(error){
            alert.error(error);
            dispatch({type:"CLEAR_ERROR"})
        }
        if(message){
            alert.success(message);
            dispatch({type:"CLEAR_MESSAGE"});
        }
        if(loginMessage) {
            alert.success(loginMessage);
            dispatch({type:"CLEAR_MESSAGE"});
        }
    }, [alert, error, message, dispatch, loginMessage]);


    return (
        <div>
            <div className="adminContainer">
            <Typography className="adminName" variant="h4">
                <p>A</p>
                <p>D</p>
                <p>M</p>
                <p>I</p>
                <p style={{marginRight:"1vmax"}}>N</p>

                <p>P</p>
                <p>A</p>
                <p>N</p>
                <p>E</p>
                <p>L</p>
            </Typography>
       
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="adminPanelInput"
                />    
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="adminPanelInput"
                />    
                <input 
                    type='date'
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="adminPanelInput"
                />   
                <input
                        type="file"
                        onChange={handleTimeImage}
                        className="adminFileUpload"
                        accept="image/*"
                    /> 
                <Link to="/account">
                    BACK <MdKeyboardBackspace/>
                </Link>
                <Button type='submit' variant='contained' disabled={loading}>
                    Add
                </Button>
            </form> 
            <div className="timeline">
                {user && user.timeline && user.timeline.map((item)=> (
                    <div className='youtubeCard' key={item._id}>
                        <Typography varient="h6" style={{fontWeight:"600"}}>{item.title}</Typography>
                        <Typography varient="body1" style={{letterSpacing:"2px"}}>
                            {item.description}
                        </Typography>
                        <Typography varient="body1" style={{fontWeight:"600"}}>
                            {item.date.toString().split("T")[0]}
                        </Typography>
                        <img src={item.image?.url} alt="image"/>
                        <Button
                            style={{
                                margin:"auto",
                                display:"block",
                                color:"red"
                            }}
                            onClick={()=> deleteHandler(item._id)}
                            >
                                <FaTrash/>
                            </Button>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Timeline;













