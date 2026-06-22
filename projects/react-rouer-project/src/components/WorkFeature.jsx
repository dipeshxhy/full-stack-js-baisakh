const WorkFeature = ({ img, title, desc }) => {
  return (
    <div>
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img src={img} alt={title} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default WorkFeature;
