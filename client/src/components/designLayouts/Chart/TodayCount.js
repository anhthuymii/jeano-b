import React from "react";

const TodayCount = ({ todayRevenue, todayOrderCount }) => {
  return (
    <div>
      <p>Total Revenue: {todayRevenue}</p>
      <p>Number of Orders: {todayOrderCount}</p>
    </div>
  );
};

export default TodayCount;
