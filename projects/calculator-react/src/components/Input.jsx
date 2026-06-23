const Input = ({ value }) => {
  return (
    <div className="w-full text-white    mb-3">
      <input
        type="text"
        className="text-2xl font-bold bg-slate-800 border-none focus:outline-none w-full text-right p-4 rounded "
        readOnly
        value={value}
      />
    </div>
  );
};
export default Input;
