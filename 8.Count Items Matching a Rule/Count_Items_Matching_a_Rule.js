

let items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];



let ruleKey = "color";
let ruleValue = "silver";

function xyz(items, ruleKey, ruleValue) {
  let detail = 0;
  let count = 0;

  if (ruleKey === "color") {
    detail++;
  }
  if (ruleKey === "name") {
    detail = 2;
  }
  for (let i of items) {
    if (i[detail] == ruleValue) {
      count++;
    }
  }
  return count;
}

console.log(xyz(items, ruleKey, ruleValue));
