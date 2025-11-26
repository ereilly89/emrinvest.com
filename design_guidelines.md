# Design Guidelines for emrinvest.com

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from modern tech agencies (Linear, Vercel) and creative portfolios (Behance), combined with the clean aesthetics of Stripe. Focus on showcasing technical expertise through sophisticated, minimal design that lets work speak for itself.

## Typography System
- **Primary Font**: Inter or DM Sans via Google Fonts for clean, modern feel
- **Headings**: Font weights 700-800, sizes from text-5xl (hero) to text-2xl (sections)
- **Body**: Font weight 400-500, text-base to text-lg for comfortable reading
- **Accent Text**: Font weight 600, slightly larger for emphasis on key metrics/stats

## Layout & Spacing
**Spacing Scale**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 mobile, py-24 desktop
- Component spacing: gap-8 to gap-12 for cards/grids
- Container max-width: max-w-7xl for full sections, max-w-4xl for text content

## Page Structure (7 Sections)

### 1. Hero Section (80vh)
Full-width background image showing modern workspace or abstract tech visual
- Centered content with blurred-background buttons
- Large headline (text-5xl md:text-6xl) + subheadline (text-xl)
- Two CTAs: primary "Start Your Project" + secondary "View Portfolio"
- Subtle scroll indicator at bottom

### 2. Services Grid (3 columns desktop, 1 mobile)
Icon-driven feature cards in grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Heroicons for service icons
- Each card: Icon + Title (text-xl) + Description + "Learn More" link
- Services: Custom Websites, E-commerce Solutions, Web Applications, Brand Identity, SEO Optimization, Ongoing Support

### 3. Portfolio Showcase (Masonry/Staggered Grid)
2-column layout (md:grid-cols-2) with varying heights
- High-quality project screenshots/mockups
- Hover overlay with project name + brief description + tech stack
- 6-8 featured projects displayed
- "View All Projects" CTA at bottom

### 4. Process Timeline (Horizontal on desktop, vertical mobile)
4-step visual timeline showing development approach
- Step numbers prominently displayed
- Titles: Discovery → Design → Development → Launch
- Brief description under each step
- Connected with visual line/progress indicator

### 5. Stats/Social Proof Bar
Full-width section with 4-column grid (grid-cols-2 md:grid-cols-4)
- Large numbers (text-4xl font-bold) for metrics
- Labels below: "Projects Completed", "Happy Clients", "Years Experience", "Countries Served"

### 6. Testimonials (2-column grid)
Grid of 4 testimonial cards (grid-cols-1 md:grid-cols-2)
- Client photo (circular, small)
- Quote text + client name + company
- 5-star rating display

### 7. Contact Section (2-column split)
Left: Contact form with fields (Name, Email, Project Type dropdown, Message textarea)
Right: Company info, response time promise, alternative contact methods, small location map placeholder
- Form uses full spacing (space-y-6)
- Large submit button at bottom

## Navigation
Sticky header with logo left, nav links center, "Get Started" CTA button right
- Links: Services, Portfolio, About, Contact
- Mobile: Hamburger menu with slide-out drawer

## Footer
Rich footer with 4-column grid (collapses to 1 on mobile)
- Column 1: Logo + tagline
- Column 2: Quick links (Services, Portfolio)
- Column 3: Resources (Blog, Case Studies, FAQ)
- Column 4: Newsletter signup + social icons (Font Awesome)
- Bottom bar: Copyright + Privacy/Terms links

## Component Patterns
- **Buttons**: Rounded-lg, px-6 py-3, font-medium, blurred backdrop when on images
- **Cards**: Rounded-xl, shadow-lg on hover, p-6 to p-8
- **Images**: Rounded-lg for cards, object-cover with aspect ratios maintained
- **Forms**: Rounded-md inputs, border focus states, clear labels above fields

## Images Required
1. **Hero**: Modern office workspace or abstract digital/tech artwork (full-width, 1920x1080)
2. **Portfolio**: 6-8 website screenshots/mockups showing variety of projects
3. **Testimonials**: 4 client headshots (circular crop, 80x80px)
4. **Optional**: Abstract shapes/gradients as section backgrounds

## Icons
Use Heroicons throughout for consistency - CDN link in head
- Service icons, process step icons, contact method icons, social media icons

## Accessibility
- Semantic HTML5 throughout
- ARIA labels on interactive elements
- Form labels properly associated
- Sufficient contrast ratios
- Keyboard navigation support