import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.employeeArray.map(employeeArrayi => (
        <Row>
          <Col size="md-3">
             <li key={employeeArrayi} className="list-group-item">
             <img alt="Employee" src={employeeArrayi.picture.large} className="img-fluid" />
             </li>
          </Col>
          <Col size="md-3">
            {" "+employeeArrayi.name.first+" "+employeeArrayi.name.last}
            
          </Col>
          <Col size="md-3">
            {" "+employeeArrayi.phone}
            
          </Col>
          <Col size="md-3">
            {" "+employeeArrayi.email}
            
          </Col>
        </Row>
      ))}
    </ul>
  );
}

export default SearchResults;
