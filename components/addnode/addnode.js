import React ,{ useEffect, useState } from 'react';
import { FcMindMap } from 'react-icons/fc';



const AddNode = () => {
    return(
        <form>
        <div className=' w-full justify-center'>
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
              <div className='flex iteams-center'>
              <FcMindMap size="30"/>
                <h1 className='text-5xl ml-5 pt-6'>Add Node</h1>
    
              </div>
                <div className='py-8'>
                <input
     
                    className="form-input rounded-md border-none p-3  w-full"    
                    placeholder= "Name Node"/>
                </div>
                {/* <Button buttonName="Add room"/> */}
                </div>
            
            </div>
            </div>
            </form>
    );
};

export default AddNode