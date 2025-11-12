import { test, expect } from "@playwright/test";
import axios, { AxiosResponse } from "axios";

test.describe("When we call the User API, the API should perform as the API spec", () => {
  test("Verify if we can get all user information", async () => {
    const response = await axios.get(`https://dummyjson.com/users`);
    const firstUser = response.data.users[0];
    const users = response.data.users;
    const data = response.data
    // response
    expect(response.status).toBe(200);

    // firstUser
    expect(Array.isArray(users)).toBe(true);

    // users
    expect(firstUser.firstName).toEqual('Emily')
    expect(firstUser.lastName).toEqual('Johnson')

    // data
    expect(data).toHaveProperty('total')
    expect(data).toHaveProperty('skip')
    expect(data).toHaveProperty('limit')
  });

  test("Verify if we can login with user credentials ", async () => {
    const payload = {
      username: "emilys",
      password: "emilyspass",
    };

    const response = await axios.post(`https://dummyjson.com/user/login`, 
      payload, {
        headers: { "Content-Type": "application/json" },
    });
    expect(response.status).toBe(200);
    expect(response.data.firstName).toEqual('Emily')
    expect(response.data.lastName).toEqual('Johnson')
  });

  test("Verify if we can add a new user", async () => {
    const payload = {
      firstName: "Muhammad",
      lastName: "Ovi",
      age: 250
    };

    const response = await axios.post(`https://dummyjson.com/users/add`, 
      payload, {
        headers: { "Content-Type": "application/json" },
    });
    expect(response.status).toBe(201);
    expect(response.data.firstName).toEqual('Muhammad')
    expect(response.data.lastName).toEqual('Ovi')
  });

});