//Acción Global
import { create } from "zustand";

export const useToggleText= create((set)=>({
    //Estado Incial (falso)
    mostrar: false,
    //Cambia de estado de falso a verdadero
    toggle: () => set((state) => ({mostrar:!state.mostrar})),
}));