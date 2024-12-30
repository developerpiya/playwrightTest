
npx playwright test --reporter=allure-playwright
allure generate ./allure-results -o ./allure-report --clean
allure open ./allure-report