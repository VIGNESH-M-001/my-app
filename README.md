# Referral Management System - Frontend

A modern React-based frontend application for managing and tracking referrals. Built with Vite for fast development and optimized production builds.

## 🚀 Features

- **User Authentication**: Secure login system with JWT token-based authentication
- **Dashboard**: Overview of referral metrics and statistics
- **Referral Management**: View, track, and manage referrals
- **Responsive Design**: Mobile-friendly interface
- **Real-time Data**: Fetch and display referral data from a backend API
- **Routing**: Client-side routing with React Router for seamless navigation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**

## 🔧 Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🎯 Available Scripts

### Development Server
Start the development server with hot module replacement (HMR):
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
Build the project for production:
```bash
npm run build
```
Output will be generated in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Check code quality and style compliance:
```bash
npm run lint
```

## 📁 Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── Dashboard/          # Main dashboard view
│   │   ├── Footer/             # Footer component
│   │   ├── Header/             # Header navigation
│   │   ├── LoginForm/          # User authentication
│   │   ├── NotFound/           # 404 error page
│   │   ├── Overview/           # Dashboard overview section
│   │   ├── Referral/           # Referral information section
│   │   ├── ReferralDetails/    # Detailed referral view
│   │   ├── ReferralTable/      # Referral list/table
│   │   └── Summary/            # Summary statistics section
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   ├── App.css                 # Global styles
│   └── index.css               # Base styles
├── public/                     # Static assets
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint configuration
```

## 🛣️ Routes

The application includes the following routes:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Main dashboard with referral overview |
| `/login` | LoginForm | User login page |
| `/referral/:id` | ReferralDetails | Detailed view of a specific referral |
| `/*` | NotFound | 404 error page for undefined routes |

## 🔐 Authentication

The application uses JWT token-based authentication:
- Login credentials are validated against the backend API
- JWT tokens are stored in browser cookies for session management
- Protected routes redirect unauthenticated users to the login page

## 🌐 API Integration

The application connects to an AWS Lambda API for data:
- **Base URL**: `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api`
- **Endpoints**: 
  - `GET /referrals` - Fetch referral data (requires authentication)

## 🛠️ Technologies Used

- **React** (v19.2.6) - UI library
- **Vite** (v8.0.12) - Build tool and dev server
- **React Router DOM** (v7.18.0) - Client-side routing
- **js-cookie** (v3.0.8) - Cookie management
- **ESLint** - Code quality and linting

## 📝 Development Workflow

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Make changes to components in the `src/` directory

3. Changes are automatically reflected in the browser (HMR)

4. Run linting to check code quality:
   ```bash
   npm run lint
   ```

5. When ready to deploy, build for production:
   ```bash
   npm run build
   ```

## 🚢 Deployment

1. Build the project for production:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting service (Vercel, Netlify, AWS S3, etc.)

3. Configure environment variables if needed for different API endpoints

## 🐛 Troubleshooting

- **Port already in use**: If port 5173 is occupied, Vite will use the next available port
- **CORS issues**: Ensure the backend API allows requests from your frontend domain
- **Authentication failures**: Check that JWT tokens are properly stored in cookies
- **Module not found errors**: Run `npm install` to ensure all dependencies are installed

## 📄 License

This project is part of a frontend assessment.

## 👥 Support

For issues or questions, please review the component structure and API integration details in the source code.
