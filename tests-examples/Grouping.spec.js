import { test, expect } from "@playwright/test";

test.beforeEach(async()=>{
    console.log("It is BeforeEach block...")
})

test.afterEach(async()=>{
    console.log("It is afterEach block...")
})

test.beforeAll(async()=>{
    console.log("It is beforeAll block...")
})

test.afterAll(async()=>{
    console.log("It is afterAll block...")
})

test.describe("Group 1", () => {
    test("Grouping Test1", async ({ page }) => {
        console.log('This is my test1...')
    })

    test("Grouping Test2", async ({ page }) => {
        console.log('This is my test2...')
    })
})

test.describe("Group 2", () => {
    test("Grouping Test3", async ({ page }) => {
        console.log('This is my test3...')
    })

    test("Grouping Test4", async ({ page }) => {
        console.log('This is my test4...')
    })
})