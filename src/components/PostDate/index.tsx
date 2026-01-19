import { formatDatetime, formatDistanceToNow } from "@/utils/formate-datetime";

type PostDateProps = {
  date: string;
};

export default function PostDate({ date }: PostDateProps) {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={date}
      title={formatDistanceToNow(date)}
    >
      {formatDatetime(date)}
    </time>
  );
}
