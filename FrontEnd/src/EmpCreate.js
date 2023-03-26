import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [framework, setFramework] = useState('');

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const payload = { name, language, framework };


        fetch("http://localhost:8080/create", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Server Object Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">



                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Language</label>
                                            <input value={language} onChange={e => setLanguage(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Framework</label>
                                            <input value={framework} onChange={e => setFramework(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;