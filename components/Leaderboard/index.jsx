import React from "react";
import BadgeCarousel from "./BadgeCarousel";
import PointsProgressBar from "./PointsProgressBar";
import WeeklyCompetition from "./WeeklyCompetition";
import Leaderboard from "./Leaderboard";

const index = () => {
  return (
    <>
      <BadgeCarousel />
      <PointsProgressBar />
      <WeeklyCompetition />
      <Leaderboard />
    </>
  );
};

export default index;
