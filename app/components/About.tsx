import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col px-10 xl:flex-row xl:pt-40 xl:pb-20 xl:px-20 gap-10"
    >
      {/* left side */}
      <div className="w-full xl:w-1/2 mt-24 xl:mt-0">
        <div className="bg-linear-to-br from-blue-300 to-cyan-400 text-white px-3 rounded-full w-32 text-center mb-3">{`Hi, I'm Kholid`}</div>
        <h1 className="font-bold text-4xl mb-5">
          Frontend Developer - Menciptakan Website Modern & Powerful untuk
          Bisnis Anda
        </h1>
        <div className="text-slate-700">
          <p>{`Spesialisasi saya adalah membangun landing page dan company profile yang 
              menghasilkan dampak nyata. Setiap website dirancang dengan desain menarik, 
              performa super cepat, dan pengalaman pengguna yang sempurna di semua perangkat.
              Mari kita wujudkan website terbaik untuk bisnis Anda.`}</p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-5">
          <button className="w-full md:w-auto bg-blue-400 text-white px-5 py-3 rounded-full hover:bg-blue-500 cursor-pointer duration-300 ">
            Hire Me!
          </button>
          <button className="w-full md:w-auto bg-black px-5 py-3 rounded-full text-white hover:opacity-80 cursor-pointer">
            See My Portfolio
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="w-full xl:w-1/2 flex justify-center items-center">
        <Image
          src="/saitama1.png"
          width={350}
          height={350}
          alt="avatar"
          className="md:ml-20"
        />
      </div>
    </section>
  );
};

export default About;
