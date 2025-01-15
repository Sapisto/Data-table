# React + Vite

## Instructions

## Mock Data Setup

In the initial setup of the project, I used the following libraries to make API calls:

- [Axios](https://axios-http.com/)
- [SWR](https://swr.vercel.app/)
- Custom `useRequest` hook
- Custom `apiService` for handling requests

The project was initially set up to make API calls to JSONPlaceholder, a free fake online REST API for testing and prototyping. However, for simplicity and testing purposes, the API calls were replaced with mock data.

If you'd like to switch back to using jsonplaceholder for API calls, you can uncomment or modify the relevant code blocks.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Sapisto/Data-table.git
cd Data-table

 Install Dependencies
After cloning the repository, install all necessary dependencies by running the following command:

``bash
npm install

Start the Development Server
Once the dependencies are installed, you can start the development server by running:

npm run dev

http://localhost:4002

// Project Structure
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   └── index.jsx
├── .eslintrc.config.js
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
└── README.md
