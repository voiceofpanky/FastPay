# FastPay
Online payment app with deals and cashback offers, spending tracking, stock price alert and investment decisions

<img width="339" height="464" alt="image" src="https://github.com/user-attachments/assets/1437f0f1-9cdd-47e0-86ed-487bf296da47" />

## Getting Started

### Prerequisites

- Ubuntu 24.04.2 LTS (dev container)
- Docker (if running in a container)
- Node.js, Python, or other dependencies as required by the project

### Setup

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd FastPay
   ```

2. **Install dependencies:**
   - For Node.js:
     ```sh
     npm install
     ```
   - For Python:
     ```sh
     pip install -r requirements.txt
     ```

3. **Start the application:**
   - For Node.js:
     ```sh
     npm start
     ```
   - For Python:
     ```sh
     python app.py
     ```

4. **Open the app in your browser:**
   ```sh
   $BROWSER http://localhost:3000
   ```

### Development

- Use Visual Studio Code for best experience.
- The project runs inside a dev container for consistency.
- Use the integrated terminal for commands.
- Run tests with:
  ```sh
  npm test
  # or
  pytest
  ```

### Useful Commands

- List files:
  ```sh
  tree
  ```
- Search in files:
  ```sh
  grep -r "search_term" .
  ```
- Check running processes:
  ```sh
  ps aux
  ```

### Contributing

1. Fork the repo and create your branch:
   ```sh
   git checkout -b feature/your-feature
   ```
2. Commit your changes and push:
   ```sh
   git commit -am "Add your feature"
   git push origin feature/your-feature
   ```
3. Open a Pull Request.

---

For more details, see the documentation in the `/docs` folder (if available).
