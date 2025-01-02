import {test, expect} from "@playwright/test";

test("Tags1@sanity", async({page})=>{
    console.log("It is Tags 1")
})

test("Tags2@reg", async({page})=>{
    console.log("It is Tags 2")
})

test("Tags3@regression", async({page})=>{
    console.log("It is Tags 3")
})

test("Tags4@smoke", async({page})=>{
    console.log("It is Tags 4")
})

test("Tags5@sanity@reg", async({page})=>{
    console.log("It is Tags 5")
})

test("Tags6@sanity", async({page})=>{
    console.log("It is Tags 6")
})
//npx playwright test tags.spec.js --project=chromium --grep "@sanity"
//npx playwright test tags.spec.js --project=chromium --grep "@sanity" --grep-invert "@reg"