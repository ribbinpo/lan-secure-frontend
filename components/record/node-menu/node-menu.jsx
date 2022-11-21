import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const NodeMenu = ({ nodes }) => {
  const [seletecdNode, setSeletecdNode] = useState(nodes[0]);
  return (
    <Listbox
      value={seletecdNode}
      onChange={setSeletecdNode}
      className="w-full h-full bg-green-400 rounded-sm border-black border-b-0 ring-black relative z-10"
    >
      <div>
      <Listbox.Button className="flex justify-center items-center w-full h-full">{seletecdNode.name}</Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute">
          {nodes.map((node) => (
            <Listbox.Option
              key={node.id}
              value={node}
              // disabled={node.unavailable}
              className="px-6 py-2 border-2 border-t-0 border-black bg-white cursor-pointer"
            >
              {node.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
      </div>
    </Listbox>
  );
};

export default NodeMenu;