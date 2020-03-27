var Stress = require("ddos-stress");

// Create new instance of DDoS Stress
var stress = new Stress();

var target = process.argv.slice(2);

const total = 10;

// Run stress on server
if (target.length > 0) {
  console.log(`Sending ${total} concurrent requests to ${target}`);
  stress.run(target[0], total);
} else {
  console.log("Target not provided");
}
