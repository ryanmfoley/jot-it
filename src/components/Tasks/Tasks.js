import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Task = ({ tasks }) => {

    return (
        <div>
            {tasks.map((task => {
                return (
                    <p>{task.description}</p>
                )
            }))}
        </div>
    );
};

export default Task;