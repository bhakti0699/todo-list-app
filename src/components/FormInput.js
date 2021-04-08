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

        this.state={
          todos:[]
        };
    }
    addItem(value)
    {
      var newTask={
        id:Date.now(),
        taskName:value,
        completeStatus:false
      };
      this.setState({todos:newTask,});
      alert(this.state.todos);
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
                onKeyPress={event => { if(event.key === "Enter")
                {
                  event.preventDefault();
                  this.addItem(event.target.value);
                  event.target.value="";
                }}
              }
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