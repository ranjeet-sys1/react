import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            stdId:this.props.match.params.stdId,
            stdName:'',
            stdCourse:'',
            stdFee:''


        }
        this.changeStudentNameHandler=this.changeStudentNameHandler.bind(this);
        this.changeStudentCourseHandler=this.changeStudentCourseHandler.bind(this);
        this.changeStudentFeeHandler=this.changeStudentFeeHandler.bind(this);
        this.updateStudent=this.updateStudent.bind(this);
    }
    componentDidMount(){
        EmployeeService.getStudentById(this.state.stdId).then((resp)=>{
            let student=resp.data;
            this.setState({stdName:student.stdName,
                        stdCourse:student.stdCourse,
                        stdFee:student.stdFee
                    });

        });
    }
    updateStudent=(e)=>{
        e.preventDefault();
        let student={stdName:this.state.stdName,
                    stdCourse:this.state.stdCourse,
                    stdFee:this.state.stdFee};
        console.log('student=>'+JSON.stringify(student));
        
        

    };
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
                            <h3 className="text-center">UPDATE STUDENT</h3>
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
                                    <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
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
