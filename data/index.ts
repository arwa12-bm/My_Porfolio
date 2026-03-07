export const navItems = [
  { name: "À propos", link: "#about" },
  { name: "Compétences", link: "#skills" },
  { name: "Projets", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];


export const gridItems = [
  {
    id: 1,
    title: "Je privilégie la collaboration et la communication avec mes clients.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je m’adapte facilement aux différents fuseaux horaires et besoins.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mes technologies principales",
    description: "Next.js, NestJS, React, Node.js, PostgreSQL et Python.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionnée par le développement web et l’intelligence artificielle.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Je travaille actuellement sur une application de gestion intelligente.",
    description: "Basée sur NestJS, NextJS et PostgreSQL.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Envie de collaborer sur un projet ensemble ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Application de gestion de commande - Pizza Time Modern",
    des: "Développement d'une application complète de gestion de commandes pour un restaurant, intégrant des fonctionnalités d'intelligence artificielle. Réalisée avec NestJS, NextJS, PostgreSQL et Python.",
    img: "/PizzaTime.png",
    iconLists: ["/next.svg", "/nest.svg", "/postgres.svg", "/python.svg"],
    link: "https://github.com/arwa-bm/pizza-time-app", // (tu pourras ajouter le lien réel GitHub)
  },
  {
    id: 2,
    title: "Application de gestion des stagiaires",
    des: "Conception et développement d’une application web de suivi des stagiaires. Technologies utilisées : NodeJS, ExpressJS, ReactJS et PostgreSQL.",
    img: "/gestion stagaire.png",
    iconLists: ["/node.svg", "/re.svg", "/express.svg", "/postgres.svg"],
    link: "https://github.com/arwa-bm/stagiaire-app",
  },
  {
    id: 3,
    title: "Application Parc Informatique",
    des: "Développement d'une application web de gestion du parc informatique avec ReactJS, NodeJS, ExpressJS et MongoDB.",
    img: "/ParcInfo.png",
    iconLists: ["/node.svg", "/re.svg", "/mongo.svg", "/express.svg"],
    link: "https://github.com/arwa-bm/parc-informatique",
  },
  {
    id: 4,
    title: "E-Shop",
    des: "Développement d’une plateforme E-Shop full-stack avec Next.js, NestJS et PostgreSQL. Mise en place d’une architecture scalable, automatisation des processus, gestion et analyse des données pour optimiser les performances et l’expérience utilisateur.",
    img: "/eshop.png",
    iconLists: ["/next.svg", "/nest.svg", "/postgres.svg"],
    link: "https://github.com/arwa-bm/tech-automation",
  },
];


export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Stagiaire en fin d’études - Développeuse Full Stack",
    desc: "Développement d'une application de gestion de commande pour Pizza Time Modern, intégrant l’intelligence artificielle. Technologies : NestJS, NextJS, PostgreSQL, Python.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Stagiaire en 1ère année de Mastère Professionnel",
    desc: "Développement d’une application de gestion de stagiaires avec NodeJS, ExpressJS, ReactJS et PostgreSQL.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Adjoint administratif et responsable informatique",
    desc: "Gestion des équipements informatiques, maintenance, installation de réseaux et support technique au sein du Centre SANA de formation privé.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Stagiaire en fin d’études de Licence",
    desc: "Développement d’une application de gestion du parc informatique à la Direction Régionale des Télécoms de Kébili (NodeJS, ExpressJS, ReactJS, MongoDB).",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Trésorière régionale – Kébili",
    desc: "Gestion administrative et financière au sein d’une structure régionale. Développement de compétences en organisation et en communication.",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },

];
// export const skills = [
//   { id: 1, category: "language", content: "JavaScript", img: "/images/javascript.png" },
//   { id: 2, category: "language", content: "TypeScript", img: "/images/typescript.png" },
//   { id: 3, category: "language", content: "Python", img: "/images/python.png" },

//   { id: 4, category: "framework", content: "React", img: "/images/react.png" },
//   { id: 5, category: "framework", content: "Next.js", img: "/images/nextjs.png" },
//   { id: 6, category: "framework", content: "NestJS", img: "/images/nestjs.png" },
//   { id: 7, category: "framework", content: "Node.js", img: "/images/nodejs.png" },

//   { id: 8, category: "database", content: "MongoDB", img: "/images/mongodb.png" },
//   { id: 9, category: "database", content: "PostgreSQL", img: "/images/postgresql.png" },
//   { id: 10, category: "database", content: "MySQL", img: "/images/mysql.png" },
//   { id: 11, category: "database", content: "SQLite", img: "/images/sqlite.png" },
// ];

export const skills = [
  // Languages
  // {
  //   id: 1,
  //   category: "language",
  //   name: "JavaScript",
  //   modelPath: "/public/models/javascript.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   id: 2,
  //   category: "language",
  //   name: "TypeScript",
  //   modelPath: "/public/models/typescript.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
  {
    id: 3,
    category: "language",
    name: "Python",
    modelPath: "/models/python.glb" ,
    scale: 0.01 ,
    rotation: [0, 0, 10],
  },

  // Frameworks
  {
    id: 4,
    category: "framework",
    name: "React Developer",
    modelPath: "/models/react_logo.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   id: 5,
  //   category: "framework",
  //   name: "Next.js Developer",
  //   modelPath: "/public/models/nextjs.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   id: 6,
  //   category: "framework",
  //   name: "NestJS Developer",
  //   modelPath: "/public/models/nestjs.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   id: 7,
  //   category: "framework",
  //   name: "Node.js Developer",
  //   modelPath: "/public/models/nodejs.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },

  // Databases
  {
    id: 8,
    category: "database",
    name: "MongoDB",
    modelPath: "/models/mongodb_logo__3d_model.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   id: 9,
  //   category: "database",
  //   name: "PostgreSQL",
  //   modelPath: "/public/models/postgresql.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   id: 10,
  //   category: "database",
  //   name: "MySQL",
  //   modelPath: "/public/models/mysql.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   id: 11,
  //   category: "database",
  //   name: "SQLite",
  //   modelPath: "/public/models/sqlite.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];