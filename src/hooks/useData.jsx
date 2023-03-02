import { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

export default function useData() {
  const context = useContext(DataContext);
  return context;
}
