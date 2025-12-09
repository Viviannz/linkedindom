# LinkedIn Domination System

A full-stack SaaS application providing AI-powered LinkedIn coaching with integrated Stripe subscription payments.

## Features

- 🚀 **LinkedIn Domination AI** - Powered by OpenAI ChatKit
- 💳 **Stripe Subscriptions** - $49/month recurring billing
- 🔐 Secure backend authentication with Netlify Functions
- 💅 Beautiful landing page with pricing section
- 🎨 Dark theme with purple/blue gradients
- 📱 Fully responsive mobile-friendly design
- ⚡ Real-time AI chat streaming
- 🔒 Payment-gated access to ChatKit widget

## Architecture

- **Frontend**: Vanilla HTML/CSS/JavaScript with ChatKit web component
- **Backend**: Netlify Functions (serverless) for secure API key management
- **API**: OpenAI ChatKit Realtime API

## Getting Started

### Prerequisites

- OpenAI API key with ChatKit access
- ChatKit workflow ID (starts with `wf_`)
- Stripe account (test mode for development)
- Netlify account (free tier works!)

## 💳 Stripe Setup

**See [STRIPE_SETUP.md](./STRIPE_SETUP.md) for complete Stripe integration guide!**

Quick overview:
1. Create Stripe account and product ($49/month subscription)
2. Get API keys and Price ID
3. Set up webhook endpoint
4. Configure environment variables in Netlify
5. Test with Stripe test cards
6. Go live when ready!

## Deployment

### Deploy to Netlify (Recommended - Already Configured!)

Your app is configured for Netlify with serverless functions. Here's how to set it up:

#### Option 1: Netlify Web Interface

1. Go to your Netlify dashboard: [app.netlify.com](https://app.netlify.com)
2. Go to **Site settings** → **Environment variables**
3. Add these environment variables:

   **For OpenAI ChatKit:**
   - **Key**: `OPENAI_API_KEY`
     **Value**: `your-openai-api-key-starting-with-sk-proj-`
   - **Key**: `CHATKIT_WORKFLOW_ID`
     **Value**: `wf_6933b5bbf3a08190baa9cd7603543d28098f257753de2806`

   **For Stripe Payments:**
   - **Key**: `STRIPE_SECRET_KEY`
     **Value**: `sk_test_...` (test mode) or `sk_live_...` (production)
   - **Key**: `STRIPE_PRICE_ID`
     **Value**: `price_...` (from your Stripe product)
   - **Key**: `STRIPE_WEBHOOK_SECRET`
     **Value**: `whsec_...` (from your Stripe webhook endpoint)

4. Click **Save** after adding each variable
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
├── index.html                        # Frontend application with pricing & payment
├── netlify/
│   └── functions/
│       ├── chatkit-session.js        # ChatKit session creation
│       ├── create-checkout.js        # Stripe checkout session
│       ├── verify-session.js         # Payment verification
│       ├── stripe-webhook.js         # Stripe webhook handler
│       └── health.js                 # Health check endpoint
├── netlify.toml                      # Netlify configuration
├── package.json                      # Node.js dependencies (includes Stripe)
├── STRIPE_SETUP.md                   # Complete Stripe setup guide
├── .env                              # Environment variables (gitignored)
└── README.md                         # This file
```

## API Endpoints

### ChatKit Endpoints

#### `POST /api/chatkit/session`
Creates a new ChatKit session with OpenAI.

**Response:**
```json
{
  "client_secret": "cs_..."
}
```

### Stripe Payment Endpoints

#### `POST /api/create-checkout`
Creates a Stripe checkout session for subscription.

**Response:**
```json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

#### `POST /api/verify-session`
Verifies a completed payment session.

**Request:**
```json
{
  "sessionId": "cs_test_..."
}
```

**Response:**
```json
{
  "valid": true,
  "customerId": "cus_...",
  "subscriptionId": "sub_..."
}
```

#### `POST /api/stripe-webhook`
Webhook endpoint for Stripe events (checkout completed, subscription canceled, etc.)

### Utility Endpoints

#### `GET /api/health`
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
