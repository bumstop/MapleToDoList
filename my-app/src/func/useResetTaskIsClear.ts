import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  resetDailyClear,
  resetMonthlyClear,
  resetWeeklyByMondayClear,
  resetWeeklyByThursdayClear,
} from "../redux/characterListSlice";

export const useResetTaskIsClear = () => {
  const dispatch = useDispatch();
  const DAILY_RESET_KEY = "dailyResetTime";
  const WEEKLY_THURSDAY_RESET_KEY = "weeklyThursdayResetTime";
  const WEEKLY_MONDAY_RESET_KEY = "weeklyMondayResetTime";
  const MONTHLY_RESET_KEY = "monthlyResetTime";

  const getLastResetTime = (key: string) => {
    const lastReset = localStorage.getItem(key);
    return lastReset ? new Date(lastReset) : null;
  };

  const setLastResetTime = (key: string, time: Date) => {
    localStorage.setItem(key, time.toISOString());
  };

  useEffect(() => {
    const now = new Date();
    // const myTime = new Date("January 8 1970 00:50:00 GMT+0900 (한국 표준시)");
    // const myWeeknum = Math.floor(
    //   (myTime.getTime()) / (7 * 24 * 60 * 60 * 1000)
    // );
    // console.log(myTime, myWeeknum);

    // 일일컨텐츠 초기화
    const dailyLastReset = getLastResetTime(DAILY_RESET_KEY);
    if (!dailyLastReset || now.getDate() !== dailyLastReset.getDate()) {
      dispatch(resetDailyClear());
      setLastResetTime(DAILY_RESET_KEY, now);
    }

    // 주간컨텐츠 초기화
    // 주간(월) 초기화
    const weeklyLastResetByMonday = getLastResetTime(WEEKLY_MONDAY_RESET_KEY);
    const weekNumberByMonday = Math.floor(
      (now.getTime() + 4 * 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000)
    );
    const LastResetWeekNumberByMonday = Math.floor(
      (now.getTime() + 4 * 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000)
    );
    // weekNumber 는 금요일 기준으로 바뀜, 월요일을 기준으로 잡기위해 getTime에서 4일을 더해줌

    if (!weeklyLastResetByMonday || weekNumberByMonday !== LastResetWeekNumberByMonday) {
      dispatch(resetWeeklyByMondayClear());
      setLastResetTime(WEEKLY_MONDAY_RESET_KEY, now);
    }

    // 주간(목) 초기화
    const weeklyLastResetByThursday = getLastResetTime(WEEKLY_THURSDAY_RESET_KEY);
    const weekNumberByThursday = Math.floor(
      (now.getTime() + 1 * 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000)
    );
    const LastResetWeekNumberByThursday = Math.floor(
      (now.getTime() + 1 * 24 * 60 * 60 * 1000) / (7 * 24 * 60 * 60 * 1000)
    );
    // weekNumber 는 금요일 기준으로 바뀜, 월요일을 기준으로 잡기위해 getTime에서 1일을 더해줌

    if (!weeklyLastResetByThursday || weekNumberByThursday !== LastResetWeekNumberByThursday) {
      dispatch(resetWeeklyByThursdayClear());
      setLastResetTime(WEEKLY_THURSDAY_RESET_KEY, now);
    }

    // 월간컨텐츠 초기화
    const monthlyLastReset = getLastResetTime(MONTHLY_RESET_KEY);
    if (!monthlyLastReset || now.getMonth() !== monthlyLastReset.getMonth()) {
      dispatch(resetMonthlyClear());
      setLastResetTime(MONTHLY_RESET_KEY, now);
    }
  }, [dispatch]);
};
