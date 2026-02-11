const CardContact = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="bg-white to cyan-500 px-5 py-10 rounded-lg shadow-2xl w-80 hover:shadow-blue-200 duration-300 hover:-translate-y-2 transition-transform">
      <div className="mb-4 font-semibold text-lg text-blue-400">{name}</div>
      <div className="text-slate-700">{value}</div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <h1 className="font-bold text-4xl text-center mb-10">
        <span className="text-blue-400">C</span>ontact
      </h1>

      <div className="text-center">
        <h2 className="font-bold text-3xl">Mari Bekerja Sama</h2>
        <p className="my-8">
          Punya project dalam pikiran? Jangan ragu untuk menghubungi Kami!{" "}
        </p>
        <div className="flex flex-col xl:flex-row gap-5 mt-8 justify-center items-center">
          <CardContact name="Whatsapp" value="+62813-8452-8791" />
          <CardContact name="Email" value="kholidirfangi394@gmail.com" />
          <CardContact name="Lokasi" value="Kebumen, Jawa Tengah, Indonesia" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
