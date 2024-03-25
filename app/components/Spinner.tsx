const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p>Loading your PDF, please wait a moment...</p>
      <img src="/spinner.svg"></img>
    </div>
  );
};

export default Spinner;
