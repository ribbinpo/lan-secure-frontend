import React ,{ useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { CiEraser } from 'react-icons/ci';

const example = [
    { id: 1, name: 'PSU005', detail: '1/22 Vichit Mueang Phuket The Base condo', owner: 'Nattapong Bunchokying' },
    { id: 2, name: 'PSU035', detail: '78/83 Vichit Mueang Phuket', owner: 'Teerawut Saesim' }
];

const TableNode = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(example);
  }, []);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className=' text-sm text-gray-900 '>
                    <th scope="col" className="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Detail
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Owner
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {data?.map((value, index) => {
                    return (
                        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {value.name}
                            </th>
                            <td className="py-4 px-6">
                                {value.detail}
                            </td>
                            <td className="py-4 px-6">
                                {value.owner}
                            </td>
                            <td className="py-3 px-7">
                                <div className="flex">
                                    <a href="#" className=""><CiEdit size={20}/></a>
                                    <a href="#" className="pl-2"><CiEraser size={20}/></a>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  );
};

export default TableNode;