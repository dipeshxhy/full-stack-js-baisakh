import { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      name,
      image,
      description,
    };
    addProduct(product);
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center shadow-md bg-stone-800 text-white p-4 rounded-md gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            className="input input-bordered"
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-accent">Submit</button>
      </form>
    </div>
  );
};
export default AddProduct;
