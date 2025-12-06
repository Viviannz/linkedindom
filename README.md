# ChatKit Integration App

A clean and modern web application integrating OpenAI's ChatKit for AI-powered chat conversations.

## Features

- 🤖 AI chat assistant powered by ChatKit
- 💅 Modern, responsive design
- 🎨 Beautiful gradient background with glassmorphism effects
- 📱 Mobile-friendly interface

## Getting Started

### Running Locally

Simply open `index.html` in your web browser:

```bash
open index.html
```

Or use a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Project Structure

```
.
├── index.html          # Main application file
└── README.md          # Project documentation
```

## Technologies

- **ChatKit**: OpenAI's chat interface library
- **HTML5**: Modern semantic markup
- **CSS3**: Custom styling with gradients and shadows
- **JavaScript**: ChatKit integration and initialization

## Configuration

The app is configured to use a specific ChatKit agent. To customize:

1. Open `index.html`
2. Locate the ChatKit initialization script
3. Update the `agentId` with your own agent ID

```javascript
const chat = new ChatKit({
    agentId: "your-agent-id-here",
    container: document.getElementById("chat-container"),
    layout: "embedded"
});
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT
