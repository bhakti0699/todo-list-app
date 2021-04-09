import React,{Component} from 'react';
import {
    Container, Col, Row
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TrashFill , PencilSquare, CheckCircleFill, Trash} from 'react-bootstrap-icons';
import FlipMove from "react-flip-move";
class TodoItems extends Component
{
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