import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(result => {
      this.setState({
        students: result.data
      });
    });
  }

  render() {
    var studentz = this.state.students.map((e, i) => {
    return <Link to={`/student/${e.id}`} key={i}><h3>{e.first_name}  {" "}  {e.last_name}</h3></Link>
  });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentz}
        <Link to="/"><button>Back to Home</button></Link>
      </div>
    )
  }
}