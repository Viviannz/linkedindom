# ChatKit Integration App

A full-stack web application integrating OpenAI's ChatKit for AI-powered chat conversations with secure backend authentication.

## Features

- 🤖 AI chat assistant powered by OpenAI ChatKit
- 🔐 Secure backend authentication with Node.js/Express
- 💅 Modern, responsive design
- 🎨 Beautiful gradient background with glassmorphism effects
- 📱 Mobile-friendly interface
- ⚡ Real-time chat streaming

## Architecture

- **Frontend**: Vanilla HTML/CSS/JavaScript with ChatKit web component
- **Backend**: Netlify Functions (serverless) for secure API key management
- **API**: OpenAI ChatKit Realtime API

## Getting Started

### Prerequisites

- OpenAI API key with ChatKit access
- ChatKit workflow ID (starts with `wf_`)
- Netlify account (free tier works!)

## Deployment

### Deploy to Netlify (Recommended - Already Configured!)

Your app is configured for Netlify with serverless functions. Here's how to set it up:

#### Option 1: Netlify Web Interface

1. Go to your Netlify dashboard: [app.netlify.com](https://app.netlify.com)
2. Go to **Site settings** → **Environment variables**
3. Add these environment variables:
   - **Key**: `OPENAI_API_KEY`
     **Value**: `your-openai-api-key-starting-with-sk-proj-`
   - **Key**: `CHATKIT_WORKFLOW_ID`
     **Value**: `wf_6933b5bbf3a08190baa9cd7603543d28098f257753de2806`
4. Click **Save**
5. Go to **Deploys** → **Trigger deploy** → **Deploy site**

Your app will be live in 30-60 seconds!

#### Option 2: Netlify CLI

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to your existing site or create new one
netlify link

# Set environment variables
netlify env:set OPENAI_API_KEY "your_api_key_here"
netlify env:set CHATKIT_WORKFLOW_ID "wf_6933b5bbf3a08190baa9cd7603543d28098f257753de2806"

# Deploy
netlify deploy --prod
```

### Running Locally (Optional)

For local testing with Netlify Functions:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Create .env file
cp .env.example .env

# Edit .env with your credentials

# Run locally
netlify dev
```

Then navigate to `http://localhost:8888` in your browser.

### Alternative Deployment Options

#### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Add environment variables in Settings → Environment Variables
4. Deploy!

#### Deploy to Railway/Render

1. Connect your repository
2. Add environment variables:
   - `OPENAI_API_KEY`
   - `CHATKIT_WORKFLOW_ID`
3. Deploy!

## Project Structure

```
.
├── index.html                        # Frontend application
├── netlify/
│   └── functions/
│       ├── chatkit-session.js        # Session creation API
│       └── health.js                 # Health check endpoint
├── netlify.toml                      # Netlify configuration
├── server.js                         # Alternative: Express server (for Vercel/Railway)
├── package.json                      # Node.js dependencies
├── vercel.json                       # Alternative: Vercel deployment config
├── .env                              # Environment variables (gitignored)
├── .env.example                      # Environment template
└── README.md                         # Documentation
```

## API Endpoints

### `POST /api/chatkit/session`
Creates a new ChatKit session with OpenAI.

**Response:**
```json
{
  "client_secret": {
    "value": "session_token",
    "expires_at": 1234567890
  },
  "workflow_id": "wf_..."
}
```

### `GET /api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "hasApiKey": true,
  "hasWorkflowId": true
}
```

## Security Notes

- ⚠️ **Never commit `.env` file** - API keys are gitignored
- ✅ API keys are stored server-side only
- ✅ Frontend never exposes sensitive credentials
- ✅ CORS enabled for cross-origin requests

## Troubleshooting

### Chat not loading

1. Check browser console for errors
2. Verify environment variables are set:
   ```bash
   curl http://localhost:3000/api/health
   ```
3. Ensure your OpenAI API key has ChatKit access
4. Verify workflow ID is correct

### Session creation fails

- Check that your OpenAI API key is valid
- Ensure you have access to the Realtime API
- Check server logs for detailed error messages

## Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES Modules)
- **Backend**: Netlify Functions (serverless)
- **ChatKit**: OpenAI ChatKit SDK
- **Deployment**: Netlify (or Vercel, Railway)

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari

## License

MIT
