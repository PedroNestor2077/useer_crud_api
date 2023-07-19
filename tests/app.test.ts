import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  test("should app start", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "Rise above the ordinary and unleash your extraordinary potential."
    );
  });
});
