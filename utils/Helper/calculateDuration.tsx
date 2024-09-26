import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

export interface DateRange {
  start: string | null;
  end: string | null;
}

export const calculateDuration = (dateRange: DateRange): string => {
  const start = dateRange.start;
  const end = dateRange.end;

  dayjs.extend(RelativeTime);
  return end ? dayjs(end).from(dayjs(start), true) : dayjs().from(dayjs(start), true);
};
