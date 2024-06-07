import {
    mobile,
    backend,
    creator,
    web,
    capgemini,
    watermelon,
    hamiters,
    spanrig,
    analysed,
    gaming,
    fitness,
    tiyashport,
    rtpro,
    skintest,
    equalstwova,
    anxioport,
    mother,
    guide,
    tshirt,
    gamerverse,
    nike,
    travel,
    coderoom,
    webdew,
    vindicator,
    amazonre,
    vindicatorpro,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "UI/UX Designer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Biker",
      icon: backend,
    },
    {
      title: "Gamer",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#f2ffff",
      date: "July 2019 - October 2019",
      points: [
        "Experienced using development tools and IDEs like Visual Studio, Eclipse, and PyCharm.",
        "Designed and implemented database schemas using SQL and NoSQL databases like MySQL and MongoDB.",
        "Actively pursued professional development through online courses and certifications.",
        "Acquired training in the following domains: hardware, networks, databases, application development, Windows Server, and Linux.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Spanrig Technologies",
      icon: spanrig,
      iconBg: "#ffffff",
      date: "January 2020 - November 2020",
      points: [
        "Created and executed designs for a wide range of projects, including branding, marketing collateral, digital ads, and print materials.",
        "Utilized advanced Photoshop techniques to enhance and retouch images for high-quality print and web materials.",
        "Collaborated with cross-functional teams to gather requirements, conducted user research, and defined user personas to inform design decisions.",
        "Developed visually compelling concepts that aligned with clients' brand identities and project objectives.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Analysed.in [Freelance]",
      icon: analysed,
      iconBg: "#ffffff",
      date: "February 2022 - March 2022",
      points: [
        "Led the design of a Fitness App, a mobile application that offers subscription based personalised workouts.",
        "Rapidly prototyped design concepts using tools like Figma and Adobe XD to facilitate feedback and validation.",
        "Collaborated closely with developers and product managers to ensure the alignment of design with project goals and technical feasibility.",
        "Proficiently applied principles of typography, color theory, and layout design to create engaging and user-friendly designs.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Hamiters [Internship]",
      icon: hamiters,
      iconBg: "#ffffff",
      date: "March 2022 - June 2022",
      points: [
        "Led a team of devs to create an Encryption/Decryption application based on python for Skynet ",
        "Proficient in HTML, CSS, JavaScript for building interactive and dynamic web interfaces.",
        "Utilized back-end technologies like Node.js and PHP to develop server-side components and database integrations.",
        "Employed database management systems, including MySQL and MongoDB, to design and optimize data storage and retrieval.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Watermelon Health",
      icon: watermelon,
      iconBg: "#fff2ff",
      date: "September 2022 - September 2023",
      points: [
        "Developed and maintained visually appealing and user-friendly websites for diverse clients and projects, meeting and exceeding design and functionality requirements.",
        "Created wireframes, user flows, and interactive prototypes using tools such as Adobe XD and Figma.",
        "Collaborated closely with development teams to ensure accurate implementation of designs, maintaining design integrity throughout the development process.",
        "Reduced user onboarding time by 50% through intuitive UI enhancements in Anxio, a mental wellness mobile application.",
      ],
    },
    {
      title: "UI/UX Lead",
      company_name: "Reverse Thought Creative Studio",
      icon: vindicator,
      iconBg: "#FFFFFF",
      date: "October 2023 - Present",
      points: [
        "Overseeing the entire design lifecycle, from conceptualization to execution.",
        "Collaborated closely with product managers, developers, and other stakeholders to align design goals with business objectives.",
        "Ensured that the user-centric principles are at the forefront of every decision.",
        "Through my leadership, I've successfully implemented development standards, streamlined workflows, and fostered a collaborative design culture within organizations.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Vindicator.pro",
      description:
        "A gaming services website, focusing on intuitive UI and seamless UX. Successfully combined aesthetics with functionality to create a captivating online presence.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind.css",
          color: "green-text-gradient",
        },
        {
          name: "Responsive",
          color: "pink-text-gradient",
        },
      ],
      image: vindicatorpro,
      web_link: "https://vindicator.pro/",
      isWeb: true,
    },
    {
      name: "Amazon ReDesign",
      description:
        "This project tackles the Amazon homepage, streamlining navigation for a more intuitive search and discovery experience. By prioritizing user research and clean visuals.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "E-Commerce",
          color: "green-text-gradient",
        },
        {
          name: "ReDesign",
          color: "pink-text-gradient",
        },
      ],
      image: amazonre,
      figma_link: "https://www.figma.com/proto/jBIOdqOVuEfrjanYcgMCJW/Amazon-Redesign?page-id=0%3A1&node-id=2-3&viewport=189%2C121%2C0.44&t=doLCKpswicrJm6YP-1&scaling=contain",
      isFigma: true,
    },
    // {
    //   name: "WebDew",
    //   description:
    //     "With a focus on user engagement, my design for WebDew combines aesthetic appeal with intuitive navigation, providing a visually striking and user-friendly interface. ",
    //   tags: [
    //     {
    //       name: "Figma",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Agency",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Responsive",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: webdew,
    //   figma_link: "https://www.figma.com/proto/ujfxUpXsmY3bLIHzobiLxI/WebDew?page-id=0%3A1&type=design&node-id=4-145&viewport=269%2C40%2C0.18&t=WyissBUBsaI0KfBH-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design",
    //   isFigma: true,
    // },
    {
      name: "Store Code",
      description:
        "A platform where travel influencers create custom itinerary to guide people based on their experiences. Influencers earn by getting people to book activities by using their codes.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Travel",
          color: "green-text-gradient",
        },
        {
          name: "Responsive",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      figma_link: "https://www.figma.com/proto/ZIK6aCXiicP4cUZ5nyues9/Store-Code-App?page-id=0%3A1&type=design&node-id=0-108&viewport=301%2C433%2C0.12&t=JJFY4aTl8d9rwVsE-1&scaling=min-zoom&starting-point-node-id=0%3A108&show-proto-sidebar=1&mode=design",
      isFigma: true,
    },
    {
      name: "CodeRoom",
      description:
        "Single page UI for a software development agency and other digital services. Designed keeping responsiveness, user-centric thinking and a clean UI in mind. ",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Agency",
          color: "green-text-gradient",
        },
        {
          name: "Responsive",
          color: "pink-text-gradient",
        },
      ],
      image: coderoom,
      figma_link: "https://www.figma.com/proto/Nxaxm07aJJwT9zHMCqiIUU/Trebled-Design?page-id=0%3A1&type=design&node-id=34-1783&viewport=649%2C55%2C0.17&t=7KQRQllN5zmlyTBP-1&scaling=min-zoom&starting-point-node-id=34%3A1783&show-proto-sidebar=1&mode=design",
      isFigma: true,
    },
    {
      name: "Nike Store",
      description:
        "A simple Nike web store front-end designed for easy navigation, fluid user experience and responsiveness. Developed using React.js and Tailwind CSS",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Vite.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind.css",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      github_link: "https://github.com/kAOS6-9/nike",
      web_link: "https://kaos6-9.github.io/nike/",
      isLogo:true,
      isWeb: true,
    },
    {
      name: "Gamerverse",
      description:
        "A metaverse app designed for gamers, by a gamer. It provides latest metaverse news around the world. Thanks to Eduard Kaliushkin for NewsCatcher API Access.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind.css",
          color: "pink-text-gradient",
        },
      ],
      image: gamerverse,
      figma_link: "https://www.figma.com/proto/phBth7woFMJrzD2xe8dLyY/VA-prototype?page-id=0%3A1&type=design&node-id=1-720&viewport=192%2C3037%2C0.17&t=LYnIpxbeAt08yCy6-1&scaling=min-zoom&starting-point-node-id=1%3A720&mode=design",
      github_link: "https://github.com/kAOS6-9/gamerverse",
      web_link: "https://gamerverse-jade.vercel.app/",
      isLogo:true,
      isWeb: true,
    },
    {
      name: "T-shirt Customizer",
      description:
        "A freelancing project for a client's custom T-shirt printing business. This web app allows you to customize a 3D T-shirt model with colors and custom logo.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind.css",
          color: "pink-text-gradient",
        },
      ],
      image: tshirt,
      figma_link: "https://www.figma.com/proto/phBth7woFMJrzD2xe8dLyY/VA-prototype?page-id=0%3A1&type=design&node-id=1-720&viewport=192%2C3037%2C0.17&t=LYnIpxbeAt08yCy6-1&scaling=min-zoom&starting-point-node-id=1%3A720&mode=design",
      github_link: "https://github.com/kAOS6-9/tshirt-customizer",
      web_link: "https://kaos6-9.github.io/tshirt-customizer/",
      isLogo:true,
      isWeb: true,
    },
    {
      name: "Zydus BabyCare VA",
      description:
        "An interactive Visual Aid showcasing Baby Care products, designed and developed to run on iPads provided to the sales team to help them keep the audience engaged.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: equalstwova,
      figma_link: "https://www.figma.com/proto/GlzyqDlJMzdr6cJrU0R1vB/Equals_Two_Presentation-v2?page-id=0%3A1&type=design&node-id=1-2&viewport=390%2C321%2C0.02&t=z6okErpPb8h9KjZn-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design",
      github_link: "https://github.com/kAOS6-9/EqualsTwoBabyCareVA",
      web_link: "https://kaos6-9.github.io/EqualsTwoBabyCareVA/",
      isLogo: true,
      isFigma: true,
      isWeb: true,
    },
    {
      name: "Zydus MotherCare VA",
      description:
        "An interactive Visual Aid showcasing Mother Care products, designed and developed to run on iPads provided to the sales team to help them keep the audience engaged.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: mother,
      figma_link: "https://www.figma.com/proto/phBth7woFMJrzD2xe8dLyY/VA-prototype?page-id=0%3A1&type=design&node-id=1-720&viewport=192%2C3037%2C0.17&t=LYnIpxbeAt08yCy6-1&scaling=min-zoom&starting-point-node-id=1%3A720&mode=design",
      github_link: "https://github.com/kAOS6-9/EqualsTwoMotherCareVA",
      web_link: "https://kaos6-9.github.io/EqualsTwoMotherCareVA/",
      isFigma: true,
      isLogo:true,
      isWeb: true,
    },
    {
      name: "Interactive Guide",
      description:
          "An Interactive pregnancy guide designed to be displayed on iPads at Zydus offices to replace paperback magazines and educate new generation mothers.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: guide,
      figma_link: "https://www.figma.com/proto/dmGPHIEDkQUhC1uDV1mRiO/Pregnancy-Guide?page-id=0%3A1&type=design&node-id=1-3&viewport=650%2C246%2C0.08&t=twkulOtJ7Uwl0F1B-1&scaling=min-zoom&starting-point-node-id=1%3A3&mode=design",
      github_link: "https://github.com/kAOS6-9/interactiveguide",
      web_link: "https://kaos6-9.github.io/interactiveguide/",
      isLogo: true,
      isFigma: true,
      isWeb: true,
    },
    {
      name: "Tiyash Consulting",
      description:
        "Financial consultation website for a leading consulting firm in the life sciences industry, founded and led by Sharad Tyagi, an accomplished and innovative entrepreneur",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Consultation",
          color: "green-text-gradient",
        },
        {
          name: "SinglePageUI",
          color: "pink-text-gradient",
        },
      ],
      image: tiyashport,
      figma_link: "https://www.figma.com/proto/QEisUs2dUuFuYwtQ4vFIou/Tiyash-Consulting?page-id=0%3A1&type=design&node-id=9-149&viewport=583%2C237%2C0.06&t=nFRJolBjHmmAQuee-1&scaling=min-zoom&mode=design",
      github_link: "https://github.com/",
      isFigma: true,
    },
    {
      name: "RTPro.com",
      description:
        "A subscription based web platform for financial portfolio management. The website features a modern and minimalist design, with a clean color palette ",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Investment",
          color: "green-text-gradient",
        },
        {
          name: "CleanUI",
          color: "pink-text-gradient",
        },
      ],
      image: rtpro,
      figma_link: "https://www.figma.com/proto/sKT6DHJ9G0K9qJv4oIBCkZ/RTpro.com-Option-2?page-id=0%3A1&type=design&node-id=0-24&viewport=567%2C410%2C0.06&t=jEGYPOCJxEUFqM6v-1&scaling=min-zoom&starting-point-node-id=0%3A24&mode=design",
      github_link: "https://github.com/",
      isFigma: true,
    },
    {
      name: "Anxio: Mental Health",
      description:
        "Anxio is a subscription based mental wellness application (Rated 4.8) designed for Android. It is designed to motivate and calm the users suffering from anxiety.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "PlayStore",
          color: "green-text-gradient",
        },
        {
          name: "MobileApp",
          color: "pink-text-gradient",
        },
      ],
      image: anxioport,
      figma_link: "https://figma.com/",
      github_link: "https://github.com/",
      playstore_link:"https://play.google.com/store/apps/details/Anxio_Mental_Health_Self_care?id=com.euman.mentalhealth_common_issues",
      isPlaystore: true,
      isFigma: true,
    },
    {
      name: "Fitness Companion",
      description:
        "Designed to help users reach their fitness goals with expert's consultation. It Tracks stats like Water and Calorie Intake, Steps Count, Heart Rate, Sleep time and Weight.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Fitness",
          color: "green-text-gradient",
        },
        {
          name: "EngagingUI",
          color: "pink-text-gradient",
        },
      ],
      image: fitness,
      figma_link: "https://www.figma.com/proto/C3ypMQatNrlL0AKZjyUK2M/Fitness-App?page-id=0%3A1&type=design&node-id=1-8364&viewport=1305%2C466%2C0.08&t=n54039rWsLdOmTJm-1&scaling=min-zoom&starting-point-node-id=1%3A8376&show-proto-sidebar=1&mode=design",
      github_link: "https://github.com/",
      isFigma: true,
    },
    {
      name: "Gaming Companion",
      description:
        "A Mobile application designed to be the perfect companion for gamers. It provides news and updates related to games plus a way to chat with your gaming buddies.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Gaming",
          color: "green-text-gradient",
        },
        {
          name: "ModernUI",
          color: "pink-text-gradient",
        },
      ],
      image: gaming,
      figma_link: "https://www.figma.com/proto/OHdzUi0RmP8YbzfVYbGQK6/Gaming-App?page-id=0%3A1&type=design&node-id=4-126&viewport=682%2C183%2C0.12&t=fEv0ocDv8xf3oZuK-1&scaling=scale-down&starting-point-node-id=4%3A126&mode=design",
      github_link: "https://github.com/",
      isFigma: true,
    },
    {
      name: "EQ2 Skin Test",
      description:
        "A web application designed and developed to test skin condition of babies and give a score based on answers. It is Integrated with the live Equals Two website.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: skintest,
      figma_link: "https://figma.com/",
      github_link: "https://github.com/kAOS6-9/EqualsTwoSkinTest",
      web_link: "https://equalstwo.com/microsite/skintest/index.html",
      isLogo: true,
      isWeb: true,
    },
    
  ];
  
  export { services, experiences, projects };