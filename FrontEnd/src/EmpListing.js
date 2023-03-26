import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);




    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8080/delete/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }



    useEffect(() => {
        fetch("http://localhost:8080/getAll").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
return (
    <div className="container">
        <div className="card">
            <div className="card-title">
                <h2>Server Objects</h2>
            </div>
            <div className="card-body">
                <div className="divbtn">
                    <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                </div>

            

                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Language</td>
                            <td>Framework</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>

                        {empdata
                            &&

                            empdata.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.language}</td>
                                    <td>{item.framework}</td>
                                    <td>
                                        <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    </div>
);
}

export default EmpListing;