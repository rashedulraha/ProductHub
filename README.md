# ProductHub - Full-Stack E-Commerce Demo

A production-ready full-stack application built with Next.js 16 (App Router) and Express.js, featuring product management, authentication, and a modern UI powered by Tailwind CSS and shadcn/ui components.

## Features

- **Public Landing Page**: 7 compelling sections including hero, features, how it works, categories, testimonials, pricing, and CTA
- **Product Browsing**: Responsive grid view with filtering and search capabilities
- **Product Details**: Detailed product pages with ratings, descriptions, and related items
- **Authentication**: Mock authentication system with secure cookie-based sessions
- **Protected Routes**: Admin-only add item page with middleware protection
- **Modern UI**: Clean, minimal design using Tailwind CSS v4 and shadcn/ui components
- **Full-Stack API**: Next.js API routes with RESTful endpoints
- **Optional Express Backend**: Standalone Express.js API server for external consumption

## Project Structure

```
project/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Landing page with 7 sections
│   ├── globals.css          # Tailwind CSS configuration
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   └── logout/route.ts
│   │   └── items/
│   │       ├── route.ts     # GET all items, POST new item
│   │       └── [id]/route.ts # GET single item
│   ├── items/
│   │   ├── page.tsx         # Items list page
│   │   └── [id]/
│   │       └── page.tsx     # Item details page
│   ├── login/
│   │   ├── page.tsx         # Login form
│   │   └── loading.tsx
│   └── add-item/
│       └── page.tsx         # Protected add item form
├── components/
│   ├── navbar.tsx           # Navigation with auth links
│   ├── footer.tsx           # Footer with links
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── data.ts             # Mock product data
│   ├── auth.ts             # Server-side auth utilities
│   ├── auth-client.ts      # Client-side auth functions
│   └── utils.ts            # Helper functions
├── proxy.ts                # Middleware for route protection
├── public/                 # Product images and assets
└── server/
    ├── index.js            # Express.js API server
    └── package.json
```

## Authentication

### Mock Credentials

```
Email: admin@example.com
Password: 123456
```

### How It Works

1. Users submit credentials to `/api/auth/login`
2. Server validates against hardcoded credentials
3. Secure HTTP-only cookie is set for 24 hours
4. Middleware (`proxy.ts`) checks cookie for protected routes
5. Unauthenticated users are redirected to login page
6. Login page pre-fills credentials for demo purposes

## Routes

### Public Routes

- `/` - Landing page with 7 sections
- `/items` - Browse all products
- `/items/[id]` - View product details
- `/login` - Authentication form

### Protected Routes (Requires Login)

- `/add-item` - Create new product (admin only)

### API Routes

#### Items

- `GET /api/items` - Get all items
- `GET /api/items/[id]` - Get single item
- `POST /api/items` - Create new item

#### Authentication

- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/logout` - Clear auth cookie

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Development

The application uses Next.js development server with hot reloading. All changes are automatically reflected in the browser.

## Testing

### Test the Full Flow

1. Visit homepage at `http://localhost:3000`
2. Browse items at `/items`
3. View product details at `/items/1`
4. Try accessing `/add-item` (redirects to login)
5. Login with demo credentials (admin@example.com / 123456)
6. Create a new product
7. New product appears in items list
8. Click logout button (visible after login)

### Login Pre-filled

The login form is pre-filled with demo credentials for easier testing. Remove the default values from the login form if desired.

## Express.js Backend (Optional)

A standalone Express.js server is included for those who want to run the API separately.

### Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start the server
npm start

# For development with hot reload
npm run dev
```

The Express server will run on `http://localhost:5000` and provides the same REST API endpoints.

### Express Endpoints

- `GET /api/items` - Get all products
- `GET /api/items/:id` - Get single product
- `POST /api/items` - Create new product
- `PUT /api/items/:id` - Update product
- `DELETE /api/items/:id` - Delete product
- `GET /health` - Health check

## Code Quality

### Best Practices Implemented

- ✅ Server Components by default, Client Components where needed
- ✅ Environment variables for configuration
- ✅ Proper error handling and validation
- ✅ Type-safe with TypeScript
- ✅ SEO-friendly metadata
- ✅ Responsive design (mobile-first)
- ✅ Semantic HTML
- ✅ ARIA labels for accessibility
- ✅ Reusable components
- ✅ Loading states and error boundaries

## Styling

### Design System

- **Color Scheme**: Professional neutral with primary blue accent
- **Typography**: Clean sans-serif with optimal line heights
- **Layout**: Flexbox-based responsive design
- **Components**: shadcn/ui for consistency
- **Utilities**: Tailwind CSS v4 for styling

## Database

Currently uses in-memory mock data. To add persistent storage:

1. **Supabase**: Update API routes to query Supabase database
2. **Neon**: Use `@neondatabase/serverless` package
3. **MongoDB**: Add mongoose for document storage
4. **PostgreSQL**: Use pg or Prisma ORM

## Security Considerations

For production deployment:

1. Replace mock auth with proper authentication (NextAuth.js, Supabase Auth)
2. Use environment variables for sensitive data
3. Implement proper password hashing (bcrypt)
4. Add rate limiting to API routes
5. Use HTTPS only
6. Implement CSRF protection
7. Add input validation and sanitization
8. Set up proper CORS policies

## Deployment

### Deploy to Vercel

```bash
# Connect GitHub repository
git push origin main

# Vercel automatically deploys on push
```

### Environment Variables

Add to Vercel project settings:

```
NEXT_PUBLIC_API_URL=https://your-domain.com
NODE_ENV=production
```

## Performance

- ✅ Static generation for landing and item list pages
- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for images
- ✅ CSS minification
- ✅ JavaScript bundling and code splitting

## Future Enhancements

- [ ] Real database integration (Supabase/Neon)
- [ ] User accounts and profiles
- [ ] Shopping cart functionality
- [ ] Payment processing (Stripe)
- [ ] Product reviews and ratings
- [ ] Search and filtering
- [ ] Image upload functionality
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Admin panel

## Troubleshooting

### Login not working

1. Verify email is `admin@example.com`
2. Verify password is `123456`
3. Check browser cookies are enabled
4. Clear cookies and try again

### Protected routes not working

1. Ensure you're logged in (check for auth cookie)
2. Check middleware configuration in `proxy.ts`
3. Verify route is in protected routes array

### Items not loading

1. Verify API is running and accessible
2. Check network tab for API errors
3. Ensure mock data is properly exported

## License

MIT

## Support

For issues or questions, please open a GitHub issue or contact support.

---

Built with ❤️ using Next.js, Express, and Tailwind CSS
