const chai = require('chai');
const request = require('supertest');
const app = require('../server');

const expect = chai.expect;

describe("Student API Unit Tests", () => {

  it("should add a new student", async () => {
    const response = await request(app)
      .post("/students")
      .send({ id: 1, name: "Yash" });

    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Student added");
  });

  it("should return all students", async () => {
    const response = await request(app).get("/students");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("should fetch a single student", async () => {
    await request(app)
      .post("/students")
      .send({ id: 2, name: "Rahul" });

    const response = await request(app).get("/students/2");

    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Rahul");
  });

});
