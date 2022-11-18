import Title from "../components/title";
import TableNode from "../components/tables/tableNode";
import AddNode from "../components/addnode/addnode";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';



const node = () => {
  return (
    
    <div className="px-16 space-y-3 pt-8">
      <Title name="Node">
      
        <button type="button" className=" px-3 py-1 rounded-sm text-sm"><AiOutlineAppstoreAdd size={25}/></button>
      </Title>
      <TableNode />
      <AddNode />
    </div>
  );
};

export default node;

