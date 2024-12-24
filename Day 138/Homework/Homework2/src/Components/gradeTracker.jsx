import { useState } from "react";

const GradeTracker = () => {
    const [students, setStudents] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const student = {
            name: e.target.student.value,
            grade: Number(e.target.grade.value)
        }
        setStudents([...students, student]);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Student" name="student" required/>
                <input type="number"  placeholder="Grade" name="grade" required/>
                <button>Submit</button>
            </form>
            <ul>
                {
                    students.map((student, index) => {
                        return (
                            <li key={index}>{student.name} - {student.grade}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default GradeTracker