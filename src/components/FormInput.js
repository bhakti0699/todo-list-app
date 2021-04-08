import React, { Component } from 'react';
import {
  Container, Col, Form,
  InputGroup, Input,
  InputGroupAddon,Button
} from 'reactstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormInput extends Component {

    constructor(props)
    {
        super(props);
        const ischecked=localStorage.getItem("todolist");
        if(ischecked === null)
        {
            this.todo = []
        }
        else
        {
            this.todo=JSON.parse(ischecked);
        }
        this.state={this:this.todo};
    }
    handleKeyPress(e)
    {
        if(e.key === "Enter")
        {
          e.preventDefault();
          this.todo.push({"task_name":document.getElementById("task").value,"completeStatus":false});
          localStorage.setItem("todolist",JSON.stringify(this.todo));
          document.getElementById("task").value="";
          alert(this.todo);
          alert(this.state);
        }
    }
  render() {
    return (
      <Container className="App">
        <Form className="form">
          <Col sm="12" className="col-md-6 offset-md-3">
            <InputGroup>
              <Input
                type="text"
                name="task"
                id="task"
                className="task"
                placeholder="Enter Your task:"
                onKeyDown={this.handleKeyPress}
              />
              <InputGroupAddon addonType="prepend">
              <Button color="primary">+</Button>
              </InputGroupAddon>
            </InputGroup>
            <span className="clear p-2">Clear ToDo List</span>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default FormInput