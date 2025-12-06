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
- **Backend**: Node.js + Express server for secure API key management
- **API**: OpenAI ChatKit Realtime API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key with ChatKit access
- ChatKit workflow ID (starts with `wf_`)

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

3. Update `.env` with your credentials:

```env
OPENAI_API_KEY=your_openai_api_key_here
CHATKIT_WORKFLOW_ID=wf_6933b5bbf3a08190baa9cd7603543d28098f257753de2806
PORT=3000
```

### Running Locally

Start the development server:

```bash
npm start
```

Then navigate to `http://localhost:3000` in your browser.

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `CHATKIT_WORKFLOW_ID`: Your workflow ID

Or use the Vercel web interface:
- Go to [vercel.com](https://vercel.com)
- Import your Git repository
- Add environment variables in Settings → Environment Variables

### Deploy to Railway/Render

1. Connect your repository
2. Add environment variables:
   - `OPENAI_API_KEY`
   - `CHATKIT_WORKFLOW_ID`
3. Deploy!

## Project Structure

```
.
├── index.html          # Frontend application
├── server.js           # Backend Express server
├── package.json        # Node.js dependencies
├── vercel.json         # Vercel deployment config
├── .env                # Environment variables (gitignored)
├── .env.example        # Environment template
└── README.md           # Documentation
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
- **Backend**: Node.js, Express
- **ChatKit**: OpenAI ChatKit SDK
- **Deployment**: Vercel, Railway, or any Node.js hosting

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari

## License

MIT
