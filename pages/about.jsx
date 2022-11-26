import Title from "../components/title";
import TableNode from "../components/tables/tableNode";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import Image from 'next/image';
import autoprefixer from "autoprefixer";
import Navbar from '../components/layouts/navbar'

const node = () => {
  return (
    
    <div>
      <div className="px-16">
      <div className="flex justify-between mt-16">
        <div>
          <div className="text-2xl font-bold">LAN-Security 
            <div>Monitoring Project</div>
          </div>
          <div>Lorem Ipsum is simply dummy text of the
               printing and typesetting industry. Lorem 
               Ipsum has been the industry's standard dummy 
               text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled 
                it to make a type specimen book. It has 
                survived not only five centuries, but also 
                the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently
                 with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</div>
        </div>
        <div className="flex justify mt-5">
          <div className="w-full">
            <Image
              src="/assets/design.png"
              alt="Picture of the author"
              width="1500"
              height="1000"
            />
          </div>
          </div>
        
      </div>
      <div className="text-xl font-bold mt-16 w-ful grid justify-items-center pt-8">
        <div>Deatil of Graph</div>
        </div>
      <div className="flex justify-between mt-5">
          <div className="w-full">
            <Image
              src="/assets/color_host.png"
              alt="Picture of the author"
              width="1000"
              height="350"
            />
          </div>
          <div className="w-full">
            <Image
              src="/assets/color_arrow.png"
              alt="Picture of the author"
              width="1000"
              height="350"
            />
          </div>
      </div>
      <div className="text-xl font-bold mt-16 w-ful grid justify-items-center">
        <div>Malicious Node </div>
        </div>
        <div className="w-full pb-36">
          <div className="flex justify-center pt-8">
            <Image
              src="/assets/malicious.png"
              alt="Picture of the author"
              width="700"
              height="350"
            />
          </div>
        </div>
        </div>
        <>
     
      <div className="p-10 bg-sky-700" />
      
      <main></main>
    </>
    </div>
  );
};

export default node;
