const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");
const Drill = require("../models/Drill");

describe("Health Check", () => {
  it("should return 200 OK on GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});


describe("Drills API", () => {
 it("should return all drills from the database", async () => {
  const res = await request(app).get("/api/drills");

  expect(res.statusCode).toBe(200);

  // If your API returns { drills: [...] }
  const drills = res.body.drills || res.body.data || res.body; 
  expect(Array.isArray(drills)).toBe(true);
  expect(drills.length).toBeGreaterThan(0);

  const drill = drills[0];
expect(drill).toHaveProperty("_id");
expect(drill).toHaveProperty("title");
expect(drill).toHaveProperty("difficulty");
expect(drill).toHaveProperty("questions");
expect(drill).toHaveProperty("tags");
expect(Array.isArray(drill.questions)).toBe(true);
});
});



afterAll(async () => {
  await mongoose.connection.close();
});
