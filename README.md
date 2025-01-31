# HNG Task 1 Backend

This is the backend for the HNG Task 1, built using **Express.js**. It provides a simple API that returns your email, current date/time, and a link to my GitHub profile.

## Setup Instructions

To run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lanre290/hng12-backend.git
   cd hng12-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** and add the following content:
   ```
   PORT=3000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. The server will run on `http://localhost:3000`.

## API Documentation

### 1. Endpoint URL

`GET /`

### 2. Request Format

No request body is required for this endpoint.

### 3. Response Format

The server will return a JSON response with the following structure:

```json
{
    "email": "lanre2967@gmail.com",
    "current_datetime": "2025-01-29T00:00:00.000Z",
    "github_url": "https://github.com/lanre290/hng12-backend"
}
```

### 4. Example Usage

```bash
curl http://localhost:3000/
```

**Response:**
```json
{
    "email": "abc123@gmail.com",
    "current_datetime": "2025-01-29T00:00:00.000Z",
    "github_url": "https://github.com/username/hng12-backend"
}
```

### 4. Backlink

Looking to hire a dev? [Node js](https://hng.tech/hire/nodejs-developers)