import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index.js";


const useWindowStore = create(
    immer((set) =>  ({
    windows: WINDOW_CONFIG,
    nextZIndex:  INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) => {
        const window = state.windows[windowKey] ;
        if(!window) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        state.nextZIndex ++;
        win.data = data ?? window.data;
    }),
   
    closeWindow: (windowKey) => set((state) => {
         const window = state.windows[windowKey] ;
        if(!window) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
       
        win.data = null;
    }),
   
    focusWindow: (windowKey, data = null) => set((state) => {
         const window = state.windows[windowKey] ;
      
        win.zIndex = state.nextZIndex++;
        
    }),
    
})),
);


export default useWindowStore;
