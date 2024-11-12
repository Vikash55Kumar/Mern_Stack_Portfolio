import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPassionate, deletePassionate, getUser } from "../../action/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { toast } from "react-toastify";

const Passionates=() => {

    const dispatch=useDispatch();
    const {message:loginMessage} = useSelector(state=>state.login);
    const {message, error, loading} = useSelector(state=>state.update);
  
    const { user } = useSelector((state) => state.user);
  
    const [title, setTitle]=useState("");
    const [description, setUrl]=useState("");
    const [image, setImage]=useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image); // Ensure this is correct
      
        await dispatch(addPassionate(formData));
        dispatch(getUser());
      };

    const deleteHandler = async(id)=> {
        await dispatch(deletePassionate(id));
        dispatch(getUser());
    }

    const handleImage=(e)=> {
        const file=e.target.files[0];
        setImage(file);
    }

    useEffect(()=> {
        if(error){
            toast.error(error);
            dispatch({type:"CLEAR_ERROR"})
        }
        if(message){
            toast.success(message);
            dispatch({type:"CLEAR_MESSAGE"});
        }
        if(loginMessage) {
            toast.success(loginMessage);
            dispatch({type:"CLEAR_MESSAGE"});
        }
      }, [error, message, dispatch, loginMessage]);

    return (
        <>
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
                        placeholder="description"
                        value={description}
                        onChange={(e) => setUrl(e.target.value)}
                        className="adminPanelInput"
                    />    
                    <input
                        type="file"
                        onChange={handleImage}
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
                    {user && user.passionate && user.passionate.map((item)=> (
                        <div className='youtubeCard' key={item._id}>
                            <Typography varient="h6" style={{fontWeight:"600"}}>{item.title}</Typography>
                            <Typography varient="body1" style={{letterSpacing:"2px"}}>
                                {item.description}
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
        </>
    )
}

export default Passionates;