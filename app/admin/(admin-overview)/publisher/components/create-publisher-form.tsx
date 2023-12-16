const CreatePublisherForm = () => {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center">
      <div className="w-5/6 flex flex-col  gap-1 ">
        <label htmlFor="name" className="block text-lg text-zinc-950 ml-4">
          Name:
        </label>
        <input
          type="text"
          className="w-3/5 border-none text-center h-8 rounded-xl outline-none"
          placeholder="Enter Published Name"
          id="name"
        />
      </div>
      <div className="w-5/6 flex flex-col justify-center gap-1 ">
        <label htmlFor="email" className="block text-lg text-zinc-950 ml-4">
          Email:
        </label>
        <input
          type="email"
          className="w-3/5 border-none text-center h-8 rounded-xl outline-none"
          placeholder="Enter Published @Email"
          id="email"
        />
      </div>
      <div className="w-5/6 flex flex-col justify-center gap-1 ">
        <label htmlFor="number" className="block text-lg text-zinc-950 ml-4">
          Number:
        </label>
        <input
          type="text"
          className="w-3/5 border-none text-center h-8 rounded-xl outline-none"
          placeholder="Enter Published Number +8801962525093"
          id="number"
        />
      </div>
      <div className="w-5/6 h-20 flex justify-center items-center">
        <button
          className="h-10 w-1/5 bg-slate-600  rounded-2xl text-white"
          type="submit"
        >
          Create Publisher
        </button>
      </div>
    </div>
  );
};

export default CreatePublisherForm;
