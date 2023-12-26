
const Friends = () => {
  return (
    <div className="md:block md:w-[500px]">
      <h2 className="text-[#003459] mt-[50px] text-4xl capitalize sm:text-6xl font-bold">
        One more friend
      </h2>
      <h3 className="text-3xl md:text-5xl my-5 capitalize  text-[#003459] font-semibold">
        Thousands more fun!
      </h3>
      <p className="text-[18px]">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div className="flex gap-4 mt-7 md:justify-center lg:justify-start">
        <button className="border flex items-center  border-[#003459] p-2 px-4 rounded-[20px] text-[#003459]">
          View Intro{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className=" ml-2 bi bi-play-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
          </svg>
        </button>
        <button className="p-2 px-6 rounded-[20px] bg-[#003459] text-white">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Friends;
