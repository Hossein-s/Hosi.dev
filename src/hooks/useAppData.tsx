import { AppData } from "@/types/AppData";
import { createContext, useContext } from "react";

const context = createContext<AppData | null>(null);
export const AppDataProvider = context.Provider;
export const useAppData = (): AppData => {
  return useContext(context)!;
};
