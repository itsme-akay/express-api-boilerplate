# Express API Boilerplate

A clean, minimal REST API starter built with Node.js and Express.

## Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Extras:** dotenv, cors, morgan

## Project Structure

```
src/
├── config/         # Env config
├── controllers/    # Route handlers
├── middlewares/    # Error handler, 404
├── routes/         # Route definitions
└── index.js        # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file
cp .env.example .env

# Start dev server
npm run dev

# Start production server
npm start
```

## API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | /api/health       | Health check      |
| GET    | /api/users        | Get all users     |
| GET    | /api/users/:id    | Get user by ID    |
| POST   | /api/users        | Create a user     |
| PUT    | /api/users/:id    | Update a user     |
| DELETE | /api/users/:id    | Delete a user     |

## Example Request

```bash
# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com"}'
```
