import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetToDo = ({ key }) => {
  const query = useQuery({
    enabled: !!key,
    queryKey: ["toDoData"],
    queryFn: () =>
      axios.get(`http://localhost:4000/${key}`).then((res) => res.data),
  });

  return query;
};
