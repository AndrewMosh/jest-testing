//

function steps_conv(steps) {
  let index = (steps * 0.0008045).toFixed(2);
  let index1 = (index * 55).toFixed(2);
  if (steps != 0 && steps > 0) {
    let output = `Пройдено ${index} км и потрачено ${index1} калорий`;
    return output;
  } else {
    return `Введите число больше 0`;
  }
}

module.exports = steps_conv;
