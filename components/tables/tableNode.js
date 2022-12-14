import { CiEdit } from 'react-icons/ci';
import { CiEraser } from 'react-icons/ci';
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import EditNode from '../editnode/editnode';
import DelNode from '../delnode/delnode';
import axios from 'axios';

// const example = [
//     { id: 1, name: 'PSU005', detail: '1/22 Vichit Mueang Phuket The Base condo', owner: 'Nattapong Bunchokying' },
//     { id: 2, name: 'PSU035', detail: '78/83 Vichit Mueang Phuket', owner: 'Teerawut Saesim' }
// ];

const TableNode = () => {
  const [data, setData] = useState([]);

  const [isOpen, setIsOpen] = useState(false)
  const [curentEditNode , setCurentEditNode] = useState({});
  const [currentDelNode, setCurentDelNode] = useState({});
  const [isOpenEdit, setIsOpenEdit] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(currentNode) {
        setCurentEditNode(currentNode)
        setIsOpenEdit(true)
    }
    function closeModalEdit() {
        setIsOpenEdit(false)
    }

    const [isOpendel, setIsOpenDel] = useState(false)

    function closeModalDel() {
        setIsOpenDel(false)
    }

    function openModalDel(currentNode) {
        setCurentDelNode(currentNode)
        setIsOpenDel(true)
    }

  
//   useEffect(() => {
//     setData(example);
//   }, []);

  useEffect(() => {
    const getData = async () => {
        await axios.get("http://127.0.0.1:8000/node/getAll", {
        }).then(res => {
            setData(res.data)

        })
    }
    getData()
}, [])

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
            <Transition appear show={isOpenEdit} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalEdit}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                <div className="fixed inset-0 bg-opacity-25" />
                </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel>
                    <div><EditNode onClose={closeModalEdit} currentNode={curentEditNode}/></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
                </Transition>

                <Transition appear show={isOpendel} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalDel}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                <div className="fixed inset-0 bg-opacity-25" />
                </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel>
                    <div><DelNode currentNode={currentDelNode} onClose={closeModalDel} /></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
                </Transition>


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
                                    <a href="#" className="" onClick={() => openModal(value)}><CiEdit size={20}/></a>
                                    <a href="#" className="pl-2" onClick={() => openModalDel(value)}><CiEraser size={20}/></a>
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