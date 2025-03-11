import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import MyForm from "./components/MyForm";
import { Temporal } from "@js-temporal/polyfill";

const App = () => {
  // const date = new Date("2028-03-01T12:00:00Z");
  // console.log(date.toString());

  // const date = new Date(2023, 2, 1); // Ожидаем март, но получаем февраль
  // console.log(date); // 2 (март), но на самом деле в Date месяцы начинаются с 0

  // const today = Temporal.PlainDate.from("2023-02-01");
  // console.log(today.toString());

  // const time = Temporal.PlainTime.from("14:30:00");
  // console.log(time.toString()); // "14:30:00"

  const dateTime = Temporal.PlainDateTime.from("2024-03-05T14:30:00");
  console.log(dateTime.toString());
  // "2024-03-05T14:30:00"

  // const zonedDateTime = Temporal.ZonedDateTime.from({
  //   year: 2024,
  //   month: 3,
  //   day: 5,
  //   hour: 14,
  //   timeZone: "Europe/Moscow",
  // });

  // console.log(zonedDateTime.toString()); // "2024-03-05T14:00:00+03:00[Europe/Moscow]"

  // const td = Temporal.PlainDate.from("2025-03-11");
  // const nextweek = td.add({ days: 7 });

  // console.log(nextweek.toString());

  // const start = Temporal.PlainDate.from("2024-03-01");
  // const end = Temporal.PlainDate.from("2024-03-10");

  // const diff = end.since(start);

  // console.log(diff);

  // const date = Temporal.PlainDate.from("2024-03-05");
  // console.log(date.toLocaleString("ru-RU"));
  // console.log(date.toLocaleString("en-US"));

  useEffect(() => {
    const birthDateString = prompt("Enter ure date of birth YYYY-MM-DD");

    const birthDate = Temporal.PlainDate.from(birthDateString);

    const today = Temporal.Now.plainDateISO();

    const diff = today.since(birthDate).days;

    const daysOfWeek = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ];

    const birthDayOfWeek = daysOfWeek[birthDate.dayOfWeek - 1];

    console.log(`Вы родились в ${birthDayOfWeek}.`);
    console.log(`С момента вашего рождения прошло ${diff} дней.`);
  }, []);

  return <MyForm />;
};

export default App;
