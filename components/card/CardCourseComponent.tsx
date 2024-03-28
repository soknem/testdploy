export default function CardCourseComponent() {
    return (
      <div className="w-full max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-white hover:scale-[103%] duration-200 z-0">
        <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
          <img src="./flutter.png" alt="" className="object-contain max-w-full max-h-full" />
        </div>
        <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
            <h1 className="font-semibold mb-4">FULLTER MOBLE DEVELOPMENT</h1>
            <div className="w-full h-auto m-1">
                <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
            </div>
            <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
        </div>
        <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
            
            <h1 className="md:py-4 ">80 hours</h1>
            <h1>Medium</h1>
        </div>
      </div>
    );
  }
  