import api from "../api";
export const getUser = () => async(dispatch) => {
    try {
        dispatch({
            type: "GET_USER_REQUEST",
        });

        const {data} =await api.get("/user");
        // console.log("data ", data)
        dispatch({
            type: "GET_USER_SUCCESS",
            payload:data.user,
        });
    } 
    catch(error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload:error.response.data.message,
        });
    }
}

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST",
        });

        const {data} =await api.post("/login", {
            email,
            password,
        }, 
        // console.log(email, password),
        {
            headers: {
                "Content-Type" :"application/json"
            }
        });
        dispatch({
            type: "LOGIN_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload:error.response.data.message,
        });
    }
}

export const logout = () => async(dispatch) => {
    try {
        dispatch({
            type: "LOGOUT_REQUEST",
        });

        const {data} =await api.get("/logout");
        dispatch({
            type: "LOGOUT_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "LOGOUT_FAILURE",
            payload:error.response.data.message,
        });
    }
}

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LOAD_USER_REQUEST",
      });
  
      const { data } = await api.get("/me");

    //   console.log("daaaaaaaaaa", data)
  
      dispatch({
        type: "LOAD_USER_SUCCESS",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LOAD_USER_FAILURE",
        // payload: error.response.data.message,
      });
    }
  };

  export const UpdateIntro = (formData) => async(dispatch) => {
    try {
        dispatch({
            type: "ADD_INTRO_REQUEST",
        });

        const {data} =await api.post("/admin/intro", formData, {
            headers: {
                "Content-Type" :"multipart/form-data"
            }
        });
        dispatch({
            type: "ADD_INTRO_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "ADD_INTRO_FAILURE",
            payload:error.response.data.message,
        });
    }
}


export const updateUser = (name, email, password, skills, about) => async(dispatch) => {
    try {
        dispatch({
            type: "UPDATE_USER_REQUEST",
        });

        const {data} =await api.put("/admin/userUpdate", {
            name,
            email,
            password,
            skills, 
            about,
        }, 
        {
            headers: {
                "Content-Type" :"application/json"
            }
        });
        dispatch({
            type: "UPDATE_USER_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "UPDATE_USER_FAILURE",
            payload:error.response.data.message,
        });
    }
}

export const addTimeline = (formData) => async(dispatch) => {
    try {
        dispatch({
            type: "ADD_TIMELINE_REQUEST",
        });

        const {data} =await api.post("/admin/timeline/add", formData, {
            headers: {
                "Content-Type" :"multipart/form-data",
            }
        });
        dispatch({
            type: "ADD_TIMELINE_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "ADD_TIMELINE_FAILURE",
            payload:error.response.data.message,
        });
    }
}

export const deleteTimeline = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "DELETE_TIMELINE_REQUEST",
        });

        const { data } = await api.delete(`/admin/timeline/${id}`);
        
        dispatch({
            type: "DELETE_TIMELINE_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "DELETE_TIMELINE_FAILURE",
            payload:error.response.data.message,
        });
    }
}



export const addProject = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_PROJECT_REQUEST",
    });

    const { data } = await api.post("/admin/project/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: "ADD_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_PROJECT_FAILURE",
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const deleteProject = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "DELETE_PROJECT_REQUEST",
        });

        const {data} =await api.delete(`/admin/project/${id}`); 
        
        dispatch({
            type: "DELETE_PROJECT_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "DELETE_PROJECT_FAILURE",
            payload:error.response.data.message,
        });
    }
}

export const addAchievements = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_ACHIEVEMENT_REQUEST",
      });
  
      const { data } = await api.post("/admin/achievement/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      dispatch({
        type: "ADD_ACHIEVENENT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_ACHIEVEMENT_FAILURE",
        payload: error.response?.data?.message || error.message,
      });
    }
  };
  
  export const deleteAchievements = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "DELETE_ACHIEVEMENT_REQUEST",
        });

        const {data} =await api.delete(`/admin/achievement/${id}`); 
        
        dispatch({
            type: "DELETE_ACHIEVEMENT_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "DELETE_ACHIEVEMENT_FAILURE",
            payload:error.response.data.message,
        });
    }
}


export const addPassionate = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PASSIONATE_REQUEST",
      });
  
      const { data } = await api.post("/admin/passionate/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      dispatch({
        type: "ADD_PASSIONATE_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PASSIONATE_FAILURE",
        payload: error.response?.data?.message || error.message,
      });
    }
  };
  
  export const deletePassionate = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "DELETE_PASSIONATE_REQUEST",
        });

        const {data} =await api.delete(`/admin/passionate/${id}`); 
        
        dispatch({
            type: "DELETE_PASSIONATE_SUCCESS",
            payload:data.message,
        });
    } 
    catch(error) {
        dispatch({
            type: "DELETE_PASSIONATE_FAILURE",
            payload:error.response.data.message,
        });
    }
}
