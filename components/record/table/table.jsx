import { useEffect, useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { BsCloudDownload } from 'react-icons/bs';
import axios from "axios";
import Image from 'next/image';

const example = [
  { id: 1, node: 'PSU005', datetime: '01112022', connectionGraph: '01112022.png', url: '1' },
  { id: 2, node: 'PSU035', datetime: '02112022', connectionGraph: '02112022.png', url: '2' }
];

const NodeTable = ({ config, nodeId }) => {
  const [data, setData] = useState([]);
  const [dataDetail, setDataDetails] = useState({});
  useEffect(() => {
    // let url = '';
    const fetch = async () => {
      try {
        // const res = await axios.get('http://localhost:8000/node/getAll');
        const res = await axios.get('http://137.184.74.103/node/getAll');
        const nodeList = res.data.filter((item) => item.idnode === nodeId)[0];
        console.log(nodeList);
        setDataDetails(nodeList);
        switch (config) {
          case 'image':
            setData(nodeList.images);
            console.log('image');
            break;
          case 'dot':
            setData(nodeList.dots);
            console.log('dot');
            break;
          case 'pcap':
            setData(nodeList.pcaps);
            console.log('pcap');
            break;
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    fetch();
    // axios.get => set name, fetch by id node
    setData(example);
  }, [nodeId, config]);
  
  return (
    <>
      <div className="font-bold">
        {`All Records`}
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=' text-sm text-gray-900 '>
              <th scope="col" className="py-3 px-6">
                Node
              </th>
              <th scope="col" className="py-3 px-6">
                Date Time
              </th>
              <th scope="col" className="py-3 px-6">
                File
              </th>
              <th scope="col" className="py-3 px-6">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              return (
                <tr key={key} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {dataDetail.name}
                  </th>
                  <td className="py-4 px-6">
                    {value.toString().substring(7,15)}
                  </td>
                  <td className="py-4 px-6">
                    {config === 'image' ? (
                      <Image
                        src={`http://137.184.74.103/assets/images/${dataDetail.name}/${value.toString()}`}
                        alt="Picture of the author"
                        width="100"
                        height="100"
                      />
                    )
                    : <div>{value.toString()}</div>}
                  </td>
                  <td className="py-3 px-7">
                    {/* Link value.url */}
                      {config === 'image' ? (
                      <button>
                          <a href={`http://137.184.74.103/connected-graph/v1/download/images/${dataDetail.name}/${value.toString()}`}>
                          <BsCloudDownload size={20}/>
                        </a>
                      </button>
                      )
                      : config === 'pcap' ? (
                      <button>
                          <a href={`http://137.184.74.103/connected-graph/v1/download/pcaps/${dataDetail.name}/${value.toString()}`}>
                          <BsCloudDownload size={20}/>
                        </a>
                      </button>
                      )
                      : config === 'dot' ? (
                        <button>
                            <a href={`http://137.184.74.103/connected-graph/v1/download/dots/${dataDetail.name}/${value.toString()}`}>
                            <BsCloudDownload size={20}/>
                          </a>
                        </button>
                      )
                      : <div />
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default NodeTable;
