const fs = require('fs');
const path = require('path');

// Define the path to the allure-results directory
const allureResultsPath = path.join(__dirname, 'allure-results');

// Ensure the allure-results directory exists
if (!fs.existsSync(allureResultsPath)) {
  fs.mkdirSync(allureResultsPath, { recursive: true });
  console.log(`Created allure-results directory at ${allureResultsPath}`);
}

// Define executor details
const executorDetails = {
  name: "Local Machine", // Name of the environment or CI/CD tool (e.g., Jenkins, GitHub Actions)
  type: "local", // Type of executor (e.g., "jenkins", "github-actions", or "local")
  url: "http://localhost:8080", // URL of the CI/CD system or dashboard (optional)
  buildName: "Build #1", // Build name or identifier
  buildUrl: "http://localhost:8080/job/build-1", // URL to the build details (optional)
  reportUrl: "", // Link to the generated Allure report (optional)
  environment: "Local", // Description of the environment (e.g., "Staging", "Production")
};

// Define the path to the executor.json file
const executorFilePath = path.join(allureResultsPath, 'executor.json');

// Write the executor details to the file
fs.writeFileSync(executorFilePath, JSON.stringify(executorDetails, null, 2));

console.log(`Executor details written to ${executorFilePath}`);
