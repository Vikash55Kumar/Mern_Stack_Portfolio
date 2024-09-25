
const Skills=({skills}) => {
    return (
        <>
        <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                <img src={skills.image1.url}            
                alt='Face1'/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                <img src={skills.image2.url}            
                alt='Face2'/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                <img src={skills.image3.url}
                alt='Face3'/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                <img src={skills.image4.url} 
                alt='Face4'/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                <img src={skills.image5.url}
                alt='Face5'/>
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                <img src={skills.image6.url} 
                alt='Face6'/>
            </div>
        </div>
        <div className="cubeShadow"></div>
        </>
    )
}

export default Skills;