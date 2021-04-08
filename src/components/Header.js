import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import '../App.css';

class Header extends Component {
  render()
  {
    return(
      <Row className="p-5">
        <Col sm="12" className="text-center">
          <h1>To do List</h1>
        </Col>
      </Row>
    );
  }
}

export default Header;
