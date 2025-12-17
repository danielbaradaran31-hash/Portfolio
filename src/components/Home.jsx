import { locations } from "#constants";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window.js";

const prijects = locations.work?.children ?? [];





const Home = () => {
    const { setActiveLocation } = useWindowStore();
    const {openWindows} = useWindowStore();


    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindows("finder");
    };





    useGSAP(() => {
        Draggable.create(".folder");
    }, []);
            
  return  (
    <section id="home">
        <ul>
        {prijects.map((project) => (
            <li key={project.id}
                className={clsx("group folde", project.windowPosition)}
                onDoubleClick={() => handleOpenProjectFinder(project)}
            >
                <img src="/images/folder.png" alt={project.name}/>
                <p>{project.name}</p>
                </li>
        ))}
        </ul>
        </section>

       
       

  );
  
};

export default Home;