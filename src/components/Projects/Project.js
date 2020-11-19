import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';

import ProjectContext from './ProjectContext'
import ProjectIdContext from './ProjectIdContext'

const Project = () => {

    const {project, setProject} =useContext(ProjectContext)
    const {projectId, setProjectId} =useContext(ProjectIdContext)

    useEffect(() => {
        const url = `http://localhost:8000/api/projects/${project}`
        axios
        .get(url)
        .then((res)=> setProject(res.data))
        .then(() => console.log(project))
        .catch(console.error)
     
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Project;