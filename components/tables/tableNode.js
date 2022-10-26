import React ,{ useEffect, useState } from 'react';

const example = [
    { id: 1, name: 'PSU1', detail: 'information1', picture: 'pathImage1' },
    { id: 2, name: 'PSU2', detail: 'information2', picture: 'pathImage2' }
];

const TableNode = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(example);
  }, []);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Detail
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Picture
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
                                {value.picture}
                            </td>
                            <td className="py-4 px-6">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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