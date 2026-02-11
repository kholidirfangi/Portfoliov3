import { BadgeCheck, Target, Building2, Briefcase } from "lucide-react";

const servicesList = [
  {
    icon: Target,
    title: "Landing Page",
    description:
      "Website satu halaman dirancang khusus untuk konversi maksimal dan menarik perhatian pengunjung",
    highlight: "Cocok untuk meningkatkan omzet penjualan",
    price: "Rp 700K",
    list: [
      "Design Modern & Responsive",
      "Loading super cepat (optimized)",
      "Call-to-action yang efektif",
      "Form kontak terintegrasi",
      "SEO-friendly structure",
      "Compatible semua device",
      "Free SSL Certificate",
      "Free domain 1 tahun",
      "Free hosting 1 tahun",
      "Revisi 2x",
      "Support 30 hari",
    ],
  },
  {
    icon: Building2,
    title: "Company Profile",
    description:
      "Website profesional untuk membangun kredibilitas dan menampilkan profil lengkap perusahaan Anda",
    highlight: "Meningkatkan kepercayaan & profesionalisme bisnis",
    price: "Rp 2.500K",
    list: [
      "Multi-page (5-8 halaman)",
      "Halaman About, Services, Team",
      "Galeri foto & video",
      "Blog/artikel terintegrasi",
      "Testimoni klien",
      "Maps & lokasi kantor",
      "Formulir contact & inquiry",
      "SEO optimization",
      "Free SSL Certificate",
      "Free domain 1 tahun",
      "Free hosting 1 tahun",
      "Revisi 3x",
      "Support 30 hari",
    ],
  },
  {
    icon: Briefcase,
    title: "Portfolio Website",
    description:
      "Pamerkan karya & proyek terbaik Anda dengan tampilan visual yang memukau dan interaktif",
    highlight: "Sempurna untuk profesional kreatif & pekerja lepas",
    price: "Rp 2.000K",
    list: [
      "Design portfolio yang eye-catching",
      "Gallery dengan filter kategori",
      "Lightbox view untuk project",
      "Halaman About Me/Biography",
      "Skills & expertise showcase",
      "Project case studies detail",
      "Client testimonials section",
      "Download CV/Resume feature",
      "Contact form & social media",
      "Blog personal (optional)",
      "Mobile-first design",
      "Fast loading images",
      "Revisi 2x",
      "Support 30 hari",
    ],
  },
];

const ServiceCard = () => {
  return servicesList.map((item, index) => {
    const IconComponent = item.icon;

    return (
      <div
        key={index}
        className="w-full xl:w-1/3 flex flex-col rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white"
      >
        <div className="w-full bg-blue-400 text-white py-3 text-center font-semibold">
          {item.title}
        </div>
        <div className="flex flex-col grow p-5">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-400 text-white p-4 rounded-full">
              <IconComponent size={32} />
            </div>
          </div>

          <p className="text-gray-600 text-center">{item.description}</p>

          <div className="flex gap-3 items-center mt-5 bg-blue-50 rounded-lg p-3">
            <BadgeCheck size={24} className="text-blue-400 shrink-0" />
            <div className="text-sm text-gray-700">{item.highlight}</div>
          </div>

          <ul className="mt-5 space-y-2 mb-5">
            {item.list.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="text-blue-400 font-bold mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-4 border-t border-gray-200 ">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              {item.price}
              <span className="text-sm text-gray-500 font-normal">
                {" "}
                / project
              </span>
            </div>
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    );
  });
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <h1 className="font-bold text-4xl text-center mb-10">
        <span className="text-blue-400">S</span>ervices
      </h1>

      <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto px-5">
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
