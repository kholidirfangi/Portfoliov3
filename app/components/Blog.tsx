import Image from "next/image";
import Link from "next/link";

const data = [
  {
    img: "/article1.png",
    title: "Perbedaan var, let dan const pada JavaScript",
    desc: "Penjelasan perbedaan pendeklarasian variabel pada JavaScript",
    link: "https://medium.com/@kholidirfangi394/the-difference-between-var-let-and-const-1b2409425f30",
  },
  {
    img: "/article2.png",
    title:
      "Membuat Aplikasi Palindrome Cek menggunakan HTML, CSS dan JavaScript",
    desc: "Palindrom merupakan sebuah kata, bilangan, frasa, atau susunan karakter lain yang serupa jika dibaca dengan urutan terbalik ataupun tidak, seperti dalam kakak ataupun apa",
    link: "https://medium.com/@kholidirfangi394/membuat-aplikasi-palindrome-cek-menggunakan-html-css-dan-javascript-d4b7ec1c2a9a",
  },
  {
    img: "/article3.png",
    title:
      "Membuat Aplikasi Todo App menggunakan React Typescript dan Tailwindcss",
    desc: "Aplikasi untuk mengelola tugas agar terjadwal dengan baik",
    link: "https://medium.com/@kholidirfangi394/create-a-todo-app-using-react-typescript-and-tailwindcss-fa8b7c4dba02",
  },
  {
    img: "/article4.png",
    title: "Membuat Aplikasi Random Quote Machine",
    desc: "Aplikasi untuk men-generate Quote secara acak yang diambil dari sebuah API",
    link: "https://medium.com/@kholidirfangi394/membuat-random-quote-machine-9c54532529b5",
  },
];

const CardBlog = () => {
  return data.map((item, index) => (
    <div
      key={index}
      className="rounded-lg overflow-hidden shadow-2xl pb-5 hover:shadow-blue-200 duration-300 bg-white hover:-translate-y-2 transition-transform"
    >
      <Image src={item.img} width={1000} height={2000} alt="img" />
      <div className="p-4">
        <Link
          href={item.link}
          target="blank"
          className="font-semibold text-lg hover:text-blue-400 hover:underline"
        >
          {item.title}
        </Link>
        <p className="text-gray-600 line-clamp-3">{item.desc}</p>
      </div>
    </div>
  ));
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <h1 className="font-bold text-4xl text-center mb-5">
        <span className="text-blue-400">B</span>log
      </h1>
      <p className="text-center mb-10">
        Berikut adalah beberapa artikel yang telah kami tulis.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <CardBlog />
      </div>
    </section>
  );
};

export default Blog;
