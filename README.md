# 🌓 Dark / Light Mode Toggle App

A beautifully crafted, interactive theme switching application that transforms the entire user experience between a vibrant day mode and a mystical night mode. Built with modern web technologies and smooth animations, this app demonstrates the power of thoughtful UI/UX design in creating seamless theme transitions.

## 🎯 Why Theme Switching Matters

Theme switching is more than just a visual preference—it's about accessibility, user comfort, and personalization. Whether users are working late at night, in bright environments, or simply prefer a specific aesthetic, giving them control over their viewing experience significantly improves usability and reduces eye strain.

## 🖼️ Preview

The application features two distinct visual experiences:

- **Light Mode**: A bright, cheerful day scene with a glowing sun, warm gradients, and uplifting colors
   Example: ![Light Mode](/assets/LightMode.png)

- **Dark Mode**: A mystical night sky with twinkling stars, a detailed moon with craters, and deep cosmic gradients
   Example: ![Dark Mode](/assets/DarkMode.png)
> Screenshots showcasing both themes can be found in the `/screenshots` folder.

## ✨ Features

- **Seamless Theme Toggle**: Instant switching between light and dark modes with a single click
- **Persistent Theme Preference**: Uses LocalStorage to remember user's choice across sessions
- **Smooth Animations**: 700ms transitions for a polished, professional feel
- **Dynamic Star Generation**: 60 randomly positioned stars that twinkle in night mode
- **Accessibility First**: Full keyboard support (Enter/Space keys) and ARIA attributes
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Visual Feedback**: Bounce animation on toggle and dynamic text updates
- **Clean UI**: Modern Tailwind CSS styling with gradient backgrounds
- **Performance Optimized**: Minimal DOM re-rendering and efficient class toggling

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **Tailwind CSS (CLI)**: Utility-first CSS framework for rapid styling
- **PostCSS**: CSS transformation pipeline
- **Autoprefixer**: Cross-browser compatibility
- **JavaScript (Vanilla)**: No frameworks, pure DOM manipulation
- **LocalStorage**: Client-side theme persistence

## 📂 Project Structure

```
Dark_Light_Mode_Toggle/
├── dist/
│   └── output.css          # Compiled and minified CSS
├── src/
│   └── input.css           # Source CSS with custom animations
├── index.html              # Main application HTML
├── script.js               # Theme logic and interactivity
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies and scripts
└── package-lock.json       # Dependency lock file
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Dark_Light_Mode_Toggle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the CSS**
   ```bash
   npm run build
   ```

   For development with auto-rebuild:
   ```bash
   npm run watch
   ```

4. **Open in browser**
   Simply open `index.html` in your preferred web browser, or use a local server:
   ```bash
   npx serve .
   ```

## 🧠 Key Learnings & Highlights

- **DOM Manipulation**: Efficient class toggling on the `document.documentElement` for theme switching
- **Event Handling**: Click and keyboard event listeners for accessibility
- **LocalStorage Integration**: Persistent theme storage that survives page reloads
- **CSS Custom Properties**: Dynamic star positioning using CSS variables
- **Animation Engineering**: Custom keyframe animations for floating, rotating, twinkling, and bouncing effects
- **Accessibility Best Practices**: ARIA labels, roles, and keyboard navigation support
- **Performance Optimization**: IIFE pattern to prevent flash of unstyled content
- **Modular Code Structure**: Clean, maintainable functions with single responsibilities

## 🛡️ Performance & Code Quality

- **Efficient Class Toggling**: Single class addition/removal on the root element
- **Minimal DOM Re-rendering**: Updates only necessary elements
- **Clean Codebase**: Well-commented, readable JavaScript with modular functions
- **Optimized CSS**: Tailwind's utility classes combined with custom animations
- **Fast UI Response**: 700ms transitions for smooth but responsive feel
- **No External Dependencies**: Lightweight, fast-loading application

## 📱 Responsiveness

The application is fully responsive and works seamlessly across:

- **Mobile**: Touch-friendly toggle with optimized spacing
- **Tablet**: Balanced layout with appropriate scaling
- **Desktop**: Full-featured experience with all animations

## 🚀 Future Improvements

Potential enhancements for future iterations:

- **System Theme Detection**: Auto-detect `prefers-color-scheme` media query
- **Theme Customization**: Allow users to customize accent colors
- **Advanced Animations**: Add particle effects or weather transitions
- **Multiple Theme Variants**: Support for additional themes (blue, green, etc.)
- **Transition Sound Effects**: Optional audio feedback on toggle
- **Time-based Auto-switch**: Automatically change theme based on time of day
- **Export/Import Settings**: Allow users to backup their preferences

## 👨‍💻 Author

**Krish**

Built with ❤️ and Code

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🧩 Internship Note

Built as part of a hands-on internship, emphasizing real-world problem solving, performance optimization, and modern UI/UX practices.

---

**Ready to transform your browsing experience?** 🌙☀️
