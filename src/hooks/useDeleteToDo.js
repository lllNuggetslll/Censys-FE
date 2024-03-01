import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteToDo = () => {
  const queryClient = useQueryClient();

  const deleteToDo = useMutation({
    mutationFn: (key) => axios.delete(`http://localhost:4000/${key}`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["toDosData"],
      });
    },
  });

  return deleteToDo;
};
