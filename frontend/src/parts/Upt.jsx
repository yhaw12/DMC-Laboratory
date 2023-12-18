import { useState } from 'react';
import divine from '../assets/dgi-clinics.png';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

function Upt() {
  // PATIENT PARTICULARS
  const initialPatientParticulars = {
    NAME: '',
    AGE: '',
    SEX: '',
    DATE: '',
  };

  // Initial state for lab data
  const initialLabData = {
    specificGravity: '',
    blood: '',
    protein: '',
    glucose: '',
    bilirubin: '',
    urobilinogen: '',
    nitrites: '',
    leukocytes: '',
    epithelialCells: '',
    pusCells: '',
    rBCs: '',
  };

  // State for patient particulars and lab data
  const [particulars, setParticulars] = useState(initialPatientParticulars);
  const [forms, setForms] = useState(initialLabData);
  const navigate = useNavigate()
  // Handle changes in patient particulars
  const handlePartChange = (e) => {
    setParticulars({ ...particulars, [e.target.name]: e.target.value.toUpperCase() });
  };

  // Handle changes in lab data
  const handleChange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the data to the server using axios

    const clientData = {
      forms: forms,
      particulars: particulars
      
    }
    axios
      .post('http://localhost:8081/pathology', clientData)
      .then((res) => {
        if (res.status === 200){
          navigate('/dashboard')
          setForms(initialLabData);
          setParticulars(initialPatientParticulars);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  

  return (
    <section className='w-full h-screen p-8 bg-slate-800'>
      <div className='px-10 w-full h-full bg-slate-500 border border-gray-300'>
        <div className='flex items-center justify-between outline mb-8'>
          <img className='w-20' src={divine} alt='Logo' />
          <div className='mr-64 font-bold'>
            <h1 className='text-xl'>MEDICAL LABORATORY REPORT (CHEMICAL PATHOLOGY)</h1>
          </div>
        </div>

        {/* Patient Particulars Form */}
        <form className='grid grid-cols-2 mb-8 px-10 place-items-center' onSubmit={handleSubmit}>
          {Object.keys(particulars).map((key, index) => (
            <div className='w-60' key={`particular-${index}`}>
              <div className='flex justify-between mb-3'>
                <label>{key}</label>
                {key === 'DATE' ? (
                  <input type='date' name={key} value={particulars[key]} onChange={handlePartChange} />
                ) : (
                  <input name={key} value={particulars[key]} onChange={handlePartChange} />
                )}
              </div>
            </div>
          ))}
        </form>

        {/* Lab Data Form */}
        <form onSubmit={handleSubmit} className='w-full h-auto px-20'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='box-border border-2 p-2'>TEST</th>
                <th className='box-border border-2 p-2'>RESULTS</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(forms).map((key, index) => (
                <tr key={`form-${index}`}>
                  <td className='box-border border-2 p-2 px-6 grid place-items-center'>{key.toLocaleUpperCase()}</td>
                  <td className='box-border border-2 p-2'>
                    <input
                      className='outline-none bg-transparent ml-6'
                      name={key}
                      value={forms[key]}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Upt;
