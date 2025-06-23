import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteOneBooking, isLoading: isDeletingBooking } =
    useMutation({
      mutationFn: (bookingId) => deleteBooking(bookingId),

      onSuccess: () => {
        toast.success(`Booking deleted successfully`);
        queryClient.invalidateQueries({ active: true });
        
      },
      onError: () => {
        toast.error("There was an error while delete booking");
      },
    });

  return { deleteOneBooking, isDeletingBooking };
}
