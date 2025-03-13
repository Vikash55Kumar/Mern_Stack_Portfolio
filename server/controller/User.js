import {User} from "../model/User.js";
import jwt from "jsonwebtoken";   //authentication and and information exchange in web development.
import cloudinary from "cloudinary";
import { uploadOneCloudinary } from "../app.js";

export const login = async(req, res) => {
    try {

        const {email, password} = req.body;

        const user = await User.findOne({email, password});

        if(!user) {
            return res.status(400).json({
                success:false,
                message: "Invalid email and password",
            });
        }
        // JWT_SECRET
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);

        res.status(200)
            .cookie("token", token, {
            expires:new Date(Date.now() + 30*60 * 1000),
            httpOnly:true,
        })
        .json({
            success: true,
            message: "Logged In Successfully",
        });

    }  catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const logout = async(req, res) => {
    try {
        res.status(200)
            .cookie("token", null, {
            expires:new Date(Date.now()),
            httpOnly:true,
        })
        .json({
            success: true,
            message: "Logout In Successfully",
        });
    }  catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const getUser = async(req, res) => {
    
    try {
        const user = await User.findOne({}, "-password -email").lean().exec();  
        res.status(200).json({
            success:true,
            user,
        });
    }
    catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const myProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch(error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

export const intro = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const { name, description, subDescription, url} = req.body;
        const image=req.file;
        if (name) {
            user.intro.name = name;
        };
        if (description) { 
            user.intro.description = description
        };
        if (subDescription) { 
            user.intro.subDescription = subDescription;
        };
        if (url) user.intro.url = url;

        if (image) {
            if (user.intro.image?.public_id) {
                await cloudinary.uploader.destroy(user.intro.image.public_id);
            }
            const introCloud = await cloudinary.uploader.upload(image.path, { folder: "portfolio" });

            user.intro.image = {
                public_id: introCloud.public_id,
                url: introCloud.secure_url,
            };
        }
        await user.save();

        res.status(200).json({
            success: true,
            message: "Intro updated",
        });
    } catch (error) {
        console.error("Error updating intro:", error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const userUpdate = async(req, res) => {
    try {
        const user = await User.findById(req.user._id);

        const {name, email, password, skills, about }=req.body;

        if(name){
            user.name=name;
        }
        if(email){
            user.email=email;
        }
        if(password){
            user.password=password;
        }
        if(skills){
            if(skills.image1) {
                await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
                    folder:"portfolio",
                });

                user.skills.image1={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            };
            if(skills.image2) {
                await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
                    folder:"portfolio",
                });
                user.skills.image2 ={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            };
            if(skills.image3) {
                await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
                    folder:"portfolio",
                });
                user.skills.image3={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            };
            if(skills.image4) {
                await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
                    folder:"portfolio",
                });
                user.skills.image4={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            };
            if(skills.image5) {
                await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
                    folder:"portfolio",
                });
                user.skills.image5={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            };
            if(skills.image6) {
                await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
                    folder:"portfolio",
                });
                user.skills.image6={
                    public_id:myCloud.public_id,
                    url:myCloud.secure_url,
                };
            };
        };
        if(about) {
            if(about.title) {
                user.about.title=about.title;
            }
            if(about.description) {
                user.about.description=about.description;
            }
            if(about.image1) {
                await cloudinary.v2.uploader.destroy(user.about.image1.public_id);
                const abtCloud=await cloudinary.v2.uploader.upload(about.image1, {
                    folder:"portfolio"
                });
                user.about.image1 = {
                    public_id:abtCloud.public_id,
                    url:abtCloud.secure_url,
                };
            };
            if(about.image2) {
                await cloudinary.v2.uploader.destroy(user.about.image2.public_id);
                const abtCloud=await cloudinary.v2.uploader.upload(about.image2, {
                    folder:"portfolio"
                });
                user.about.image2 = {
                    public_id:abtCloud.public_id,
                    url:abtCloud.secure_url,
                }
            }
            if(about.image3) {
                await cloudinary.v2.uploader.destroy(user.about.image3.public_id);
                const abtCloud=await cloudinary.v2.uploader.upload(about.image3, {
                    folder:"portfolio"
                });
                user.about.image3 = {
                    public_id:abtCloud.public_id,
                    url:abtCloud.secure_url,
                }
            }
        }
        await user.save();

        res.status(200). json({
            success:true,
            message:"User updated Successfully",
        });
    }
    catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const addTimeline = async(req, res) => {
    try {
        const {title, description, date} =req.body;

        const image=req.file.path;

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const myCloud = await cloudinary.uploader.upload(image, {
          folder: "portfolio",
        });

        user.timeline.unshift({
            title,
            description,
            date,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
        });
        
        await user.save();

        return res.status(200). json({
            success:true,
            message:"timeline add Successfully",
        });
    }
    catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const addProject = async (req, res) => {
  try {
    const { url, title, description, techStack} = req.body;

    const image=req.file.path;

    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    const myCloud = await cloudinary.uploader.upload(image, {
      folder: "portfolio",
    });

    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Projects",
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

  export const deleteTimeline = async(req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(req.user._id);

        user.timeline=user.timeline.filter((item) => item._id != id);
        
        await user.save();

        return res.status(200). json({
            success:true,
            message:"Deleted from timeline",
        });
    }
    catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const deleteProjects = async(req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(req.user._id);

        const projectToDelete = user.projects.find((item) => item._id == id);

        if (!projectToDelete) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }
        user.projects=user.projects.filter((item) => item._id != id);
        
        await cloudinary.v2.uploader.destroy(projectToDelete.image.public_id);
        
        await user.save();

        return res.status(200). json({
            success:true,
            message:"Deleted from Project",
        });
    }
    catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const addAchievement = async (req, res) => {
    try {
        const { url, title} = req.body;
        console.log(url, title);

        const user = await User.findById(req.user._id);
        
        const image=req.file?.path;
        console.log("User", image);

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "File not uploaded2",
            });
        }
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        // const achiveCloud = await cloudinary.uploader.upload(image, {
        //     folder: "portfolio",
        // });

        const achiveCloud = await uploadOneCloudinary(image)
        console.log("cloudinary", achiveCloud);
        
        if (!achiveCloud) {
            return res.status(404).json({
                success: false,
                message: "Error while uploading image",
            });
        }

        user.achievements.unshift({
            url,
            title,
            image: {
                public_id: achiveCloud.public_id,
                url: achiveCloud.secure_url,
            },
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: "Add Achievements",
        });
    } catch (error) {
        console.error("Error updating intro:", error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteAchievements = async(req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(req.user._id);

        const AchievementToDelete = user.achievements.find((item) => item._id == id);

        if (!AchievementToDelete) {
            return res.status(404).json({
                success: false,
                message: "Achievement not found",
            });
        }

        user.achievements=user.achievements.filter((item) => item._id != id);
        
        await cloudinary.v2.uploader.destroy(AchievementToDelete.image.public_id);
        
        await user.save();

        return res.status(200). json({
            success:true,
            message:"Deleted from timeline",
        });
    }
    catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

export const addPassions = async (req, res) => {
    try {
        const { title, description} = req.body;
        const image=req.file?.path;

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "File not uploaded",
            });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const achiveCloud = await cloudinary.uploader.upload(image, {
            folder: "portfolio",
        });

        user.passionate.unshift({
            title,
            description,
            image: {
                public_id: achiveCloud.public_id,
                url: achiveCloud.secure_url,
            },
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: "Add Passions",
        });
    } catch (error) {
        console.error("Error updating intro:", error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const deletePassions = async(req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(req.user._id);

        const PassionsToDelete = user.passionate.find((item) => item._id == id);

        if (!PassionsToDelete) {
            return res.status(404).json({
                success: false,
                message: "Passions not found",
            });
        }

        user.passionate=user.passionate.filter((item) => item._id != id);
        
        await cloudinary.v2.uploader.destroy(PassionsToDelete.image.public_id);
        
        await user.save();

        return res.status(200). json({
            success:true,
            message:"Deleted from timeline",
        });
    }
    catch(error) {
        return res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}
