import axios from 'axios';
const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/student/getAll";
const Employee_API_SAVE_URL="http://localhost:8080/api/v1/student/save"
const STUDENT_API_GET_URL="http://localhost:8080/api/v1/student/update"
class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createStudent(student){
        return axios.post(Employee_API_SAVE_URL,student);

    }
    getStudentById(studentId){
        const id=parseInt(studentId);
        return axios.put(STUDENT_API_GET_URL+'/'+id);
    }
}
export default new EmployeeService();