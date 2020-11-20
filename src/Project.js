import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Project = ({ projects, setProjects, match }) => {

    // console.log(projects[0]._id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects/`)
        .then(res => setProjects(res.data)) //Why res.data?
        .catch(console.error)
    }, []);
    
    
    const handlePost = (event) => {
        event.preventDefault()
        const url = 'http://localhost:8000/api/projects'
        const data = 
        axios({
            method: 'POST',
            url, 
            data
        })
    }
    
    const handleDelete = () => {
        axios.delete({
            url: `http://localhost:8000/api/projects/${projects._id}`, 
        })
    }


    if(!projects){
        return <h5>Loading...</h5>
    }

    return (
        <>
            <div>
                {/* <form>
                    <select> 
                        {projects.map((project)=> (
                            <option>
                                {project._id}
                            </option>
                        ))}
                         </select>
                </form> */}
            <Jumbotron>
                <Container>
                    <Card.Body>
                        <Card>
                            <h2>{projects[0].title}</h2>
                            <p>{projects[0].description}</p>
                            <p>{projects[0].tasks}</p>
                            <p>{projects[0].links}</p>
                            <p>{projects[0].dueDate}</p>
                        </Card>
                        <Card>
                            <h2>{projects[1].title}</h2>
                            <p>{projects[1].description}</p>
                            <p>{projects[1].tasks}</p>
                            <p>{projects[1].links}</p>
                            <p>{projects[1].dueDate}</p>
                        </Card>
                        <Card>
                            <h2>{projects[2].title}</h2>
                            <p>{projects[2].description}</p>
                            <p>{projects[2].tasks}</p>
                            <p>{projects[2].links}</p>
                            <p>{projects[2].dueDate}</p>
                            <button onClick={handleDelete}>Delete</button>
                        </Card>
                    </Card.Body>
                </Container>
            </Jumbotron>
            </div>
        </>
    );
};

export default Project;