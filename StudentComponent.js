import React, { useState } from 'react';

const classes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const divisions = ['A', 'B', 'C'];

const StudentForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [classValue, setClassValue] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('');

  const handleNameChange = (event) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(event.target.value)) {
      setName(event.target.value);
    }
  };

  const handleClassChange = (event) => {
    setClassValue(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      dob,
      classValue,
      division,
      gender,
    });
  };
 

  return (
    
   

<div>
    <div className="container">
        <div className="row">
            <h2 className="text-center">STUDENT DETAILS</h2>
            <div className="card col-md-6 offset-md-3">
                <div className="card-body">
                   <form onSubmit={handleSubmit}>
                     <div >
                      <label>Name:</label>
                      <input
                      className="form-control"
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required/>
                     </div>
                     <div >
                       <label >Date of Birth:</label>
                          <input
                           className="form-control"
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(event) => setDob(event.target.value)}
                            required
                         />
                        </div>
                        <div >
                         <label>Class:</label>
                          <select id="class" className="form-control" value={classValue} onChange={handleClassChange} required>
                        <option value="">Select Class</option>
                        {classes.map((className) => (
                         <option key={className} value={className}>
                        {className}
                         </option>
                     ))}
                    </select>
                    </div>
                    <div>
                      <label>Division:</label>
                        <select id="division" className="form-control" value={division} onChange={handleDivisionChange} required>
                         <option value="">Select Division</option>
                          {divisions.map((divisionName) => (
                          <option key={divisionName} value={divisionName}>
                          {divisionName}
                          </option>
                         ))}
                        </select>
                    </div>
                    <div >
                      <label>Gender:</label>
                       <div className="form-control">
                        <label >
                         <input
                         
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          checked={gender === 'male'}
                          onChange={handleGenderChange}
                          required
                        />
                         Male
                         </label>
                         <br>
                         </br>
                        <label >
                           <input
                        
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}
                            />
                            Female
                        </label>
                    </div>
                </div>
                <br></br>
                
            <button className="btn-btn-success" >Submit</button>
           
           
        </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default StudentForm;


  