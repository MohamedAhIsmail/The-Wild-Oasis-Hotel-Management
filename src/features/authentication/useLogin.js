import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogining } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Login in Successfully");
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLogining };
}
