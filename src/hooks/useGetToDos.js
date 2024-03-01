import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetToDos = () => {
  const query = useQuery({
    queryKey: ["toDosData"],
    queryFn: () => axios.get("http://localhost:4000/").then((res) => res.data),
  });

  return query;
};
