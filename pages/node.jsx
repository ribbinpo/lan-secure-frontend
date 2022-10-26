import Title from "../components/title";
import TableNode from "../components/tables/tableNode";

const node = () => {
  return (
    <div className="px-16 space-y-3">
      <Title name="Node">
        <button type="button" className="bg-green-400 px-3 py-1 rounded-sm text-sm">Add</button>
      </Title>
      <TableNode />
    </div>
  );
};

export default node;