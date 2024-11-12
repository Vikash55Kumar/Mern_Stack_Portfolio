import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, UpdateIntro } from "../../action/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './Project.css';
import { toast } from "react-toastify";

const Intro =() => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [subDescription, setSubDescription] = useState("");

const submitHandler = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('subDescription', subDescription);
  formData.append('url', url);
  formData.append('image', image); // Ensure this is correct

  await dispatch(UpdateIntro(formData));
  dispatch(getUser());
};

  const handleIntroImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

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
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            placeholder="SubDescription"
            value={subDescription}
            onChange={(e) => setSubDescription(e.target.value)}
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
            type="file"
            onChange={handleIntroImage}
            className="adminFileUpload"
            accept="image/*"
          />
          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>
          <Button type="submit" variant="contained" disabled={loading}>
            UPDATE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Intro;