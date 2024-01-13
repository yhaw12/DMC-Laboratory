import { useState } from 'react';

function PersonalInfoForm() {
  const [values, setValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    dob: '',
    agreeContact: false,
    agreeMarketing: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setValues({ ...values, [name]: checked });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission...
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
      </div>
      {/* Repeat for other input fields... */}
      <div className="flex items-center justify-between">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default PersonalInfoForm;

