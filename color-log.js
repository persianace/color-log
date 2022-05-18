const colorLog = (color, backgroundColor, modifier, ...args) => {
  const modifiers = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
  };
  const colors = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };
  const backgroundColors = {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
  };
  let colorCode;
  colors[color]
    ? (colorCode = colors[color])
    : console.log(`${colors.red} 🚫 color ${color} not found`);

  let backgroundColorCode;
  backgroundColors[backgroundColor]
    ? (backgroundColorCode = backgroundColors[backgroundColor])
    : console.log(
        `${colors.red} 🚫 background-color ${backgroundColor} not found`,
      );

  let modifierCode;
  modifiers[modifier]
    ? (modifierCode = modifiers[modifier])
    : console.log(`${colors.red} 🚫 modifier ${modifier} not found`);

  return console.log(
    colorCode,
    backgroundColorCode,
    modifierCode,
    ...args,
    modifiers.reset,
  );
};

module.exports = colorLog;
