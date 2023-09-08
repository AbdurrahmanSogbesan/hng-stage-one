const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    const { slack_name, track } = req.query;

    if (!slack_name || !track) {
        return res.status(400).json({ error: "slack_name and track are required parameters" });
    }

    // Validate query parameters
    if (typeof slack_name !== "string" || typeof track !== "string") {
        return res.status(400).json({ error: "slack_name and track must be strings" });
    }

    // Get the current date and time in UTC
    const now = new Date();
    const currentDay = getDayOfWeek(now);
    // Format UTC time without milliseconds
    const utcTime = now.toISOString().split(".")[0] + "Z";

    // GitHub repository information
    const githubRepoUrl = "https://github.com/AbdurrahmanSogbesan/hng-stage-one";
    const githubFileUrl = 'https://github.com/AbdurrahmanSogbesan/hng-stage-one/blob/main/app.js';

    // Response JSON
    const response = {
        slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };

    res.status(200).json(response);
});

// Helper function to get the day of the week
function getDayOfWeek(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getUTCDay()];
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
