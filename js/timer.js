function showTime() {
  const date = new Date();
  return (
    date.getHours() +
    "HRS:" +
    date.getMinutes() +
    "Mins:" +
    date.getSeconds() +
    "secs"
  );
}

function showSessionExpire() {
  console.log("ACtivity -B yor session expired " + showTime());
}

console.log("Activity - A Trigerring Activity - B at : " + showTime());
setTimeout(showSessionExpire, 5000);
console.log(
  "Activity- A triggerd Activity- B at  " +
    showTime() +
    "  will be execute after 5 seconds"
);
