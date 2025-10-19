export function montaUrlIcone(codigoIcone: string) {
  let iconUrl: string = import.meta.env.VITE_ICON_URL;
  return iconUrl.concat("", codigoIcone, ".png");
}

export function converteKelvinCelsius(temperaturaKelvin: number) {
  const celsius = temperaturaKelvin - 273.15;
  return `${celsius.toFixed(2).replace('.', ',')}°`;
}

export function getDateFromTimeStamp(timestampInSeconds: number) {
  const date = new Date(timestampInSeconds * 1000);
  let dayOfMonth = date.getDate() > 8 ? date.getDate().toString() : `0${date.getDate()}`;
  let month = date.getMonth() > 8 ? (date.getMonth() + 1).toString() : `0${date.getMonth()+1}`;
  return dayOfMonth.concat("/", month, "/", date.getFullYear().toString());
}

export function getHoursFromTimeStamp(timestampInSeconds: number) {
  const date = new Date(timestampInSeconds * 1000);
  let hour = date.getHours() > 9 ? date.getHours().toString() : `0${date.getHours()}`;
  let minute = date.getMinutes() > 9 ? date.getMinutes().toString() : `0${date.getMinutes()}`;
  return hour.concat(":", minute);
}
