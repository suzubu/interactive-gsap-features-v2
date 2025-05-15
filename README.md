# 📘 Interactive GSAP Features

> A short interactive demo exploring staged animations with GSAP, using counters, easing curves, and DOM element reveals.

---

## 🖼 Preview

![App Preview](media/interactive-gsap-feature-demo.gif)

---

## ⚙️ Getting Started

These instructions will get your project running locally.

```bash
# 1. Clone the repo
git clone https://github.com/suzubu/interactive-gsap-features.git

# 2. Navigate into the project folder
cd interactive-gsap-features

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev
```

> Built with:  
> - [GSAP](https://greensock.com/gsap/)  
> - [Vite](https://vitejs.dev/)  
> - Vanilla JavaScript  
> - [CustomEase plugin](https://gsap.com/docs/v3/Eases/CustomEase/)

---

## ✨ Features

- ✅ Smooth landing page reveal with custom easing
- 🔢 Animated numerical counter
- 🧩 Text splitting animation for staggered entrance
- ✂️ Clip-path animations for layered visual reveals

---

## 💡 Dev Notes

- Used `CustomEase` to mimic a "hop"-like easing curve for more natural animation flow
- DOMContentLoaded listener ensures split text and entrance animations fire only after load
- Structure separates concerns (main logic, counter animation, and landing animation)

---

## 📚 Inspiration / Credits

This project was inspired by:

- [GSAP Landing Animation Demos](https://codepen.io/GreenSock/)
- [CustomEase Guide](https://gsap.com/docs/v3/Eases/CustomEase/)
- SplitText-style animations (custom DOM span-splitting)

---

## 🧪 Known Issues

- ❌ No responsive fallback for very small screen sizes
- 🔍 Text clip-paths may cause visual bugs in older browsers

---

## 🔭 Roadmap / TODO

- [ ] Add replay button to restart animation
- [ ] Modularize easing curves into a constants file
- [ ] Implement dark/light mode theme transitions

---

## 📂 Folder Structure

```bash
interactive-gsap-features/
├── public/
│   └── media/
│       └── preview.gif
├── src/
│   ├── animations/
│   │   ├── counter.js
│   │   └── revealLanding.js
│   ├── utils/
│   │   └── splitTextIntoSpans.js
│   └── main.js
├── index.html
├── style.css
└── README.md
```

---

## 📜 License

MIT — feel free to use and adapt!

---

## 🙋‍♀️ Author

Made with ☕ + 🎧 by [suzubu](https://github.com/suzubu)
