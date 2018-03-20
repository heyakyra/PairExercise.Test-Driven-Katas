const wrap = (line, maxLen) => {
  const words = line.split(" ");
  let result = "";

  let newLine = "";
  words.forEach(word => {
    if ((newLine + " " + word).length <= maxLen && newLine !== "") {
      newLine += " " + word;
    } else if (newLine === "") {
      newLine += word;
    } else {
      result += newLine + "\n";
      newLine = word;
    }
  });
  result += newLine;
  return result;
};

module.exports = wrap;
