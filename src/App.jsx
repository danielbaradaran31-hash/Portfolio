import  gsap  from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Dock, Navbar, Welcome, Home } from '#components';
import { Terminal,Safari, Resume,Finder, Text , Image, Contact, Photos} from '#windows';



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
      <Home/>
      <Photos/>
    </main>
  );
};

export default App;