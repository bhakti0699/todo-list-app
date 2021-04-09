import React, { Component } from 'react';
import {
  Container, Col, Form,
  InputGroup, Input,
  InputGroupAddon,Button
} from 'reactstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItems from './TodoItems';

class FormInput extends Component {

    constructor(props){
      super(props);
      this.state = {
        todos:[],
        currentItem:{
          id:'',
          taskName:'',
          completeStatus:''
        }
      }
      this.addItem = this.addItem.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.taskName !==""){
        const items = [...this.state.todos, newItem];
      this.setState({
        todos: items,
        currentItem:{
          taskName:'',
          id:'',
          completeStatus:''
        }
      })
      }
    }
    handleInput(e){
      this.setState({
        currentItem:{
          taskName: e.target.value,
          id: Date.now(),
          completeStatus:'false'
        }
      })
    }
    deleteItem(key){
      const filteredItems= this.state.todos.filter(item =>
        item.id!==key);
      this.setState({
        todos: filteredItems
      })
  
    }
    setUpdate(text,key){
      console.log("items:"+this.state.todos);
      const items = this.state.todos;
      items.map(item=>{      
        if(item.id===key){
          console.log(item.id +"    "+key)
          item.taskName= text;
        }
      })
      this.setState({
        todos: items
      })
      
     
    }
  render() {
    return (
      <Container className="App">
        <Form className="form" onSubmit={this.addItem}>
          <Col sm="12" className="col-md-6 offset-md-3">
            <InputGroup>
              <Input
                type="text"
                name="task"
                id="task"
                className="task"
                placeholder="Enter Your task:"
                value={this.state.currentItem.taskName}
                onChange={this.handleInput}
              />
              <InputGroupAddon addonType="prepend">
              <Button color="primary" type="submit">+</Button>
              </InputGroupAddon>
            </InputGroup>
            <span className="clear p-2">Clear ToDo List</span>
          </Col>
        </Form>
        <TodoItems 
                  enteries={this.state.todos}
                  delete={this.deleteItem}
                  update={this.setUpdate}/>
      </Container>
    );
  }
}

export default FormInput