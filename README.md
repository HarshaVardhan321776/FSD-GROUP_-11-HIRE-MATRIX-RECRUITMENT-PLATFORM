# HireMatrix - Job Application & Interview Management System

A comprehensive full-stack application for managing the entire hiring lifecycle with role-based access control (RBAC). Built with modern technologies to streamline recruitment processes for organizations.

## 🚀 Features

### Core Functionality
- **Job Management**: Create, update, and manage job postings
- **Application Tracking**: Submit and track job applications with status updates
- **Interview Scheduling**: Schedule and manage interviews with real-time notifications
- **File Uploads**: Resume and document uploads with secure storage
- **Real-time Notifications**: Socket.io-powered instant updates
- **Email Integration**: Automated email notifications and templates

### Role-Based Access Control (RBAC)
- **Applicant**: Apply for jobs, track applications, manage profile
- **Recruiter**: Create jobs, screen applicants, schedule interviews
- **HR Manager**: Oversee hiring pipeline, manage compliance
- **Hiring Manager**: Evaluate candidates, provide interview feedback
- **Admin**: Full system governance and user management

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **Multer** - File uploads

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Hot Toast** - Notification library
- **Lucide React** - Icon library

### Development Tools
- **Jest** - Testing framework
- **Supertest** - API testing
- **Nodemon** - Development server auto-restart
- **PostCSS** - CSS processing

## 📁 Project Structure

```
Harsha_fullstack/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── api.js        # API client
│   │   ├── App.jsx       # Main app component
│   │   ├── main.jsx      # App entry point
│   │   ├── state.jsx     # Global state management
│   │   └── assets/       # Dynamic assets
│   ├── package.json
│   ├── vite.config.js
│   └── postcss.config.js
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── app.js        # Express app setup
│   │   ├── config/
│   │   │   └── db.js     # Database configuration
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # Mongoose models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic services
│   │   ├── sockets/      # Socket.io handlers
│   │   └── utils/        # Utility functions
│   ├── tests/            # Test files
│   ├── uploads/          # File uploads directory
│   ├── package.json
│   └── index.js          # Server entry point
└── docs/                 # Documentation
    └── RBAC_ACCESS_CONTROL.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Harsha_fullstack
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/hirematrix
   JWT_SECRET=your-super-secret-jwt-key
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

6. **Start the development servers**

   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001

## 📜 Available Scripts

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run test suite

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔐 Authentication & Authorization

The system implements JWT-based authentication with role-based access control:

- **JWT Tokens**: Used for session management
- **Password Hashing**: bcryptjs for secure password storage
- **Role Permissions**: Granular permissions based on user roles
- **Middleware Protection**: Route-level authorization checks

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Jobs
- `GET /api/jobs` - Get all jobs (filtered by role)
- `POST /api/jobs` - Create new job (Recruiter/Admin)
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Applications
- `POST /api/applications` - Submit application
- `GET /api/applications` - Get applications
- `PUT /api/applications/:id` - Update application status

### Interviews
- `POST /api/interviews` - Schedule interview
- `GET /api/interviews` - Get interviews
- `PUT /api/interviews/:id` - Update interview details

### Admin
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

## 🧪 Testing

Run the test suite:
```bash
cd server
npm test
```

Tests include:
- API endpoint testing
- Authentication flows
- RBAC permission checks
- Workflow validations

## 📧 Email Configuration

The application uses Nodemailer for email notifications. Configure your email service in the `.env` file:

- **Gmail**: Use app passwords for secure access
- **Other Providers**: Update SMTP settings in `src/utils/mailer.js`

## 🔒 Security Features

- **Input Validation**: Comprehensive input sanitization
- **CORS Protection**: Configured for frontend origin
- **File Upload Security**: Type and size restrictions
- **Rate Limiting**: API rate limiting (can be added)
- **Password Policies**: Strong password requirements

## 🚀 Deployment

### Backend Deployment
1. Build and deploy to your preferred Node.js hosting (Heroku, Railway, etc.)
2. Set environment variables
3. Ensure MongoDB connection
4. Run database migrations if needed

### Frontend Deployment
1. Build the production bundle:
   ```bash
   cd client
   npm run build
   ```
2. Deploy to static hosting (Netlify, Vercel, etc.)
3. Configure API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ for efficient hiring processes**
