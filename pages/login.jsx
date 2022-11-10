
import React from 'react';
import { FcMindMap } from 'react-icons/fc';

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
      
      <div className="bg-sky-700">
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
              
              <div className="w-full flex justify-center" >
              <FcMindMap size={70}/>
              
              </div>
              <h1 className='text-2xl font-medium text-primary text-center mb-5'>
                    LAN-SECURE 
                </h1>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Username</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-sky-900 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;