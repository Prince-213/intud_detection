# SvelteKit Honeypot Security System

A security-focused SvelteKit application that detects and mitigates brute force and SQL injection attacks by redirecting malicious actors to a fake dashboard while collecting their information.

## Features

- 🕵️‍♂️ Detects suspicious login attempts
- 🎣 Presents fake dashboard to potential attackers
- 📍 Collects attacker information including:
  - IP Address
  - Geographic location (latitude/longitude)
  - Operating System
  - Browser information
  - Timestamp of attack
- 🔒 Secure logging of all intrusion attempts
- 🚀 Built with SvelteKit for optimal performance

## How It Works

1. Detects common attack patterns (brute force, SQL injection, XSS attempts)
2. Silently redirects attackers to a realistic-looking fake dashboard
3. Collects and logs attacker information in real-time
4. Provides admin interface to monitor and analyze attack attempts

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or pnpm
- MongoDB (for storing attack data)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fraud-detection.git
   cd fraud-detection
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key_for_sessions
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## Project Structure

```
src/
├── lib/
│   ├── db/           # Database connection and models
│   ├── hooks/        # SvelteKit hooks
│   └── utils/        # Utility functions
├── routes/
│   ├── (auth)/       # Authentication routes
│   ├── admin/        # Admin dashboard
│   ├── api/          # API endpoints
│   └── honeypot/     # Fake dashboard routes
└── app.html          # Main HTML template
```

## Configuration

Edit the `src/lib/config.js` file to customize:
- Honeypot behavior
- Logging preferences
- Security settings
- Fake dashboard appearance

## Deployment

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Security Considerations

- Never expose the admin interface to untrusted networks
- Use HTTPS in production
- Regularly update dependencies
- Monitor logs for suspicious activity
- Implement rate limiting on authentication endpoints

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
