import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Bin from '../bin.png'
import ListGroup from 'react-bootstrap/ListGroup';


function Tasks() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <Container>
            
            <h2 className='display-1 text-white text-center bg-dark'>Task to do</h2>
            <Button onClick={()=>navigate('/')} variant="warning">Home</Button>
            <hr/>
            <Container>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter task"
            />
            <Button onClick={handleAddTask}>Add Task</Button>
            <ListGroup>
                {tasks.map((task, index) => (
                     <ListGroup.Item key={index}>
                        {task}
                        <Button  id='delete' variant='primary' onClick={() => handleDeleteTask(index)}><img src={Bin} alt='bin'/></Button>
                        </ListGroup.Item>
                ))}
            </ListGroup>
            </Container>
        </Container>
    );
}

export default Tasks;