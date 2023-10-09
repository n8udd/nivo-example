"use client";
import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { safeColors } from "./colors";

const data = [
  {
    day: "2022-09-06",
    value: 1,
  },
  {
    day: "2022-09-22",
    value: 1,
  },
  {
    day: "2022-10-07",
    value: 1,
  },
  {
    day: "2022-10-11",
    value: 1,
  },
  {
    day: "2022-10-13",
    value: 1,
  },
  {
    day: "2022-10-18",
    value: 1,
  },
  {
    day: "2022-10-21",
    value: 1,
  },
  {
    day: "2022-11-10",
    value: 1,
  },
  {
    day: "2022-11-15",
    value: 1,
  },
  {
    day: "2022-11-21",
    value: 1,
  },
  {
    day: "2022-11-22",
    value: 1,
  },
  {
    day: "2022-11-30",
    value: 1,
  },
  {
    day: "2022-12-08",
    value: 1,
  },
  {
    day: "2022-12-09",
    value: 1,
  },
  {
    day: "2023-01-05",
    value: 1,
  },
  {
    day: "2023-01-18",
    value: 1,
  },
  {
    day: "2023-01-26",
    value: 1,
  },
  {
    day: "2023-01-27",
    value: 1,
  },
  {
    day: "2023-02-03",
    value: 1,
  },
  {
    day: "2023-02-24",
    value: 1,
  },
  {
    day: "2023-02-28",
    value: 1,
  },
  {
    day: "2023-03-01",
    value: 1,
  },
  {
    day: "2023-03-06",
    value: 1,
  },
  {
    day: "2023-03-07",
    value: 1,
  },
  {
    day: "2023-03-08",
    value: 1,
  },
  {
    day: "2023-03-13",
    value: 1,
  },
  {
    day: "2023-03-21",
    value: 1,
  },
  {
    day: "2023-03-22",
    value: 1,
  },
  {
    day: "2023-03-23",
    value: 1,
  },
  {
    day: "2023-03-30",
    value: 1,
  },
  {
    day: "2023-04-27",
    value: 1,
  },
  {
    day: "2023-05-12",
    value: 1,
  },
  {
    day: "2023-05-23",
    value: 1,
  },
  {
    day: "2023-05-26",
    value: 1,
  },
  {
    day: "2023-06-13",
    value: 1,
  },
  {
    day: "2023-06-19",
    value: 1,
  },
  {
    day: "2023-06-26",
    value: 1,
  },
  {
    day: "2023-07-12",
    value: 1,
  },
  {
    day: "2022-09-29",
    value: 2,
  },
  {
    day: "2022-10-19",
    value: 2,
  },
  {
    day: "2022-11-09",
    value: 2,
  },
  {
    day: "2022-11-14",
    value: 2,
  },
  {
    day: "2022-11-18",
    value: 2,
  },
  {
    day: "2022-11-24",
    value: 2,
  },
  {
    day: "2023-02-06",
    value: 2,
  },
  {
    day: "2023-02-10",
    value: 2,
  },
  {
    day: "2023-02-16",
    value: 2,
  },
  {
    day: "2023-02-23",
    value: 2,
  },
  {
    day: "2023-03-09",
    value: 2,
  },
  {
    day: "2023-03-29",
    value: 2,
  },
  {
    day: "2023-04-26",
    value: 2,
  },
  {
    day: "2023-05-19",
    value: 2,
  },
  {
    day: "2022-10-12",
    value: 3,
  },
  {
    day: "2022-11-17",
    value: 3,
  },
  {
    day: "2022-12-01",
    value: 3,
  },
  {
    day: "2023-03-10",
    value: 3,
  },
  {
    day: "2023-02-22",
    value: 4,
  },
  {
    day: "2022-10-06",
    value: 5,
  },
  {
    day: "2023-04-04",
    value: 14,
  },
  {
    day: "2023-07-18",
    value: 31,
  },
  {
    day: "2023-07-04",
    value: 40,
  },
  {
    day: "2023-07-11",
    value: 85,
  },
];

const maxValue = Math.max(...data?.map((item) => item.value));

const Home = () => {
  return (
    <main>
      <div
        style={{
          height: 800,
          width: "100%",
        }}
      >
        <h1>Test</h1>
        <ResponsiveCalendar
          title="People Seen Per Day"
          data={data}
          from={"2022-09-01"}
          to={"2023-10-06"}
          emptyColor="#eeeeee"
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          colorScale={(value) => {
            const shade = Math.round((value / maxValue) * 100);
            const color = safeColors[shade];
            return color;
          }}
        />
      </div>
    </main>
  );
};

export default Home;
