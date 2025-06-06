import React, { use, useState } from 'react'
import GenderCheckBox from './GenderCheckbox.jsx';
import { Link } from 'react-router-dom';
import useSignup from '../../้hooks/useSignup';

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading,signup} = useSignup();

  const handleCheckbox = (gender) => {
    setInputs({...inputs,gender})
  }



    const handleSubmit = async(e) => {
      e.preventDefault();
      await signup(inputs);
    };


  
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg ' style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
      <h1 className='text-3xl font-semibold text-center text-gray-700'>
        Sign Up
        <span className='text-blue-950'> Chat app</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>FullName</span>
          </label>
          <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' 
            value={inputs.fullName} 
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' 
          value={inputs.username}
          onChange={(e) => setInputs({...inputs, username: e.target.value})} />
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' 
          value={inputs.password}
          onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Confirm Passaword</span>
          </label>
          <input type='password' placeholder='Confirm Passaword' className='w-full input input-bordered h-10' 
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
        </div>

        <GenderCheckBox onCheckboxChange = {handleCheckbox} selectedGender = {inputs.gender}/>

        <Link to={'/login'} className='text-sm  hover:underline hover:text-blue-600 mt-1 inline-block p-1 '  href= '#'>
          Already have an account?
        </Link>

        <div>
          <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Sing up"}
          </button>
        </div>
      </form>
    </div>
    

  </div>
  
};

export default SignUp



// STARTER CODE FOR THIS FILE
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg ' style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
//       <h1 className='text-3xl font-semibold text-center text-gray-700'>
//         Sign Up
//         <span className='text-blue-950'> Chat app</span>
//       </h1>
//       <form>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>FullName</span>
//           </label>
//           <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' />
//         </div>

//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
//         </div>

//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
//         </div>

//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Confirm Passaword</span>
//           </label>
//           <input type='password' placeholder='Confirm Passaword' className='w-full input input-bordered h-10' />
//         </div>

//         <GenderCheckBox />

//         <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-1 inline-block p-1'>
//           Already have an account?
//         </a>

//         <div>
//           <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//         </div>
//       </form>
//     </div>
    

//   </div>
  
// };

// export default SignUp
