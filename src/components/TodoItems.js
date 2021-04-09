import React,{Component} from 'react';
import {
    Container, Col, Row
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TrashFill , PencilSquare, CheckCircleFill, Trash} from 'react-bootstrap-icons';
import FlipMove from "react-flip-move";
class TodoItems extends Component
{
    /* constructor(props)
    {
        super(props)
        this.createTask=this.createTask.bind(this);
    }
    deleteTask(id) 
    {
        this.props.delete(id);
    }
    editTask(id)
    {
        var newList=[...this.props.enteries];
        newList.forEach((item, index) => {

            if(item.id===id)
            {
                item.taskName="task4"
                console.log(item.taskName);
            }
        });
    }
    checkTask(id)
    {
        this.props.check(id);
    }
    createTask(item)
    {
        return (<li id={item.id} key={item.id} className="p-2 m-2">
            {item.taskName}
            <button type="button" className="float-right text-danger" onClick={this.deleteTask.bind(this,item.id)}><TrashFill size="1rem"/></button>
            <button type="button" className="float-right text-primary" onClick={this.editTask.bind(this,item.id)}><PencilSquare size="1rem"/></button>
            <button type="button" className="float-right text-success" onClick={this.checkTask.bind(this,item.id)}><CheckCircleFill size="1rem"/></button>
        </li>);
    } */
    render()
    {
        const items = this.props.enteries;
        const listItems = items.map(item =>
        {
            return <div className="list p-2 m-2" key={item.id}>
                 <input type="text" id={item.id} value={item.taskName} onChange={(e)=>{
                this.props.update(e.target.value,item.id)}}/>
            <span>
       
        <Trash className="text-danger float-right " onClick={() => {
            this.props.delete(item.id)
        }}/>
        </span>
     
    </div>})
        return(
            <Container>
                <Row className="justify-content-center">
                    <Col sm="12" className="col-md-5">
                        <div className="list_main">
                            <FlipMove duration={250} easing="ease-out">
                                {listItems}
                            </FlipMove>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default TodoItems;