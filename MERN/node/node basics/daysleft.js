
const todayInput = process.argv[2];  
const targetInput = process.argv[3]; 

const today = new Date(todayInput);
const target = new Date(targetInput);


const timeDiff = target - today;


const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


if (isNaN(dayDiff)) {
  console.log("Please enter valid dates in YYYY-MM-DD format.");
} else if (dayDiff > 0) {
  console.log(`Days remaining: ${dayDiff}`);
} else if (dayDiff === 0) {
  console.log("Today is the target date!");
} else {
  console.log(`The target date passed ${Math.abs(dayDiff)} day(s) ago.`);
}
