# Social Webapp

A modern Next.js application showcasing user profiles, posts, and social connections with a clean, responsive design.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Built-in Tailwind utilities

## Getting Started

### Prerequisites

- Node.js 22+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd socialwebapp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## App Flow

### Home Page
- Displays a grid of user cards showing basic user information
- Each card includes avatar, name, username, bio, and numbers of followers
- Click on any user card to navigate to their detailed profile

### User Profile Page
- Shows comprehensive user information in a tabbed interface
- **Posts Tab**: Displays all posts from friends with expandable content
- **Friends Tab**: Lists all friends with their profiles
- **Profile Tab**: Complete user details including email, join date, bio, location, and friend count
- Includes a "Back to Home" link for easy navigation

### Features
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dynamic Content**: Posts can be expanded to show full/detail content
- **Mock Data**: Uses realistic mock data for demonstration

### API Endpoints
- `GET /api/users` - Returns all users
- `GET /api/users/[id]` - Returns specific user details
- `GET /api/post/[id]` - Returns all posts from friends of the user

### Data Flow
- All data is served through mock API routes
- Uses fetch in Server and Client Components
- Simulated network delays for realistic feel

## Project Structure

```
app/
├── api/
│   ├── users/
|   |   |── route.ts.       # User API endpoints
|   |   |── [userId]/
│   |   |   └── route.ts
│   ├── posts/              # Post API endpoints
│   |    └── [userId]/
│   |        └── route.ts
├── components/
│   ├── BackToHomeButton.tsx      # Navigation helper component
│   ├── Friends.tsx               # Friends list component
│   ├── NotFound.tsx              # 404 / no-data component
│   ├── SideBar.tsx               # Sidebar navigation component
│   ├── Tabs.tsx                  # Tabs component
│   ├── UserCard.tsx              # User card component
│   ├── UserProfile.tsx           # Detailed user profile component
│   └── post/
│       ├── PostCard.tsx          # Post card component
│       └── PostList.tsx          # User posts list component
├── lib/
│   └── mockdata.ts        # Mock user and post data
├── profile/[userId]/
│   └── page.tsx           # User profile page
├── types/
│   └── index.ts           # TypeScript interfaces
└── page.tsx               # Home page
```

## Testing and Coverage

### Run Test Suite
```bash
npm test
# or
npm run test:watch
```

### View Coverage Results
After running tests with coverage, open the generated report in `coverage/index.html` to review component- and file-level coverage metrics.

## Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).
