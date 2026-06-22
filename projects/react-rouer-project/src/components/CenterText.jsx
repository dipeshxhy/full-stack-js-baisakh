const CenterText = ({ title, desc }) => {
  return (
    <div className="text-center ">
      <h2 className="md:text-3xl text-xl mb-3">{title}</h2>
      <p className="text-lg  ">{desc}</p>
    </div>
  );
};
export default CenterText;
