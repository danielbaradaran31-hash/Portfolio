import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { location } from "#constants/index.js";

const DEFAULT_LOCATION = location.work;

const useLocationStore = create(immer((set) => ({
   activelocation: DEFAULT_LOCATION ,

   setActiveLocation: (location = null) => set((state) => {
       state.activelocation = location;
   }),

resetActiveLocation: () => set((state) => {
       state.activelocation = DEFAULT_LOCATION;
   })

})),
);

export default useLocationStore;
