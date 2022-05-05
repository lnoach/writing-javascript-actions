const core = require("@actions/core");

async function run() {
    core.setOutput("joke-output", "AAAA a good joke "+Math.random());
}

run();