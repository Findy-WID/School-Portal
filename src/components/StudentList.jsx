import dummyStudents from "../data/dummyStudents"

export default function StudentList({formData}) {
    const allStudents = [...dummyStudents, formData];


    console.log("Received formData:", formData);

    return(
        <div>
        <h1>Student List</h1>
        <table>
            <thead style={{ width: '100%', border: '1px solid ' }}>
                <tr>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Address</td>
                    <td>Age</td>
                    <td>class</td>
                    
                </tr>
            </thead>
            <tbody>
                {allStudents.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.address}</td>
                        <td>{student.age}</td>
                        <td>{student.class}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}