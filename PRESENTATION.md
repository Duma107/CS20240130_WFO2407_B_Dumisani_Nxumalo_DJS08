## Question 1: Setup and Basic Configuration of React Router

### Purpose of React Router
React Router is essential in our VanLife application for creating a seamless single-page application experience. It enables:
- Client-side routing without full page reloads
- URL-based navigation and bookmarking
- Maintaining UI state while navigating
- Better user experience with instant page transitions

### Setting up React Router
In this project,I set up React Router using BrowserRouter in `app.tsx`:
```jsx
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### Role of Routes and Route Components
The routing structure in `App.tsx` demonstrates the hierarchical organization:
```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} />
    <Route path="vans/:id" element={<VanDetail />} />
  </Route>
</Routes>
```
- `<Routes>` acts as a container for all route definitions
- `<Route>` defines individual URL paths and their corresponding components

## Question 2: Route Parameters and Nested Routes

### Route Parameters
In the VanLife project, I use route parameters extensively:
```jsx
// In VanDetail.tsx
const { id } = useParams();
```
This allows us to:
- Capture dynamic values from URLs
- Access specific van details using the ID
- Create reusable component logic for different van pages

### Nested Routes
Our host dashboard demonstrates nested routing:
```jsx
<Route path="host" element={<HostLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="income" element={<Income />} />
  <Route path="vans" element={<HostVans />} />
  <Route path="vans/:id" element={<HostVanDetail />}>
    <Route index element={<HostVanInfo />} />
    <Route path="pricing" element={<HostVanPricing />} />
    <Route path="photos" element={<HostVanPhotos />} />
  </Route>
</Route>
```
Benefits:
- Shared layouts between related routes
- Organized component hierarchy
- Modular and maintainable code structure

## Question 3: Navigation Controls and Dynamic Linking

### Link Component
We use `Link` throughout the application for navigation:
```jsx
<Link to="/vans" className="...">
  Find your van
</Link>
```
Benefits:
- Prevents full page reloads
- Maintains application state
- Better performance and user experience

### NavLink for Active Styling
In our navigation components:
```jsx
<NavLink 
  to="host"
  className={({ isActive }) => isActive ? activeStyles : ""}
>
  Host
</NavLink>
```
Advantages over Link:
- Automatic active state detection
- Dynamic styling based on current route
- Better user interface feedback

### Search Parameters and Filtering
In our Vans page:
```jsx
const [searchParams, setSearchParams] = useSearchParams();
const typeFilter = searchParams.get('type');

// Filter implementation
const displayedVans = typeFilter
  ? vans.filter(van => van.type.toLowerCase() === typeFilter)
  : vans;
```
This enables:
- Dynamic filtering without page reloads
- Shareable filtered URLs
- Preserved filter state in navigation history