const request = require("supertest");
const app = require("../app");
const db = require("../db/localDb");

beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());

describe("Profiles", () => {
  it("should return null if no profile", async () => {
    const response = await request(app).get("/api/v1/profile/123");
    expect(response.body.profile).toBe(null);
  });
});
