import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Project = ({ projects, setProjects }) => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
        .then(res => setProjects(res.data)) //Why res.data?
        .catch(console.error)
      }, []);

    if(!projects){
        return <h5>Loading...</h5>
    }

    return (
        <>
            <div>
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
                        </Card>
                    </Card.Body>
                </Container>
            </Jumbotron>
            </div>
        </>
    );
};

export default Project;