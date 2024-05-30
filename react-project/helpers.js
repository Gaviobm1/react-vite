export function getCountdownTime(target) {
  let timeLeft = Math.floor((new Date(target).getTime() - Date.now()) / 1000);
  const days = Math.floor(timeLeft / (60 * 60 * 24));
  timeLeft -= days * (60 * 60 * 24);
  const hours = Math.floor(timeLeft / (60 * 60));
  timeLeft -= hours * (60 * 60);
  const minutes = Math.floor(timeLeft / 60);
  timeLeft -= minutes * 60;
  const seconds = Math.floor(timeLeft);
  return [days, hours, minutes, seconds];
}
