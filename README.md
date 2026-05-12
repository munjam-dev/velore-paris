# VELORÉ PARIS - Luxury Fragrance E-Commerce Website

A premium e-commerce website for luxury fragrances built with React, Vite, and TailwindCSS. Features modern design with attractive animations and effects.

## 🌟 Features

- **Modern Design**: Clean, luxury aesthetic with gold accents and elegant typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Product Gallery**: Multiple product images with hover effects
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Newsletter Signup**: Email subscription with validation
- **Customer Reviews**: Testimonials and ratings display
- **Navigation**: Multi-page routing with React Router

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Ant Design Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd velore-paris
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── ProductCard.jsx # Individual product card
│   ├── FeaturedProducts.jsx # Products grid
│   ├── AboutSection.jsx # About brand section
│   ├── ReviewsSection.jsx # Customer reviews
│   ├── NewsletterSection.jsx # Newsletter signup
│   └── Footer.jsx      # Site footer
├── data/
│   └── products.js     # Product data
├── App.jsx             # Main app component
├── App.css             # Global styles
└── index.css           # TailwindCSS imports
```

## 🎨 Design Features

### Color Scheme
- **Veloré Gold** (#D4AF37) - Primary accent color
- **Veloré Dark** (#1a1a1a) - Dark text and backgrounds
- **Veloré Cream** (#F8F6F3) - Light background color

### Typography
- **Playfair Display** - Elegant serif font for headings
- **Montserrat** - Clean sans-serif for body text

### Animations
- Fade-in effects on scroll
- Hover transformations on products
- Floating background elements
- Smooth page transitions

## 🛍️ Product Features

Each product includes:
- Multiple high-quality images
- Detailed fragrance notes (top, middle, base)
- Customer ratings and reviews
- Price and discount information
- Add to cart functionality
- Wishlist capability

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Touch-friendly interfaces
- Optimized images for all screen sizes
- Adaptive navigation menu

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 5,
  name: "Product Name",
  category: "Category",
  price: 999,
  shortDescription: "Brief description",
  fullDescription: "Detailed description",
  fragranceNotes: {
    top: ["Note 1", "Note 2"],
    middle: ["Note 3", "Note 4"],
    base: ["Note 5", "Note 6"]
  },
  highlights: ["Feature 1", "Feature 2"],
  images: ["image1.jpg", "image2.jpg"],
  inStock: true,
  rating: 4.5,
  reviews: 50
}
```

### Customizing Colors
Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  'velore-gold': '#D4AF37',
  'velore-dark': '#1a1a1a',
  'velore-cream': '#F8F6F3',
}
```

## 🌐 Deployment

The app can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**VELORÉ PARIS — Crafted for Timeless Elegance.**
