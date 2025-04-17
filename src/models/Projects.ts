import mongoose , { Schema , Document } from "mongoose";


export interface Project extends Document{
    imageUrl:string;
    name:string;
    description:string;
    GithubLink:string;

}

export const ProjectSchema:Schema<Project> = new Schema(
    {
imageUrl: {
        type:String
},
name:{
    type:String,
},
description:{
    type:String

},

    GithubLink:{
        type:String

    }

}


)


export interface MobileApp extends Document{
    imageUrl:string;
    name:string;
    description:string;
    GithubLink:string;

}
export const MobileAppSchema:Schema<MobileApp> = new Schema(
    {
imageUrl: {
        type:String
},
name:{
    type:String,
},
description:{
    type:String

},

    GithubLink:{
        type:String

    }

}


)

const ProjectModel = (mongoose.model.Project as mongoose.Model<Project>) || mongoose.model<Project>("Project" , ProjectSchema);
export default ProjectModel;