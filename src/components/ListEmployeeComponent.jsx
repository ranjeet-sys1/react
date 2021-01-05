import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'


export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            students:[]

        }
        this.addStudent=this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);

    }
    componentDidMount(){
        EmployeeService.getEmployees().then((resp)=>{
            this.setState({
                students:resp.data
            });

        });
    }
    addStudent(){
        this.props.history.push('/save');
    }
    editStudent(stdId){
        this.props.history.push(`/update/${stdId}`);
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>

                </div>
                <table className="table table-striped table bordered">
                    <thead>
                        <tr>
                            <th>Student id</th>
                            <th>Student Name</th>
                            <th>Student Course</th>
                            <th>Student fee</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(
                                student=>
                                <tr key={student.stdId}>
                                 <td>{student.stdId}</td>   
                                <td>{student.stdName}</td>
                                <td>{student.stdCourse}</td>
                                <td>{student.stdFee}</td>
                                <td>
                                <button onClick={()=>this.editStudent(student.stdId)}  className="btn btn-info">Update</button>
                                <button className="btn btn-danger">Delete</button></td>
    
                                </tr>
                            )
                        }
                        

                    </tbody>

                </table>
                
            </React.Fragment>
        )
    }
}
