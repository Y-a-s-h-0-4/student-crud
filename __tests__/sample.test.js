const request = require("supertest");
const app = require("../server");

describe("Student CRUD API Tests", () => {

  test("Create a student", async () => {
    const res = await request(app)
      .post("/students")
      .send({ id: 1, name: "Yash" });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Student added");
  });

  test("Fetch all students", async () => {
    const res = await request(app).get("/students");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
