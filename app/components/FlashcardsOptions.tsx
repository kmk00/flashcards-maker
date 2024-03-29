import Flashcards from "./Flashcards";

const FlashcardsOptions = () => {
  return (
    <div className="flex flex-col justify-center lg:justify-start items-center lg:min-w-[500px] min-w-full  px-4 lg:overflow-y-auto pb-10">
      <Flashcards />
    </div>
  );
};

export default FlashcardsOptions;
