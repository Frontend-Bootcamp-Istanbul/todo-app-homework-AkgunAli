import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import {deleteTodo} from "../redux/actions";



let TodoAppListItem = ({content, id, completed, toggleTodo,deleteTodo}) => {

    
        


    return (
        <Container style={{ textAlign:"center"}}> 

<div> 

        <div style={{
            textDecoration: completed ? "line-through" : "initial"
        }} onClick={() => toggleTodo(id)}>
            {content}
            


        </div>
        
        <Button color="danger" 
          onClick={() => deleteTodo(id)}

        
        >Tudu Sil! 
        </Button>
        </div>

        </Container>

    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo ,
    deleteTodo:deleteTodo
    
}


export default connect(null, mapDispatchToProps)(TodoAppListItem);