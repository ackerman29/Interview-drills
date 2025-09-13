const http = require("k6/http");
const { check, sleep } = require("k6");

exports.options = {
  vus: 10,         // 10 virtual users
  duration: "10s", // 10 seconds
};

exports.default = function () {
  const res = http.get("http://localhost:4000/api/drills"); // your route
  check(res, {
    "status is 200": (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500
  });
  sleep(1);
};
