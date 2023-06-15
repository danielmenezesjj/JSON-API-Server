# Basic JSON API

This is a basic API built with Node.js and Express. It uses a JSON file as the database to store and retrieve products.

## Getting Started

To get started with this API, follow the instructions below.

### Prerequisites

- Node.js installed on your local machine

### Installation

1. Clone the repository:
- git clone https://github.com/danielmenezesjj/JSON-API-Server


2. Install the dependencies:
- npm install 


3. Start the API:
- npm start

The API will start running on `http://localhost:3000`.

## Endpoints

### GET `/`

Returns a welcome message.

### GET `/produtos`

Returns a JSON array of all products.

### GET `/produtos/:id`

Returns a specific product by its ID.

### POST `/produtos`

Creates a new product. The product details should be sent in the request body as JSON.

### PUT `/produtos/:id`

Updates a specific product by its ID. The updated product details should be sent in the request body as JSON.

### DELETE `/produtos/:id`

Deletes a specific product by its ID.



## License

This project is licensed under the [MIT License](LICENSE).

