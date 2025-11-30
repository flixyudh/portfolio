import { Code, Cpu, Github, Layers, Smartphone, Terminal } from "lucide-react";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Yudi Iswandi",
    title: "React Native Engineer",
    email: "yudhi.trendhi@gmail.com",
    phone: "+62821-xxxx-xxxx",
    location: "Tangerang, Banten",
    social: {
      github: "https://github.com/flixyudh",
      linkedin: "https://www.linkedin.com/in/yudiiswandi"
    }
  },
  summary: {
    en: "Experienced React Native Engineer with over 6 years of expertise in building hybrid mobile applications. Skilled in problem-solving, business flow analysis, and full-cycle application development. Proven track record in optimizing system performance and leading development teams.",
    id: "React Native Engineer berpengalaman dengan lebih dari 6 tahun keahlian dalam membangun aplikasi seluler hybrid. Terampil dalam pemecahan masalah, analisis alur bisnis, dan pengembangan aplikasi siklus penuh. Memiliki rekam jejak terbukti dalam mengoptimalkan kinerja sistem dan memimpin tim pengembangan."
  },
  skills: [
    { name: "React Native", level: 95, icon: Smartphone },
    { name: "JavaScript / ES6", level: 90, icon: Code },
    { name: "ReactJS", level: 85, icon: Layers },
    { name: "Node.js & Express", level: 80, icon: Terminal },
    { name: "Git Version Control", level: 85, icon: Github },
    { name: "Java", level: 70, icon: Cpu },
  ],
  experience: [
    {
      id: 1,
      company: "PT. Omni Digitama Internusa (Kawan Lama Group)",
      role: "React Native Engineer",
      period: "Dec 2021 - Present",
      location: "Jakarta",
      description: {
        en: [
          "Ensure technical feasibility of UI/UX designs and provide development recommendations.",
          "Continuously evaluate and improve system performance, scalability, and reliability.",
          "Collaborate across departments and supervise the product development team.",
          "Ensure products meet high quality and security standards."
        ],
        id: [
          "Memastikan kelayakan teknis desain UI/UX dan memberikan rekomendasi pengembangan.",
          "Mengevaluasi dan meningkatkan kinerja, skalabilitas, dan keandalan sistem secara berkelanjutan.",
          "Berkolaborasi lintas departemen dan mengawasi tim pengembangan produk.",
          "Memastikan produk memenuhi standar kualitas dan keamanan yang tinggi."
        ]
      }
    },
    {
      id: 2,
      company: "PT. Summarecon Agung Tbk.",
      role: "Mobile Developer",
      period: "Feb 2020 - Nov 2021",
      location: "Serpong",
      description: {
        en: [
          "Implemented mockups from Figma/Zeplin into robust code.",
          "Ensured applications ran according to specific Business Processes.",
          "Fixed bugs, errors, and maintained application stability."
        ],
        id: [
          "Mengimplementasikan mockup dari Figma/Zeplin menjadi kode yang kuat.",
          "Memastikan aplikasi berjalan sesuai dengan Proses Bisnis tertentu.",
          "Memperbaiki bug, kesalahan, dan menjaga stabilitas aplikasi."
        ]
      }
    }
  ],
  education: [
    {
      id: 1,
      school: "Universitas Buddhi Dharma",
      degree: "Bachelor of Information Technology",
      period: "2012 - 2017",
      details: "IPK 2.96"
    },
    {
      id: 2,
      school: "SMA Maria Mediatrix",
      degree: "Science (IPA)",
      period: "2008 - 2011",
      details: "Completed high school at age 16"
    }
  ],
  nav: {
    en: ["Home", "About", "Experience", "Skills", "Contact"],
    id: ["Beranda", "Tentang", "Pengalaman", "Keahlian", "Kontak"]
  }
};