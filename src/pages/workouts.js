import React, { useEffect, useState } from "react";
import { axiosInstance } from "../services";
import styled from "styled-components";
import { DateTime } from "luxon";
import map from "lodash.map";

import ListFilter from "../components/ListFilter/ListFilter";

const WorkoutsGrid = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(14, auto);
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(14, 1fr);
`;

const CalendarItem = styled.div`
  height: 80px;
  border: 1px solid black;
`;

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutFilter, setWorkoutFilter] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/api/workouts`)
      .then(res => {
        setWorkouts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const beginningOfWeek = DateTime.local().startOf("week");

  const week = Array.from({ length: 7 })
    .map((_, i) => beginningOfWeek.plus({ day: i }))
    .map(day =>
      Array.from({ length: 14 }).map((el, i) => day.plus({ hours: i + 8 }))
    )
    .flat();

  const scheduleHours = Array.from({ length: 14 }).map((el, i) =>
    DateTime.local()
      .startOf("day")
      .plus({ hours: i + 8 })
  );

  const allSchedules = workouts
    .filter(workout => {
      if (workoutFilter === "") return true;
      return workout.name === workoutFilter;
    })
    .map(workout => workout.schedules)
    .flat();

  const allWorkoutTitles = map(workouts, "name");

  return (
    <div>
      <ListFilter
        options={allWorkoutTitles}
        setFilter={filter => setWorkoutFilter(filter)}
      />
      <WorkoutsGrid>
        <HoursGrid>
          <CalendarItem> HOUR / DAY </CalendarItem>
          {scheduleHours.map(hour => (
            <CalendarItem>
              {hour.toLocaleString(DateTime.DATETIME_SHORT)}
            </CalendarItem>
          ))}
        </HoursGrid>
        <CalendarGrid>
          <CalendarItem> Monday </CalendarItem>
          <CalendarItem> Tuesady </CalendarItem>
          <CalendarItem> Wed </CalendarItem>
          <CalendarItem> Thu </CalendarItem>
          <CalendarItem> Fri </CalendarItem>
          <CalendarItem> SAt </CalendarItem>
          <CalendarItem> Sun </CalendarItem>

          {week.map((date, i) => {
            const schedules = allSchedules.filter(schedule => {
              const scheduleStart = DateTime.fromISO(schedule.start);

              return (
                scheduleStart >= date && scheduleStart < date.plus({ hours: 1 })
              );
            });

            return (
              <CalendarItem>
                {schedules.map(schedule => {
                  return (
                    <div>
                      {schedule.title}
                      <button> BOOK </button>
                    </div>
                  );
                })}
              </CalendarItem>
            );
          })}
        </CalendarGrid>
      </WorkoutsGrid>
    </div>
  );
};

export default Workouts;
