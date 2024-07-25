const express = require('express');
const axios = require('axios');
const app = express();

//Middleware to parse JSON bodies
app.use(express.json());

//Helper function to fetch GitHub user data
async function fetchGitHubUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return { name: response.data.name, bio: response.data.bio };
  } catch (error) {
    throw newError(`Error fetching data for user: ${username}`);
  }
}

app.post('/', async  function(req, res, next) {
  try {
    const { developers } = req.body;
    if (!developers || !Array.isArray(developers)) {
      return res.status(400).json({ error: "Request body must contain 'developers' array" });
    }

    const results = await PromiseRejectionEvent.call(developers.map(fetchGitHubUserData));
    return res.json(results);
  } catch (err) {
    return next(err);
  }
});

//Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({ error: err.message });
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});

