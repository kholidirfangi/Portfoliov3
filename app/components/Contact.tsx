"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
  CheckCircle,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  FacebookIcon,
} from "lucide-react";

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 });
  const socialInView = useInView(socialRef, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone / WhatsApp",
      value: "+62 813-8452-8791",
      link: "https://api.whatsapp.com/send/?phone=6281384528791",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kholidirfangi394@gmail.com",
      link: "mailto:kholidirfangi394@gmail.com",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokasi",
      value: "Kebumen, Indonesia",
      link: "#",
      color: "from-purple-400 to-pink-400",
    },
    // {
    //   icon: <Clock className="w-6 h-6" />,
    //   title: "Jam Kerja",
    //   value: "Mon - Fri: 9AM - 6PM",
    //   link: "#",
    //   color: "from-orange-400 to-red-400",
    // },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/kholid.irfangi",
      color: "from-pink-500 to-purple-500",
      username: "Kholid Irfangi",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/kholid-irfangi-4394a71a6/",
      color: "from-blue-600 to-blue-400",
      username: "Kholid Irfangi",
    },
    {
      name: "Github",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/kholidirfangi",
      color: "from-gray-800 to-gray-600",
      username: "Kholid Irfangi",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="w-6 h-6" />,
      url: "https://facebook.com/kholidns",
      color: "from-sky-500 to-blue-500",
      username: "Kholid Irfangi",
    },
  ];

  const services = [
    "Website Development",
    // "E-Commerce Solutions",
    "Landing Page",
    // "UI/UX Design",
    "Website Optimization",
    // "Dashboard & Admin Panel",
    "Lainnya",
  ];

  const budgetRanges = [
    "< Rp 5 Juta",
    "Rp 5 - 10 Juta",
    "Rp 10 - 20 Juta",
    "Rp 20 - 50 Juta",
    "> Rp 50 Juta",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      }, 3000);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Mari Terhubung</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Siap Memulai{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Project Anda?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hubungi saya untuk konsultasi gratis. Saya siap membantu mewujudkan
            visi digital Anda menjadi kenyataan
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - 2 Columns */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-linear-to-br from-blue-400 to-cyan-400 rounded-xl text-white">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Kirim Pesan
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Isi form di bawah dan saya akan segera menghubungi Anda
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                {/* Service & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Layanan yang Dibutuhkan *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                    >
                      <option value="">Pilih Layanan</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Budget (Opsional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                    >
                      <option value="">Pilih Range Budget</option>
                      {budgetRanges.map((budget, idx) => (
                        <option key={idx} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Pesan / Detail Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Ceritakan tentang project Anda..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    isSuccess
                      ? "bg-green-500"
                      : "bg-linear-to-r from-blue-400 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/50"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Pesan Terkirim!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - 1 Column */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="block bg-white rounded-2xl px-4 py-6 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 bg-linear-to-br ${info.color} rounded-xl text-white group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={infoInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-linear-to-r from-blue-400 to-cyan-400 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold">Quick Response</h4>
              </div>
              <p className="text-sm opacity-90">
                Saya biasanya merespon dalam{" "}
                <span className="font-bold">1-2 jam</span> pada jam kerja. Untuk
                pertanyaan urgent, hubungi via WhatsApp.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          ref={socialRef}
          initial={{ opacity: 0, y: 20 }}
          animate={socialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Atau Hubungi via Social Media
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={socialInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
              >
                <div
                  className={`inline-flex p-4 bg-linear-to-br ${social.color} rounded-xl text-white mb-3 group-hover:scale-110 transition-transform`}
                >
                  {social.icon}
                </div>
                <h4 className="font-bold text-slate-800 mb-1">{social.name}</h4>
                <p className="text-sm text-gray-600">{social.username}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
