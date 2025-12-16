const navLinks = [
                    {
                        id: 1, 
                        name: "Portfolio",
                    },

                    {
                        id: 2,
                         name: "Contact",
                        },

                    {
                        id: 3,
                         name: "Projects",
                        },
                ];




const navIcons = [
                    {
                        id: 1, 
                        img: "/icons/wifi.svg",},

                    {
                        id: 2,
                         img: "/icons/search.svg",
                        },
                    {
                        id: 3,
                         img: "/icons/user.svg",
                        },

                    {
                        id: 4,
                         img: "/icons/mode.svg",
                        },

                ];

                const dockApps = [
                { 
                    id: "Finder",
                     name: "Portfolio", // was "Finder "
                      icon: "finder.png",
                      canOpen: true,
                    },

                    { 
                        id: "Safari", name: "Articles", // was "Safari"
                         icon: "safari.png",
                         canOpen: true ,
                        },
                       { 
                        id: "photos",
                         name: "Gallery", // was "Photos"
                          icon: "photos.png",
                          canOpen: true ,
                        },
                       
                       { 
                        id:  "contacts", 
                        name: "Contact", // was "Contacts"
                         canOpen: true ,
                          icon: "contact.png",
                        },
                        { 
                        id:  "terminal", 
                        name: "Skills", // was "Contacts"
                         canOpen: true ,
                          icon: "terminal.png",
                        },
                        { 
                        id:  "trash", 
                        name: "Archive", // was "Trash"
                         canOpen: false ,
                          icon: "trash.png",
                        },
                    

];
const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];
const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];
 



export { navLinks, navIcons, dockApps,techStack,
   blogPosts,INITIAL_Z_INDEX, WINDOW_CONFIG };