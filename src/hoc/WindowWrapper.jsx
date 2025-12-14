import useWindowStore from "#store/window.js";
import { useRef } from "react";


const WindowWrapper = (Component, widowKey) => {
    const Wrapped = (props) => {
    const {focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

   
    return (
    <section id={widowKey}  ref={ref}  style={{zIndex}} 
    className="abdolute">
        <Component {...props} />
    </section>

    );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || 
        Component.name || "Component"})`;

  return 
    Wrapped;

};

export default WindowWrapper;