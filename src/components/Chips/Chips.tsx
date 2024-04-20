interface ChipsProps {
  name: string;
}

const Chips: React.FC<ChipsProps> = ({ name }) => {
  return (
    <div className="relative grid items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase ">
      {name}
    </div>
  );
};

export default Chips;