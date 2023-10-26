const NavBar = () =>
(
  <div className="bg-gray-50 pt-4">
    <svg className="box-border block h-7 w-16">
      <path className="flex " d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"> </path>
    </svg>
    <div className="pb-4 flex justify-between w-full border-0 border-b-4 border-gray-300 text-2xl">
      <div className="w-8/12 flex justify-evenly ">
        <div>Live</div>
        <div>Push</div>
        <div>Note</div>
        <div>Link</div>
        <div>Shop</div>
        <div>Packs</div>
        <div>Help</div>
        <div className="text-orange-500">More +</div>
      </div>

      <div className="w-4/12 flex justify-evenly">
        <div className="text-blue-500">Try Live for free</div>
        <div>Log in or register</div>
      </div>
    </div>
  </div>
);

const SubNavBar = () => (
  <div className="w-full flex">
    <div className="flex justify-evenly w-3/12 my-4">

      <div className="">About</div>
      <div className="text-orange-500">Jobs</div>
      <div className="">Apprenticeships</div>
    </div>
  </div>
);


export default function App() {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-50 h-fit w-full max-w-7xl mx-auto">
        {/* navbar */}
        <NavBar />

        {/* sub navbar */}
        <SubNavBar />

        <div className="border-0 border-b-4 border-gray-300 mb-32 ">
          {/* header image */}
          <div className="relative">
            <img src="header.avif" alt="" srcset="" />
            <div className="text-9xl absolute w-full text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-300">Jobs at Ableton</div>
          </div>

          {/* summary text */}
          <div className="max-w-xl mx-auto mt-16 text-lg">
            <div className="font-bold text-2xl max-w-xl mx-auto mb-4">Working at Ableton means being a part of creating products that shape the future of music culture in a dynamic and diverse environment</div>
            <div className="mb-4">Here at Ableton, we come from a wide range of cultural and professional backgrounds. We work hard to foster an environment in which people can grow both personally and professionally. We believe that diverse groups of people make better teams. We’re committed to increasing diversity in our workplace and providing equal opportunity throughout our recruitment process. Because of this we ask that you do not include a picture in your application documents. Thank you very much for your understanding.</div>
            <div className="mb-8">If you want to apply for one of our open positions, we would be happy to receive your application through our application form. Please upload all necessary documents there.</div>

            <div className="font-bold mb-2">Commerce </div>

            <div className="text-blue-400">EMEA Tax Expert (d/f/m)</div>
            <div className="mb-2">Ableton AG / Germany</div>
            <div className="text-blue-400">EMEA Tax Expert (d/f/m)</div>
            <div className="mb-2">Ableton AG / Germany</div>
            <div className="text-blue-400">EMEA Tax Expert (d/f/m)</div>
            <div className="mb-2">Ableton AG / Germany</div>
          </div>
        </div>


        {/* collage (2 images) */}
        {/* supportive text */}
        {/* embedded video */}

        {/* second supportive text */}
        {/* second collage (3 images)*/}

        {/* third supportive text */}
        {/* image */}

        {/* fourth supportive text */}
        {/* third collage (2 images)*/}

        {/* fifth supportive text */}

        {/* fourth collage (1 images with text)*/}

        {/* footer */}
      </div>
    </div>
  )
}
