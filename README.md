# Volvexer - Expert Taxation Services Landing Page

A beautiful, modern single-page landing website for Volvexer, a fictional taxation company. Built with HTML, CSS, JavaScript, jQuery, and TailwindCSS, served by Flask.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Smooth Animations**: jQuery-powered scroll animations and transitions
- **Interactive Elements**: Hover effects, form handling, and dynamic content
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Performance Optimized**: Lightweight and fast loading
- **WhatsApp Integration**: Direct WhatsApp contact buttons for instant support
- **Dark Mode**: Toggle between light and dark themes
- **User-Friendly**: Enhanced UX with smooth interactions and animations

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with WhatsApp CTA
2. **About Us** - Company information and statistics
3. **Services** - Four main service offerings with icons
4. **Why Choose Us** - Six key benefits with visual indicators
5. **Contact Section** - WhatsApp contact cards with three support numbers
6. **Footer** - Company links and social media

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: TailwindCSS (CDN)
- **Interactions**: jQuery 3.7.1
- **Icons**: Font Awesome 6.4.0
- **Animations**: AOS (Animate On Scroll)
- **Backend**: Flask (Python)
- **No Database**: Static content only

## 📁 Project Structure

```
volvexer/
├── app.py                 # Flask application
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   ├── css/
│   │   └── styles.css    # Custom CSS styles
│   ├── js/
│   │   └── scripts.js    # jQuery functionality
│   └── assets/           # Images and other assets
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the files locally, navigate to the project directory
   cd volvexer
   ```

2. **Create a virtual environment (recommended)**
   ```bash
   python -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Flask**
   ```bash
   pip install flask
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 🎨 Customization

### Colors
The color scheme is defined in the TailwindCSS configuration within `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1e40af',    // Blue
                secondary: '#3b82f6',  // Light Blue
                accent: '#f59e0b'      // Orange
            }
        }
    }
}
```

### WhatsApp Numbers
Update the WhatsApp contact numbers in `templates/index.html`:

```html
<!-- Primary Support -->
<a href="https://wa.me/923216839454" target="_blank">+92 321 6839454</a>

<!-- Business Support -->
<a href="https://wa.me/923228791599" target="_blank">+92 322 8791599</a>

<!-- Technical Support -->
<a href="https://wa.me/92339087159" target="_blank">+92 339 087159</a>
```

### Content
- Edit `templates/index.html` to modify page content
- Update company information, services, and contact details
- Modify the hero section text and call-to-action

### Styling
- Custom CSS animations and effects in `static/css/styles.css`
- TailwindCSS utility classes in the HTML
- Responsive breakpoints and mobile optimizations

### Functionality
- jQuery interactions in `static/js/scripts.js`
- WhatsApp integration, smooth scrolling, and animations
- Mobile menu functionality

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Adding New Sections
1. Add HTML structure to `templates/index.html`
2. Include corresponding CSS in `static/css/styles.css`
3. Add any JavaScript functionality to `static/js/scripts.js`

### Adding Images
1. Place images in `static/assets/`
2. Reference them using Flask's `url_for()` function:
   ```html
   <img src="{{ url_for('static', filename='assets/image.jpg') }}" alt="Description">
   ```

### WhatsApp Integration
The site includes three WhatsApp contact options:
- **Primary Support**: +92 321 6839454
- **Business Support**: +92 322 8791599
- **Technical Support**: +92 339 087159

All WhatsApp buttons open in a new tab and include click tracking.

## 🌟 Features in Detail

### WhatsApp Integration
- Floating WhatsApp button (bottom-left)
- WhatsApp button in navigation
- Three contact cards with different support types
- Click animations and hover effects
- Mobile-responsive design

### Smooth Scrolling Navigation
- Fixed navigation bar with active section highlighting
- Smooth scroll animations to sections
- Mobile-responsive hamburger menu
- Logo with hover animations

### Interactive Elements
- Service cards with hover effects
- Animated counters in the About section
- WhatsApp contact cards with animations
- Scroll-to-top button

### Animations
- Fade-in animations on scroll (AOS)
- Parallax effects in hero section
- Hover animations on buttons and cards
- Loading states and transitions

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Dark mode support

### Dark Mode
- Toggle button in top-right corner
- Persistent preference storage
- Smooth transitions between themes
- Optimized colors for both modes

## 📞 Contact Information

For questions or support:
- **Primary WhatsApp**: +92 321 6839454
- **Business WhatsApp**: +92 322 8791599
- **Technical WhatsApp**: +92 339 087159
- **Email**: info@volvexer.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Tax Street, Financial District, NY 10001

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for better taxation services** 