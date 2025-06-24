import { useMutation } from "@tanstack/react-query";
import { signup as singupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      singupApi({ email, password, fullName }),
    onSuccess: (user) => {
      toast.success(
        "Account created successfully! Please, verify the new account from user's email address"
      );
    },
    onError: (error) => {
      toast.error(`${error}`);
    },
  });

  return { signup, isLoading };
}
