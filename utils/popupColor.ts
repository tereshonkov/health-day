function getPressureColor(up: number, down: number) {
  if (up < 90 || down < 50) return "red";
  if (up >= 140 || down >= 90) return "red";
  if ((up >= 130 && up <= 139) || (down >= 85 && down <= 89)) return "yellow";
  if ((up >= 90 && up <= 99) || (down >= 50 && down <= 59)) return "blue";
  if (up >= 100 && up <= 129 && down >= 60 && down <= 84) return "green";
  return "yellow";
}

function getPulseColor(pulse: number) {
  if (pulse < 50) return "red";
  if (pulse > 110) return "red";
  if (pulse >= 91 && pulse <= 110) return "yellow";
  if (pulse >= 50 && pulse <= 59) return "blue";
  if (pulse >= 60 && pulse <= 90) return "green";
  return "yellow";
}

function mergeColor(pressureColor: string, pulseColor: string) {
  const priority = ["red", "yellow", "blue", "green"];
  return priority[Math.min(priority.indexOf(pressureColor), priority.indexOf(pulseColor))];
}

function getColor(pressure: string, pulse: string) {
  const [up, down] = pressure.split("/").map(n => parseInt(n, 10));
  const pulseValue = parseInt(pulse, 10);

  const pressureColor = getPressureColor(up, down);
  const pulseColor = getPulseColor(pulseValue);

  return mergeColor(pressureColor, pulseColor);
}

export default { getColor };