import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getUser } from "../../action/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectCard } from "../Project/Project";
import './Project.css';
import { toast } from "react-toastify";

const Project = () => {
  
  const dispatch = useDispatch();
  const {message:loginMessage} = useSelector(state=>state.login);
  const {message, error, loading} = useSelector(state=>state.update);

  const { user } = useSelector((state) => state.user);


  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('techStack', techStack);
    formData.append('url', url);
    formData.append('image', image); 
  
    await dispatch(addProject(formData));
    dispatch(getUser());
  };
  
  
  

const handleImage = (e, val) => {
  const file = e.target.files[0];
  if(val==1) {
    setImage(file);
  }
};


  useEffect(()=> {
    console.log("Loading state:", loading);
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
    <div className="adminpanel">
      <div className="adminContainer">
        <Typography className="adminName" variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInput"
          />
          <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
            type="text"
            placeholder="Technologies"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="adminPanelInput"
          />
          <input
            type="file"
            onChange={(e) => handleImage(e, 1)}
            className="adminFileUpload"
            accept="image/*"
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>

        <div className="timeline">
          {user &&
            user.projects &&
            user.projects.map((item) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                url={item.url}
                projectImage={item.image?.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;