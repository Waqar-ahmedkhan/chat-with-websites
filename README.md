# 💬 Chat with Websites

> Interact with any website using AI — powered by Next.js, Tailwind CSS, and modern web scraping tools.

---

## 🚀 Overview

**Chat with Websites** is a smart AI-based project that allows users to input any website URL and start chatting with its content. The app fetches and processes data from websites and allows OpenAI or custom LLMs to answer user questions based on that site content.

Great for:

* Researching websites faster 🔍
* Summarizing articles or blogs 📄
* Extracting important content 💡

---

## ⚙️ Features

* 🌐 Input a URL and chat with its content
* 🤖 OpenAI or custom LLM integration
* ⚡ Real-time scraping and parsing
* 💅 Built with Next.js 13+ App Router & Tailwind CSS
* ✨ Smooth, minimal UI with dark/light theme support

---

## 🧰 Tech Stack

* **Frontend:** Next.js 13+, TypeScript, Tailwind CSS
* **Backend:** Node.js, Express (optional), Middleware scraping layer
* **AI:** OpenAI GPT models / LangChain (optional)
* **Libraries:** Axios, Cheerio, Shadcn UI, Vercel

---

## 📦 Installation

```bash
# Clone the repo
$ git clone https://github.com/Waqar-ahmedkhan/chat-with-websites.git
$ cd chat-with-websites

# Install dependencies
$ npm install

# Create .env file with your OpenAI Key
OPENAI_API_KEY=your_openai_key

# Run locally
$ npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the app.

---

## 🔐 Environment Variables

```
OPENAI_API_KEY=your_api_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000 (or your Vercel URL)
```

---

## 🧠 How It Works

1. You enter a website URL.
2. Middleware scrapes & parses the page content (HTML → text).
3. The content is passed to OpenAI's GPT model.
4. You chat with that website using a smart assistant.

---

## 🖼️ UI Snapshots (Optional)

*Add screenshots of your app UI or demo GIFs here.*

---

## 🚀 Deployment

You can deploy this app easily on **Vercel**:

```bash
# Deploy using Vercel CLI or push to GitHub and import in Vercel
vercel
```

Or check out [https://vercel.com](https://vercel.com) for detailed deployment.

---

## 📌 Future Improvements

* [ ] Add file/document upload
* [ ] LangChain integration
* [ ] Chat history & summarization
* [ ] Improved scraping for JS-heavy websites

---

## 🙌 Contributing

Pull requests and stars are always welcome!

---

## 👨‍💻 Author

**Waqar Ahmed Khan**
[GitHub](https://github.com/Waqar-ahmedkhan) · [LinkedIn](https://linkedin.com/in/waqar-ahmedkhan)

---

## 📝 License

This project is open source and available under the MIT License.

---

> "Chat with Websites" helps you interact with the internet in a new way. Try it today and start talking to any site!
