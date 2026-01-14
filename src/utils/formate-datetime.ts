import {
  format,
  differenceInMinutes,
  formatDistanceToNow as dateFnsFormatDistToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);
  return format(date, "dd/MM/yyyy 'às' HH'h'mm", { locale: ptBR });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);
  const now = new Date();

  const diffInMinutes = differenceInMinutes(now, date);

  if (diffInMinutes >= 0) {
    return dateFnsFormatDistToNow(date, {
      addSuffix: true,
      locale: ptBR,
    });
  }

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

const rawDate = "2026-01-12T00:33:56.907Z";
console.log(rawDate);
console.log(formatDistanceToNow(rawDate));
