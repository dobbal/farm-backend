# Agricultural E-Commerce Platform - Design Guidelines

## Design Approach

**System Selection**: Material Design 3 with agricultural context adaptation
**Rationale**: Information-dense application requiring clear hierarchy, extensive data displays, and robust form interactions. Material Design provides proven patterns for complex applications while allowing thematic customization for the agricultural domain.

**Key Design Principles**:
- Clarity over decoration - farmers need quick access to actionable information
- Functional hierarchy - guide critical information (weather alerts, disease warnings) prominently
- Trust through consistency - reliable patterns across admin and user interfaces
- Accessibility for diverse users - clear touch targets, readable text sizes for field use

---

## Typography System

**Primary Font**: Roboto (via Google Fonts CDN)
- Headings: Roboto Medium (500) for section titles, subsection headers
- Body: Roboto Regular (400) for guide content, product descriptions
- Data/Numbers: Roboto Mono for weather data, market prices, analytics

**Type Scale**:
- Page titles: text-3xl (30px)
- Section headers: text-2xl (24px)  
- Card titles: text-lg (18px)
- Body text: text-base (16px)
- Captions/metadata: text-sm (14px)
- Data labels: text-xs (12px)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-4 to p-6
- Section spacing: gap-8, space-y-12
- Card margins: m-4
- Grid gaps: gap-6

**Container Strategy**:
- Max width: max-w-7xl for main content areas
- Full-width data tables: w-full within max-w-screen-xl
- Sidebar navigation: fixed w-64 (desktop), collapsible (mobile)

**Grid Patterns**:
- Crop/Product cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Guide sections: grid-cols-1 lg:grid-cols-12 (8 main content + 4 sidebar for weather/market data)
- Admin dashboard: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for stats cards

---

## Navigation Architecture

**Top Navigation Bar** (sticky, elevated):
- Logo/Brand (left)
- Main menu items: Fix Your Crop (dropdown), Shop, Cart (with badge), Login/Profile
- Search bar (center, expandable on mobile)
- Height: h-16

**Fix Your Crop Mega Menu**:
- 4-column grid (Agriculture | Horticulture | Animal Husbandry | Garden)
- Each column: Category icon + Production Guides link + Protection Guides link
- Hover reveals crop list preview

**Sidebar Navigation** (for guide pages and admin):
- Hierarchical tree structure with expand/collapse
- Active state highlighting
- Breadcrumbs above content area

---

## Component Library

### Cards
**Product Cards**:
- Elevated surface (shadow-md)
- Product image (aspect-ratio-4/3)
- Title, category badge, price
- "Add to Cart" button (full-width at bottom)
- Padding: p-4, rounded-lg

**Crop Guide Cards**:
- Border-based (border-2)
- Crop icon/image (small, h-12 w-12)
- Crop name, scientific name
- Arrow/chevron for navigation
- Hover: subtle scale transform

**Weather/Market Data Cards**:
- Compact design with icon
- Large number display (text-3xl font-mono)
- Label and trend indicator
- Padding: p-6, background subtle tint

### Forms
**Multi-Step Registration**:
- Progress stepper (Material Design stepped progress)
- Form sections: Personal Info → Crop Selection → Location → Consent
- Add crop button: outlined style, allows multiple entries
- Required field indicators (asterisk)
- Validation feedback inline

**Admin Content Editor**:
- Rich text toolbar (bold, italic, lists, headings)
- Image upload with preview
- Drag-and-drop file support
- Save/Publish/Draft buttons (distinct styles)

### Data Displays
**Tables** (for market prices, crop data):
- Striped rows (alternate background)
- Sortable headers with icons
- Sticky header on scroll
- Mobile: convert to cards below md breakpoint

**Analytics Dashboard**:
- Line charts for weather trends (7-day forecast)
- Bar charts for market price comparison
- Donut chart for seasonal overview
- Cards with key metrics (temperature, rainfall, price changes)

### Buttons & Actions
**Primary Actions**: Filled buttons (Add to Cart, Submit, Checkout)
**Secondary Actions**: Outlined buttons (View Details, Edit)
**Tertiary Actions**: Text buttons (Cancel, Back)
**Icon Buttons**: For admin actions (edit, delete) with tooltips

### Modals & Overlays
**Disease/Pest Detail Modal**:
- Full-screen on mobile, centered dialog on desktop
- Header with close button
- Tabbed content: Overview | Lifecycle | Prevention | Treatment
- Image gallery for disease identification

**Cart Drawer**:
- Slide from right
- Product list with quantity controls
- Subtotal calculation
- Checkout button (sticky at bottom)

---

## Page-Specific Layouts

### Production/Protection Guide Pages
**Structure**:
- Left: Guide content (prose formatting, max-w-3xl)
- Right sidebar: Live weather widget, market price ticker, seasonal calendar
- Top: Breadcrumb navigation
- Inline: Embedded product recommendations (referenced from guide text)

**Guide Content Layout**:
- Step-by-step sections with numbered headings
- Expandable accordion for detailed practices
- Image/diagram support with captions
- Related guides footer section

### Shop Page
**Layout**:
- Filter sidebar (left, w-64): Category checkboxes, price range, product type
- Product grid (right, flex-1): 3-4 columns
- Top bar: Sort dropdown, view toggle (grid/list), results count
- Pagination at bottom

### Admin Dashboard
**Overview Cards** (top row):
- Total Products, Active Users, Orders Today, Revenue
- Icon + large number + trend indicator

**Content Management Section**:
- Tabbed interface: Guides | Products | Users | Orders
- Data table with search, filter, bulk actions
- Quick edit panel (side drawer)

### Customer Profile/Dashboard
**Layout**:
- Header with user details and edit button
- Tabs: My Crops | Order History | Recommendations | Settings
- My Crops: Card grid showing registered crops with quick stats
- Recommendations: Timeline of sent messages with status

---

## Iconography
**Icon Library**: Material Icons (via CDN)
- Navigation: menu, shopping_cart, person, search
- Categories: agriculture, spa (garden), pets (animal husbandry), eco
- Actions: add_circle, edit, delete, download, upload
- Status: check_circle, warning, error, info
- Weather: wb_sunny, cloud, water_drop, air

---

## Images

### Hero Section (Landing/Home Page)
**Large hero image**: Vibrant agricultural landscape - terraced fields or farmer in modern greenhouse
- Height: 60vh on desktop, 40vh on mobile
- Overlay: Dark gradient (bottom to top, opacity 60%)
- Content: Centered text with primary CTA button (blurred background on button)

### Guide Pages
**Inline images**: Crop lifecycle diagrams, disease identification photos
- Max width: w-full md:w-2/3, centered
- Caption: text-sm, italic, centered

### Product Images
**Standardized**: Square aspect ratio (1:1), white/neutral background
- Size: Consistent across all products for uniformity

### Admin Interface
**No decorative images** - focus on functionality and data visualization

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column layouts, hamburger menu)
- Desktop: > 1024px (full layout with sidebar, mega menu)

**Key Adaptations**:
- Navigation: Hamburger menu → Full top bar + mega menu
- Product grid: 1 column → 2 columns → 3-4 columns
- Data tables: Card stack → Full table
- Sidebars: Bottom sheet/drawer → Fixed sidebar

---

## Accessibility Standards
- Minimum contrast ratio: 4.5:1 for text
- Touch targets: min-h-12 min-w-12 (48px)
- Keyboard navigation: Focus indicators on all interactive elements
- Screen reader: Semantic HTML, ARIA labels for icons
- Form labels: Always visible, properly associated with inputs