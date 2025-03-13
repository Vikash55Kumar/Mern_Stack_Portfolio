import React, { useState } from "react";
import "./AdminPanel.css"
import { Typography, Button } from "@mui/material";;
import { AiOutlineProject } from "react-icons/ai";
import {MdTimeline} from "react-icons/md"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../action/user";
import { useEffect } from "react";
import { toast } from "react-toastify";

const  AdminPanel = () => {

    const dispatch = useDispatch();
    const {message:loginMessage} = useSelector(state=>state.login);
    const {message, error, loading} = useSelector(state=>state.update);

    const [name, setName] =useState("");
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [about, setAbout] = useState({
        title: "",
        description: "",
      });

    const [skills, setSkills]=useState("")

    const handleAboutImage = (e, val) => {
        const file=e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if(Reader.readyState===2) {
                if(val==1) {
                    setAbout({...about, image1 : Reader.result})
                }
                if(val==2) {
                    setAbout({...about, image2 : Reader.result})
                }
                if(val==3) {
                    setAbout({...about, image3 : Reader.result})
                }
            }
        }
    }

      const handleImage=(e, val) => {
        const file=e.target.files[0];
        const Reader =new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload =() => {
            if (Reader.readyState === 2) {
                if(val === 1) {
                    setSkills({...skills, image1 : Reader.result});
                }
                if(val === 2) {
                    setSkills({...skills, image2 : Reader.result});
                }
                if(val === 3) {
                    setSkills({...skills, image3 : Reader.result});
                }
                if(val === 4) {
                    setSkills({...skills, image4 : Reader.result});
                }
                if(val === 5) {
                    setSkills({...skills, image5 : Reader.result});
                }
                if(val === 6) {
                    setSkills({...skills, image6 : Reader.result});
                }
            }
        }
      }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser(name, email, password, skills, about, ));
    }
    const logoutHandler = () => {
        dispatch(logout());
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
        if(loginMessage){
            toast.success(loginMessage);
            dispatch({type:"CLEAR_MESSAGE"});
        }
    }, [error, message, dispatch, loginMessage]);

    return <div className="adminpanel">
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
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="adminPanelInput"
                />    
                <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="adminPanelInput"
                />    
                <input 
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="adminPanelInput"
                />    

                <div className="adminSkill">
                    <fieldset>
                        <legend>Skills</legend>
                        <div>
                            <Typography>SKILL 1</Typography>
                            <input 
                                type="file"
                                onChange={(e) => handleImage(e, 1)}
                                accept="image/*"
                                className="adminFileUpload"
                            /> 
                        </div>
                        <div>
                            <Typography>SKILL 2</Typography>
                            <input 
                                type="file"
                                onChange={(e) => handleImage(e, 2)}
                                accept="image/*"
                                className="adminFileUpload"
                            /> 
                        </div>
                        <div>
                            <Typography>SKILL 3</Typography>
                            <input 
                                type="file"
                                onChange={(e) => handleImage(e, 3)}
                                accept="image/*"
                                className="adminFileUpload"
                            /> 
                        </div>
                        <div>
                            <Typography>SKILL 4</Typography>
                            <input 
                                type="file"
                                onChange={(e) => handleImage(e, 4)}
                                accept="image/*"
                                className="adminFileUpload"
                            /> 
                        </div>
                        <div>
                            <Typography>SKILL 5</Typography>
                            <input 
                                type="file"
                                onChange={(e) => handleImage(e, 5)}
                                accept="image/*"
                                className="adminFileUpload"
                            /> 
                        </div>
                        <div>
                            <Typography>SKILL 6</Typography>
                            <input 
                                type="file"
                                onChange={(e) => handleImage(e, 6)}
                                accept="image/*"
                                className="adminFileUpload"
                            /> 
                        </div>
                    </fieldset>
                </div>

                <div className="adminAbout">
                    <fieldset>
                        <legend>About</legend>
                        <input 
                            type="text"
                            placeholder="title"
                            value={about.title}
                            onChange={(e) => setAbout({...about, title: e.target.value})}
                            className="adminPanelInput"
                        /> 
                        
                        <input 
                            type="text"
                            placeholder="description"
                            value={about.description}
                            onChange={(e) => setAbout({...about, description: e.target.value})}
                            className="adminPanelInput"
                        /> 
                        <div>
                            <Typography>Image 1</Typography>
                            <input 
                                type="file"
                                placeholder="Choose Image"
                                onChange={(e)=> handleAboutImage(e,1)}
                                className="adminFileUpload"
                                accept="image/*"
                            /> 
                        </div>
                        <div>
                            <Typography>Image 2</Typography>
                            <input 
                                type="file"
                                placeholder="Choose Image"
                                onChange={(e)=> handleAboutImage(e,2)}
                                className="adminFileUpload"
                                accept="image/*"
                            /> 
                        </div>
                        <div>
                            <Typography>Image 3</Typography>
                            <input 
                                type="file"
                                placeholder="Choose Image"
                                onChange={(e)=> handleAboutImage(e,3)}
                                className="adminFileUpload"
                                accept="image/*"
                            /> 
                        </div>
                    </fieldset>
                </div>
                <Link to="/admin/intro">
                    INTRO <MdTimeline/>
                </Link>
                <Link to="/admin/timeline">
                    TIMELINE <MdTimeline/>
                </Link>
                <Link to="/admin/project">
                    PROJECTS <AiOutlineProject/>
                </Link>
                <Link to="/admin/achievements">
                    ACHIEVEMENTS <AiOutlineProject/>
                </Link>
                <Link to="/admin/passionate">
                    PASSIONATE <AiOutlineProject/>
                </Link>
                <Button type='submit' variant='contained' disabled={loading} >
                            Update
                </Button>
            </form> 
            <div className="but">
                <Button variant="contained" color="error"
                    onClick={logoutHandler}>
                    LOGOUT
                </Button>
            </div>
        </div>
    </div>
}

export default AdminPanel;