import Image from "next/image";
import Link from "next/link";

const data = [
  {
    img: "/projects.png",
    title: "Weather App",
    category: "Saas",
    desc: "Website Ramalan cuaca untuk mengetahui prediksi cuaca hingga seminggu kedepan",
    link: "https://weather-app-amber-seven-14.vercel.app/",
    technology: ["Next", "Typescript", "Tailwindcss"],
  },
  {
    img: "/amanah-jaya.png",
    title: "Fotocopy Amanah Jaya",
    category: "Landing Page",
    desc: "Landing Page Toko Fotocopy dan Percetakan di Kebumen",
    link: "",
    technology: ["Vite", "JavaScript", "Tailwindcss"],
  },
  {
    img: "/easybank.png",
    title: "Landing Page Easybank",
    category: "Landing Page",
    desc: "Landing Page Bank Digital untuk memudahkan customer",
    link: "",
    technology: ["Vite", "JavaScript", "Tailwindcss"],
  },
  {
    img: "/kasir-app.png",
    title: "Website Aplikasi Kasir",
    category: "Saas",
    desc: "Website Aplikasi Kasir untuk memudahkan UMKM dalam mengelola penjualan",
    link: "",
    technology: ["Vite", "JavaScript", "Tailwindcss"],
  },
  {
    img: "/landing-page-inviteme.png",
    title: "Landing Page Undangan Digital",
    category: "Landing Page",
    desc: "Landing Page Undangan Digital tempat pelanggan memilih dan pesan undangan digital",
    link: "",
    technology: ["Vite", "JavaScript", "Tailwindcss"],
  },
  {
    img: "/portfolio-salis.png",
    title: "Website Portfolio Designer Grafis",
    category: "Web Portfolio",
    desc: "Web Portfolio untuk memamerkan hasil karya dan layanan freelance",
    link: "",
    technology: ["Vite", "JavaScript", "Tailwindcss"],
  },
  {
    img: "/portfolio v2.png",
    title: "Portfolio Frontend Developer",
    category: "Web Portfolio",
    desc: "Web Portfolio Developer untuk menunjukkan skill yang dimiliki dan hasil karya yang telah dibuat",
    link: "",
    technology: ["Vite", "JavaScript", "Tailwindcss"],
  },
];

const CardProject = () => {
  return data.map((item, index) => (
    <div
      key={index}
      className="relative flex flex-col rounded-lg overflow-hidden shadow-2xl hover:shadow-blue-200 duration-300 bg-white hover:-translate-y-2 transition-transform"
    >
      <div className="bg-blue-400 px-2 py-1 text-white text-sm rounded-full absolute top-2 right-2">
        {item.category}
      </div>
      <Image src={item.img} width={1000} height={2000} alt="img" />
      <div className="flex flex-col flex-1 p-4">
        <div>
          <Link
          href={item.link}
          target="blank"
          className="font-semibold text-lg hover:text-blue-400 hover:underline"
        >
          {item.title}
        </Link>
        <p className="text-gray-600">{item.desc}</p>
        </div>
        <div className="flex gap-2 mt-auto">
          {item.technology.map((tech, index) => (
            <div
              className="bg-blue-400 text-white px-2 py-1 rounded-md text-sm mt-5"
              key={index}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <h1 className="font-bold text-4xl text-center mb-5">
        <span className="text-blue-400">P</span>rojects
      </h1>
      <p className="text-center mb-10">
        Berikut adalah beberapa project yang telah kami kerjakan dengan berbagai
        teknologi modern.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <CardProject />
      </div>
    </section>
  );
};

export default Projects;
