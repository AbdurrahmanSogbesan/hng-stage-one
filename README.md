# Basic Express API Endpoint

This is a basic Express API endpoint that provides information based on query parameters.

## Getting Started

To run this API endpoint locally, you will need Node.js and npm (Node Package Manager) installed on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/AbdurrahmanSogbesan/hng-stage-one.git
```

2. Navigate to the project directory:
```bash
cd hng-stage-one
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run dev
```

The server will be running at http://localhost:3000.

### Endpoint Details
- Endpoint: `/api`
- Method: `GET`

#### Query Parameters
- `slack_name` (string, required): Your Slack username.
- `track` (string, required): The track you are on.

#### Example Request
```bash
GET http://localhost:3000/api?slack_name=example_name&track=backend
```

#### Example Response
```json
{
  "slack_name": "example_name",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/AbdurrahmanSogbesan/hng-stage-one/blob/main/app.js",
  "github_repo_url": "https://github.com/AbdurrahmanSogbesan/hng-stage-one",
  "status_code": 200
}
```
