import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // number of bookings
  const numBookings = bookings.length;
  // total sales
  const sales = bookings.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0);

  //total check ins
  const checkins = confirmedStays.length;

  //occupancy rate
  //num checked in nights  / all available nights
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
        <Stat
          title="Bookings"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={numBookings}
        />
        <Stat
          title="Sales"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sales)}
        />
        <Stat
          title="Check ins"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={checkins}
        />
        <Stat
          title="Occupancy rate"
          color="yellow"
          icon={<HiOutlineChartBar />}
          value={Math.round(occupation * 100) + "%"}
        />
    </>
  );
}

export default Stats;
