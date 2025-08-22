# Insurance Bot

An intelligent insurance recommendation system that provides personalized insurance policy suggestions based on user profiles and requirements.

## Features

- Multi-country support (India and Australia)
- Multiple insurance types:
  - Health Insurance
  - Life Insurance
  - Travel Insurance
  - House Insurance
  - Vehicle Insurance
- ML-powered recommendation engine
- Interactive chat interface
- Real-time premium calculation
- Comprehensive policy explanations

## Tech Stack

### Backend
- Python 3.9
- FastAPI
- Scikit-learn
- PyTorch
- LangChain
- Neo4j
- ChromaDB

### Frontend
- React
- Material-UI
- Axios

### Infrastructure
- Docker
- Docker Compose
- Nginx
- Gunicorn

A cutting-edge, AI-powered chatbot designed to revolutionize the insurance industry. This project, built for a hackathon, provides real-time policy information, claim status updates, and dynamic data visualization through an intuitive conversational interface powered by the Groq API.

## ✨ Features

-   💬 **Conversational AI:** Interact with a powerful Large Language Model (LLM) hosted on Groq for lightning-fast, natural language responses.
-   📊 **Real-Time Dashboard:** A dynamic dashboard that updates instantly based on user queries and backend data changes.
-   🔍 **Policy & Claim Inquiries:** Instantly retrieve details about insurance policies, check the status of claims, and get answers to frequently asked questions.
-   ⚙️ **Scalable Architecture:** Built with a modern tech stack featuring a React frontend and a robust Node.js backend.
-   🚀 **Optimized for Performance:** Utilizes model quantization to ensure any custom machine learning models are lightweight and fast, enabling free and easy deployment.

## 📂 Project Structure

The project is organized into two main parts: a `frontend` directory for the React application and a `backend` directory for the Node.js server.

-   **`Insurance-Bot/`**
    -   **`backend/`**
        -   `node_modules/`
        -   `models/` - Contains quantized machine learning models (if any)
        -   `routes/` - API routes for handling requests
        -   `server.js` - The main Express server file
        -   `package.json` - Backend dependencies and scripts
    -   **`frontend/`**
        -   `node_modules/`
        -   `public/` - Static assets and index.html
        -   `src/`
            -   `components/` - Reusable React components (chatbot UI, charts)
            -   `App.js` - Main application component
            -   `index.js` - Entry point for the React app
        -   `package.json` - Frontend dependencies and scripts
    -   `README.md` - You are here!

-   **`backend`**: Handles the core logic, API requests, WebSocket connections for real-time updates, and integration with the Groq API and any connected databases.
-   **`frontend`**: Contains the user interface built with React, including the chatbot window and data visualization components that render information from the backend.


## 🛠️ Installation & Setup

Follow these steps to get the project running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [npm](https://www.npmjs.com/)
-   A Groq API Key (get one from [console.groq.com](https://console.groq.com/))

### 1. Clone the Repository

git clone https://github.com/your-username/Insurance-Bot.git
cd Insurance-Bot



### 2. Setup the Backend

Navigate to the backend directory, install dependencies, and set up your environment variables.

cd backend
npm install



Create a `.env` file in the `backend` directory and add your Groq API key:

GROQ_API_KEY="YOUR_GROQ_API_KEY_HERE"



### 3. Setup the Frontend

In a new terminal, navigate to the frontend directory and install its dependencies.

cd frontend
npm install



### 4. Run the Application

You need to run both the backend and frontend servers simultaneously.

-   **Run the Backend Server:**
    ```
    # In the /backend directory
    npm start
    ```

-   **Run the Frontend Development Server:**
    ```
    # In the /frontend directory
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## 🤖 Usage

Interact with the chatbot using natural language. Here are some example queries and the expected types of responses:

**1. Ask for policy details:**
> **You:** "What are the details of my auto insurance policy?"
> **Bot:** "Your auto insurance policy (ID: `POL45678`) covers comprehensive and collision damage with a deductible of $500. Your next premium payment of $120 is due on September 1, 2025."

**2. Check a claim's status:**
> **You:** "What is the status of my claim #CLM12345?"
> **Bot:** "Your claim #CLM12345 for water damage is currently under review. An adjuster has been assigned, and you can expect an update within 3-5 business days."

**3. Update a real-time dashboard:**
> **You:** "Show me the distribution of claims by category for this month."
> **Bot:** "Certainly. I have updated the dashboard to show the claim distribution for the current month."
> *(The dashboard embedded in the UI will update instantly)*

## 💻 Tech Stack

-   **Frontend:** React, Socket.IO Client, Axios
-   **Backend:** Node.js, Express.js, Socket.IO
-   **LLM Integration:** Groq API (Llama 3)
-   **Real-Time Data:** WebSockets
-   **Dashboard:** Microsoft Power BI or a custom React-based dashboard
-   **Deployment:** Vercel (Frontend), Render (Backend)

## 🏆 Hackathon Use Cases

This project demonstrates several practical applications for the insurance industry:

1.  **24/7 Customer Support:** Provide instant, automated support to customers, reducing call center volume and improving user satisfaction.
2.  **Instant First Notice of Loss (FNOL):** Allow users to initiate a claim directly through the chatbot, speeding up the claims process.
3.  **Fraud Detection Aid:** Analyze user queries and data points in real-time to flag potentially fraudulent claims for review.
4.  **Personalized Policy Recommendations:** Analyze user data to suggest relevant insurance products or coverage upgrades.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Insurance Bot, please follow these steps:

1.  **Fork** the repository.
2.  Create a new **branch** (`git checkout -b feature/AmazingFeature`).
3.  Make your changes and **commit** them (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## 📄 License

This project is licensed under the MIT License.

