import React, { useState } from 'react';
import { FcMindMap } from 'react-icons/fc';
import axios from 'axios';


const AddNode = ({ onClose }) => {

    const [name, setName] = useState('');
    const [detail, setDatail] = useState('');
    const [owner, setOwner] = useState('');

    
    const  onSubmit = () => {
        console.log(name);
        console.log(detail);
        console.log(owner);

        const addnode = {
        name: name,
        detail: detail,
        owner: owner
        }
        console.log(addnode);

        axios.post("http://137.184.74.103/node/create",addnode)
    .then(res => {
        console.log(res);
    })
    onClose();
    }
    return(
        <form onSubmit={onSubmit}>
        <div className=' w-full justify-center'>
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-y-5 py-5 rounded-md px-10 bg-sky-100">
                
                <div className=' self-center'>
                <FcMindMap size="30"/></div>
                <div className='w-full grid justify-items-center'>
                <h1 className='text-xl text-sky-700 font-bold'>Add Node</h1>
                </div>
              
                <div className='w-full'>
                <div className='text-sky-700 font-semibold ' >Name</div>
                <input onChange={(e) => setName(e.target.value)}
                    className="form-input rounded-md border-none py-3 px-16"    
                    />
                <div className='pt-4 text-sky-700 font-semibold' >Detail</div>
                <input onChange={(e) => setDatail(e.target.value)}
                    className="form-input rounded-md border-none py-3 px-16"    
                    />
                <div className='pt-4 text-sky-700 font-semibold ' >Owner</div>
                <input onChange={(e) => setOwner(e.target.value)}
                    className="form-input rounded-md border-none py-3 px-16"    
                    />
                </div>
                <div className='flex grid-cols-2 gap-6 place-content-end'>
                <div> 
                    <button  onSubmit={onSubmit} className="rounded-xl bg-sky-700 text-lg text-white px-4">
                        Add
                 </button>
                </div>
                <div>
                    <button type="button" onClick={onClose} className="rounded-xl bg-sky-700 ">
                    <div className="text-lg text-white px-4 ">
                    Cancel
                    </div>
                 </button>
                </div>
                </div>
    
                </div>
            
            </div>
            </div>
            </form>
    );
};

export default AddNode