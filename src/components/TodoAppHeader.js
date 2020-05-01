import React from 'react';
import TodoAppTitle from "./TodoAppTitle";
import TodoAppAdd from "./TodoAppAdd";
import { Container } from 'reactstrap';
import { Jumbotron } from 'reactstrap';


const TodoAppHeader = (props) => {
    return (
        <Container style={{ textAlign:"center"}} > 

            <TodoAppTitle />
            <TodoAppAdd />

        </Container>
    );
};

export default TodoAppHeader;