import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:String,

    email: {
        type:String,
        unique:true,
        required:[true, "Please enter email"],
    },
    password : {
        type: String,
        required:[true, "Please enter password"],
        select:false,
    },
    intro : {
        name : String,
        description : String,
        subDescription : String,
        url : String,
        image : {
            public_id : String,
            url : String,
        }
    },
    timeline: [
        {
            title:String,
            description:String,
            date:Date,
            image : {
                public_id : String,
                url : String,
            }
        }
    ],
    skills: {
        image1: {
            public_id : String,
            url: String,
        },
        image2: {
            public_id : String,
            url: String,
        },
        image3: {
            public_id : String,
            url: String,
        },
        image4: {
            public_id : String,
            url: String,
        },
        image5: {
            public_id : String,
            url: String,
        },
        image6: {
            public_id : String,
            url: String,
        },
    },
    projects: [
        {
          url: String,
          title: String,
          image: {
            public_id: String,
            url: String,
          },
          description: String,
          techStack: String,
        },
      ],
    about: {
        image1: {
            public_id:String,
            url:String,
        },
        image2: {
            public_id:String,
            url:String,
        },
        image3: {
            public_id:String,
            url:String,
        },
        title:String,
        description:String
    },
    achievements : [
        {
            url: String,
            title: String,
            image: {
                public_id: String,
                url: String,
            },
        }
    ],
    passionate : [
        {
            title: String,
            description:String,
            image: {
                public_id: String,
                url: String,
            },
        }
    ],
});
export const User = mongoose.model("User", userSchema);









