import React, { useState, useEffect } from 'react';


const Project = ({ projects, setProjects }) => {

    useEffect(() => {
        const url = 'http://localhost:8000/api/projects';
        fetch(url)
          .then((res) => res.json())
          .then((json) => setProjects (json))
          .catch(console.error);
      }, []);


    return (
        <div>
           {projects.map((project) => (
              <div key={project._id}>{project.title}</div>
           ))}
        </div>
    );
};

export default Project;