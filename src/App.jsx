import  gsap  from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Dock, Navbar, Welcome } from '#components';
import { Terminal,Safari, Resume,Finder, Text , Image, Contact} from '#windows';


gsap.registerPlugin(Draggable);

const App = () => {
  // console.log({ Dock, Navbar, Welcome,Terminal,Safari, Resume,Finder, Text});
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
    </main>
  );
};

export default App;