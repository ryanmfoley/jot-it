import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Task = ({ tasks }) => {

    return (
        <div>
            {tasks.map((task => {
                return (
                    <ul>
						<li>
							{task.description}
						</li>
					</ul>
                )
            }))}
        </div>
    );
};

export default Task;