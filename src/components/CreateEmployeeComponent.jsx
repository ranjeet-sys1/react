import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            stdName:'',
            stdCourse:'',
            stdFee:''


        }
        this.changeStudentNameHandler=this.changeStudentNameHandler.bind(this);
        this.changeStudentCourseHandler=this.changeStudentCourseHandler.bind(this);
        this.changeStudentFeeHandler=this.changeStudentFeeHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }
    saveStudent=(e)=>{
        e.preventDefault();
        let student={stdName:this.state.stdName,
                    stdCourse:this.state.stdFee,
                    stdFee:this.state.stdCourse};
        console.log('student=>'+JSON.stringify(student));
        EmployeeService.createStudent(student).then(resp=>{
            this.props.history.push('/getAll')
        });

    }
    changeStudentNameHandler=(event)=>{
        this.setState({stdName:event.target.value});

    }
    changeStudentCourseHandler=(event)=>{
        this.setState({stdCourse:event.target.value});

    }
    changeStudentFeeHandler=(event)=>{
        this.setState({stdFee:event.target.value});

    }
    cancel(){
        this.props.history.push('/getAll');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">ADD STUDENT</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Student Name</label>
                                        <input placeholder="student Name" name="stdName" className="form-control"
                                         value={this.state.stdName} onChange={this.changeStudentNameHandler}/>

                                    </div>

                                    <div className="form-group">
                                        <label>course</label>
                                        <input placeholder="Course Name" name="stdCourse" className="form-control"
                                         value={this.state.stdCourse} onChange={this.changeStudentCourseHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>course Fee</label>
                                        <input placeholder="Course Fee" name="stdFee" className="form-control"
                                         value={this.state.stdFee} onChange={this.changeStudentFeeHandler}/>

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}
