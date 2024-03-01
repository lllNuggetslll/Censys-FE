import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useAddToDo = () => {
  const queryClient = useQueryClient();

  const addToDo = useMutation({
    mutationFn: (toDo) => axios.post(`http://localhost:4000/`, toDo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["toDosData"],
      });
    },
  });

  return addToDo;
};
