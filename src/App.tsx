import { FC, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound.tsx";
import Header from "./common/Header/Header.tsx";
import { AboutData } from "./common/types/AboutData.tsx";
import ContactData from "./common/types/ContactData.tsx";
import { HomeData } from "./common/types/HomeData.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Home from "./pages/Home/Home.tsx";
import Project from "./pages/Project/Project.tsx";
import Projects from "./pages/Projects/Projects.tsx";

const App: FC = () => {

  useEffect(() => {
    const userTheme = window.localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    document.body.classList.add(userTheme || systemTheme)
    localStorage.setItem('theme', userTheme || systemTheme)
  }, []);

  const ProjectOr404 = () => {
    const { slug } = useParams();
    if (slug && userData.slugs.length > 0 && userData.slugs.some((s: { slug: string }) => s.slug === slug)) {
      return <Project userData={userData} />;
    } else {
      return <NotFound />;
    }
  };

  const userData = useMemo(() => ({
    name: "Prashant Nigam",
    email: "prashantnigam490@gmail.com",
    phone: "(123)-456-7890",
    company: "Cultural News Inc.",
    location: "Gwalior, Madhya Pradesh",
    about: "Flutter Developer with extensive experience in Software Engineering and a comprehensive skill set including Dart, Django, Python, and Firebase.",
    skills: ["Flutter", "Django", "Django Rest Framework", "Python", "Java", "JavaScript", "MySQL", "Flask", "Kotlin", "NodeJs", "Swift"],
    projects: [
      {
        "name": "Nerdy News",
        "description": "The Cultural News is the ultimate News App for comic book and superhero enthusiasts.", "languages": ["Firebase", "Supabase", "Django", "Flutter", "Rest API"], 
        "updatedAt": "2024-02-11T16:30:24.603Z", 
        "image": "https://images.codefoli.com/295-projects-image-437", 
        "id": "437", 
        "slug": "nerdy-news",
        "link": "https://github.com/Prashant4900/nerdy-news",
      },
      {
        "name": "YouTube Search",
        "description": "API to fetch the latest videos sorted in reverse chronological order of their publishing date-time.",
        "languages": ["Python", "Django", "Django Rest Framework", "Youtube API"],
        "updatedAt": "2023-12-25T17:40:11.659Z",
        "image": "https://images.codefoli.com/295-projects-image-411",
        "id": "411",
        "slug": "youtube-search",
        "link": "https://github.com/Prashant4900/Django-Youtube-Api"
      },
      {
        "name": "Apni Shop",
        "description": "This is a very simple e-commerce website built with Django.",
        "languages": ["Python", "Django"],
        "updatedAt": "2023-12-25T17:43:29.691Z",
        "image": "https://images.codefoli.com/295-projects-image-412",
        "id": "412",
        "slug": "apni-shop",
        "link": "https://github.com/Prashant4900/ApniShop"
      },
      {
        "name": "To-Do Rest API",
        "description": "Simple Django app to manage todo list.",
        "languages": ["Python", "Django"],
        "updatedAt": "2023-12-25T17:58:08.431Z",
        "image": "https://images.codefoli.com/295-projects-image-414",
        "id": "414", "slug": "to-do-rest-api",
        "link": "https://github.com/Prashant4900/todo-rest"
      },
      {
        "name": "Flutter Const",
        "description": "A Flutter package which lots of constant widgets and functions which widely used in the development",
        "languages": ["Dart", "Flutter"],
        "updatedAt": "2023-12-25T18:30:48.876Z",
        "image": "https://images.codefoli.com/295-projects-image-415",
        "id": "415",
        "slug": "flutter-const",
        "link": "https://pub.dev/packages/flutter_const"
      },
      {
        "name": "open stream mobile",
        "description": "Description",
        "languages": ["Dart", "Flutter", "Strapi"],
        "updatedAt": "2023-12-25T17:54:56.731Z",
        "image": "https://images.codefoli.com/295-projects-image-413",
        "id": "413",
        "slug": "open-stream-mobile",
        "link": "https://github.com/Prashant4900/open_stream_mobile"
      },
      {
        "name": "Django Bricks",
        "description": "Collection of eazy django bricks which can be used to build your django project.", "languages": ["Python", "Django"], "updatedAt": "2023-12-25T18:35:19.236Z", "image": "https://images.codefoli.com/295-projects-image-416", "id": "416", "slug": "django-bricks",
        "link": "https://github.com/EasyFlutterApps/django_bricks"
      },
    ],
    work: [{ "id": 222, "company": "Shivaansh Essentials", "position": "Flutter Developer Intern", "startDate": "05/10/2020", "endDate": "28/02/2021", "description": "", "orderId": 3, "image": "https://images.codefoli.com/295-job-image-upload-222" }, { "id": 220, "company": "Tata Consultancy Services", "position": "ASE - Flutter Developer", "startDate": "16/04/2022", "endDate": "current", "description": "", "orderId": 1, "image": "https://images.codefoli.com/295-job-image-upload-220" }, { "id": 221, "company": "Aurd Infotech", "position": "Flutter Developer", "startDate": "01/05/2021", "endDate": "30/07/2021", "description": "", "orderId": 2, "image": "https://images.codefoli.com/295-job-image-upload-221" }],
    role: "USER",
    profession: "Flutter Developer",
    services: ["MOBILE_DEVELOPMENT", "API_DEVELOPMENT", "CODE_REVIEW", "WEB_DEVELOPMENT"],
    slugs: [
      {
        "slug": "nerdy-news",
        "header": "Nerdy News",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.",
        "about": "The Cultural News is the ultimate News App for comic book and superhero enthusiasts.",
        "image": "https://images.codefoli.com/295-project-content-437",
        "overview": "Overview",
        "platforms": "Android",
        "link": "https://play.google.com/store/apps/details?id=news.nerdy.mobile"
      },
      {
        "slug": "youtube-search",
        "header": "YouTube Search",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.",
        "about": "An API to fetch the latest videos sorted in reverse chronological order of their publishing date-time from YouTube for music query in a paginated response.",
        "image": "https://images.codefoli.com/295-project-content-411",
        "overview": "Overview",
        "platforms": "Web, Android, iOS",
        "link": "https://github.com/Prashant4900/Django-Youtube-Api"
      },
      {
        "slug": "apni-shop", "header": "Apni Shop", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.", "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.", "image": "https://images.codefoli.com/295-project-content-412", "overview": "Overview", "platforms": "Web", "link": "https://github.com/Prashant4900/ApniShop"
      },
      {
        "slug": "to-do-rest-api",
        "header": "To-Do Rest API",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.",
        "about": "Simple Django app to manage todo list.",
        "image": "https://images.codefoli.com/295-project-content-414",
        "overview": "Overview",
        "platforms": "Web, Rest API",
        "link": "https://github.com/Prashant4900/todo-rest"
      },
      {
        "slug": "flutter-const",
        "header": "Flutter Const",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.",
        "about": "A Flutter package which lots of constant widgets and functions which widely used in the development", "image": "https://images.codefoli.com/295-project-content-415",
        "overview": "Overview",
        "platforms": "Web, Android, iOS",
        "link": "https://pub.dev/packages/flutter_const"
      },
      {
        "slug": "open-stream-mobile",
        "header": "open stream mobile\n",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.",
        "about": "its simple streaming app which take videos from youtube\n\n",
        "image": "https://images.codefoli.com/295-project-content-413",
        "overview": "Overview",
        "platforms": "Web, Android, iOS",
        "link": "https://github.com/Prashant4900/open_stream_mobile"
      },
      {
        "slug": "django-bricks",
        "header": "Django Bricks",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.",
        "about": "Collection of eazy django bricks which can be used to build your django project. These bricks are ready to deploy on Heroku by just some small changes.",
        "image": "https://images.codefoli.com/295-project-content-416",
        "overview": "Overview",
        "platforms": "Web, Backend",
        "link": "https://github.com/EasyFlutterApps/django_bricks"
      },
    ]
  }),
    []
  );

  const homeData = useMemo(
    () => ({
      headerOne: "I'm Prashant Nigam, a Flutter Developer from Gwalior, Madhya Pradesh",
      descriptionOne: "Flutter Developer with extensive experience in Software Engineering and a comprehensive skill set including Dart, Django, Python, and Firebase.",
      profileImage: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg",
      sections: [{
        type: "SKILL",
        details: {
          headerOne: "My broad set of services and skills",
          order: 1
        }
      },
      {
        type: "RESUME",
        details: {
          headerOne: "Take a look at my resume",
          order: 2
        }
      },
      ],
    }),
    []
  );

  const aboutData = useMemo(
    () => ({
      headerOne: "Hello, I'm Prashant Nigam",
      iconOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png",
      iconTwo: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png",
      iconThree: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b52d3639fb5250039e574_my-story-image-paperfolio-webflow-template.png",
      headerTwo: "Who I am?",
      descriptionOne: "Flutter Developer with extensive experience in Software Engineering and a comprehensive skill set including Dart, Django, Python, and Firebase.",
      descriptionTwo: "Hello, I'm Prashant Nigam, a seasoned Software Engineer with extensive experience in the Computer Software Industry. My expertise lies in Flutter/Dart, complemented by a solid background in web technologies. I boast a robust history of conceptualizing, developing, and implementing software solutions for Android, iOS, Web, and diverse platforms.  Proficient in multiple programming languages and frameworks, my primary focus is on Flutter/Dart. ",
      sections: [
        {
          type: "SKILL",
          details: {
            headerOne: "My broad set of services and skills",
            order: 1
          }
        },
        {
          type: "RESUME",
          details: {
            headerOne: "Take a look at my resume",
            order: 2
          }
        },
      ],
    }),
    []
  );

  const projectsPageData = useMemo(
    () => ({
      headerOne: "Projects",
      descriptionOne: "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to packages. Each project brings its unique challenges and opportunities."
    }),
    []
  );

  const contactData = useMemo(
    () => ({
      headerOne: "Contact Me",
      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
      sections: [
      ],
    }),
    []
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home userData={userData} pageData={homeData as HomeData} />}
        />
        <Route
          path="/contact"
          element={
            <Contact
              pageData={contactData as ContactData}
              userData={userData}
            />
          }
        />
        <Route
          path="/projects"
          element={<Projects pageData={projectsPageData} userData={userData} />}
        />
        <Route
          path="/about"
          element={
            <About pageData={aboutData as AboutData} userData={userData} />
          }
        />
        <Route path="/:slug" element={<ProjectOr404 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;