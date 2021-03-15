import "babel-polyfill";
const { app } = require("../src/server/index.js");
const request = require("supertest");

describe("Testing server routing", () => {
  test("Check successful routing to home path", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
  test("Check successful returning mockAPI", async () => {
    const res = await request(app).get("/test");
    expect(res.body).toHaveProperty("time");
  });
  test("Check successful calling the MeaningCloud API", async () => {
    const res = await request(app).post("/sentiment").send({
      url: "https://www.google.com",
    });
    expect(res.body).toHaveProperty("model");
    expect(res.body).toHaveProperty("score_tag");
    expect(res.body).toHaveProperty("agreement");
    expect(res.body).toHaveProperty("subjectivity");
    expect(res.body).toHaveProperty("confidence");
    expect(res.body).toHaveProperty("irony");
    expect(res.body).toHaveProperty("sentence_count");
  });
});
