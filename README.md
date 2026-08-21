# DIGI-DOCTOR 🩺

**DIGI-DOCTOR** is a full-stack healthcare appointment management platform built using the MERN stack. It provides separate workflows for **Patients, Doctors, and Administrators**, allowing patients to discover doctors and book appointments while doctors and admins manage availability and appointments.

> **Note:** This project is intended for educational/portfolio purposes. It is not a substitute for a production-grade healthcare system. Although it can be extended to production-grade one.

---

## ✨ Features

### 👤 Patient Portal
- User registration and login
- JWT-based authentication
- Browse available doctors
- Filter doctors by speciality
- View detailed doctor profiles
- View doctor availability and booking slots
- Book appointments
- View personal appointments
- Cancel appointments
- View and update profile information
- Logout

### 👨‍⚕️ Doctor Portal
- Secure doctor login
- JWT-based authentication
- View appointments
- Manage doctor availability
- View/update profile information
- Manage appointment-related information
- Logout

> Doctors cannot cancel appointments. Appointment cancellation is handled by the patient or administrator.

### 🛠️ Admin Portal
- Secure admin login
- Admin dashboard
- View appointment statistics
- View all appointments
- Add doctors
- Update doctor information
- Delete doctors
- Change doctor availability
- Manage doctor records
- Cancel appointments
- Logout

### ☁️ Other Features
- RESTful backend APIs
- MongoDB database with Mongoose
- Cloudinary-based image storage
- Multer-based file uploads
- JWT authentication
- Role-based workflows
- React + Vite frontend applications
- Separate patient and admin interfaces

## 🧰 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- CORS
- dotenv

### Development Tools
- npm
- Git
- GitHub

---

## 🏗️ Project Architecture

DIGI-DOCTOR consists of three applications:

```text
DIGI-DOCTOR/
│
├── frontend/              # Patient-facing React application
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
│
├── admin/                 # Admin dashboard React application
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
│
├── backend/               # Node.js + Express API server
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

### Backend Structure

```text
backend/
├── config/          # Database and external service configuration
├── controllers/     # Application/business logic
├── middlewares/     # Authentication and request middleware
├── models/          # Mongoose database models
├── routes/          # API route definitions
├── server.js        # Backend entry point
└── package.json
```

---

# 🚀 Getting Started

## Prerequisites

Before running the project, install:

- **Node.js v24.18.0** (or a compatible modern Node.js version)
- npm
- Git
- MongoDB Atlas account
- Cloudinary account

Check your installation:

```bash
node -v
npm -v
git --version
```

---

# 📥 Installation

## 1. Clone the repository

```bash
git clone https://github.com/RHYTHMMIRDHA/DIGI_DOCTOR.git
cd DIGI_DOCTOR
```

---

## 2. Install backend dependencies

```bash
cd backend
npm install
```

---

## 3. Install frontend dependencies

Open another terminal or return to the project root:

```bash
cd ../frontend
npm install
```

---

## 4. Install admin dependencies

```bash
cd ../admin
npm install
```

---

# 🔐 Environment Variables

The project uses environment variables for database connections, authentication, Cloudinary, and application configuration.

**Never commit real `.env` files or secrets to GitHub.**

Add `.env` to `.gitignore`:

```gitignore
.env
.env.local
node_modules/
```

---

## Backend `.env`

Create:

```text
backend/.env
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=4000

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

ADMIN_EMAIL=admin@digidoctor.com
ADMIN_PASSWORD=your_admin_password

JWT_SECRET=your_jwt_secret
```

### Environment variable explanation

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `PORT` | Backend server port |
| `CLOUDINARY_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_SECRET_KEY` | Cloudinary API secret |
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Admin login password |
| `JWT_SECRET` | Secret used to sign and verify JWTs |

---

## Frontend `.env`

Create:

```text
frontend/.env
```

Add:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Admin `.env`

Create:

```text
admin/.env
```

Add:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# 🗄️ MongoDB Setup

DIGI-DOCTOR uses MongoDB for persistent application data.

For your own local installation:

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Configure network/IP access.
5. Copy your MongoDB connection string.
6. Put the connection string in:

```text
backend/.env
```

Example:

```env
MONGODB_URI=your_mongodb_connection_string
```

The application will use Mongoose to connect the backend to MongoDB.

> **Important:** Use your own MongoDB credentials instead of committing or sharing database credentials.

---

# ☁️ Cloudinary Setup

DIGI-DOCTOR uses **Cloudinary** for cloud-based image storage.

Cloudinary is used for doctor/user image handling and image uploads.

### Setup

1. Create a Cloudinary account.
2. Open your Cloudinary dashboard.
3. Obtain:
   - Cloud Name
   - API Key
   - API Secret
4. Add them to `backend/.env`.

```env
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
```

The backend uses **Multer** to handle uploaded files before processing/storing them through Cloudinary.

---

# ▶️ Running the Project

DIGI-DOCTOR contains **three separate applications**, so all three need to be running.

## 1. Start the Backend

Open a terminal:

```bash
cd backend
npm run server
```

Backend:

```text
http://localhost:4000
```

---

## 2. Start the Patient Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Vite will display the local frontend URL in the terminal, usually:

```text
http://localhost:5173
```

---

## 3. Start the Admin Dashboard

Open another terminal:

```bash
cd admin
npm run dev
```

Vite will display the admin dashboard URL in the terminal.

---

## Running Everything

You should have three terminals:

```text
Terminal 1
-----------
cd backend
npm run server


Terminal 2
-----------
cd frontend
npm run dev


Terminal 3
-----------
cd admin
npm run dev
```

---

# 🔑 Authentication Flow

DIGI-DOCTOR uses **JWT (JSON Web Tokens)** for authentication.

The general authentication flow is:

```text
User Login
    ↓
Backend validates credentials
    ↓
JWT generated
    ↓
JWT stored on client
    ↓
Protected API request
    ↓
JWT sent through request headers
    ↓
Authentication middleware
    ↓
jwt.verify()
    ↓
User ID extracted
    ↓
Protected controller executes
```

This allows protected resources to be accessed only after successful authentication.

---

# 👥 User Roles

DIGI-DOCTOR provides three major roles:

```text
Patient
Doctor
Admin
```

### Patient

Patients can:

- Create an account
- Log in
- Browse doctors
- Filter doctors by speciality
- View doctor profiles
- Check available slots
- Book appointments
- View appointments
- Cancel appointments
- Manage their profile

### Doctor

Doctors can:

- Log in
- View appointments
- Manage availability
- Manage their profile
- Access doctor-specific functionality

Doctors **cannot cancel appointments**.

### Admin

Administrators can:

- Log in
- View dashboard statistics
- View appointments
- Add doctors
- Update doctors
- Delete doctors
- Change doctor availability
- Cancel appointments
- Manage doctor records

---

# 🔌 API Documentation

The backend exposes REST APIs for authentication, users, doctors, appointments, and administration.

## API Base URL

```text
http://localhost:4000
```

## User APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/register` | Register a patient |
| POST | `/api/user/login` | Patient login |
| GET | `/api/user/get-profile` | Get authenticated user profile |
| POST | `/api/user/update-profile` | Update user profile |
| GET | `/api/user/appointments` | Get user's appointments |
| POST | `/api/user/book-appointment` | Book an appointment |
| POST | `/api/user/cancel-appointment` | Cancel an appointment |

## Doctor APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/doctor/login` | Doctor login |
| GET | `/api/doctor/appointments` | Get doctor appointments |
| POST | `/api/doctor/change-availability` | Change doctor availability |
| GET | `/api/doctor/profile` | Get doctor information |

> Endpoint names may depend on the route definitions in the current backend implementation. Refer to the corresponding files in `backend/routes/` for the complete route list.

## Admin APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/admin/login` | Admin login |
| GET | `/api/admin/dashboard` | Get dashboard statistics |
| POST | `/api/admin/all-doctors` | Get all doctors |
| POST | `/api/admin/add-doctor` | Add a doctor |
| POST | `/api/admin/change-availability` | Change doctor availability |
| POST | `/api/admin/delete-doctor` | Delete a doctor |
| POST | `/api/admin/cancel-appointment` | Cancel an appointment |

---

# 🔄 Appointment Flow

The main appointment workflow is:

```text
Patient
   ↓
Browse Doctors
   ↓
Select Speciality
   ↓
Open Doctor Profile
   ↓
Check Available Slots
   ↓
Select Date & Time
   ↓
Book Appointment
   ↓
Appointment Stored in MongoDB
   ↓
View Appointment in "My Appointments"
```

Cancellation can be performed by:

```text
Patient ──────────┐
                  ├──→ Cancel Appointment
Admin ────────────┘
```

Doctors do not cancel appointments.

---

# 📊 Admin Workflow

The administrator has a dedicated dashboard for managing the healthcare platform.

```text
Admin Login
     ↓
Admin Dashboard
     ├── View Statistics
     ├── Manage Appointments
     ├── Add Doctor
     ├── Update Doctor
     ├── Delete Doctor
     └── Change Doctor Availability
```

---

# 🛡️ Security

The project uses several security-related practices:

- JWT-based authentication
- Password hashing with bcryptjs
- Protected API routes
- Authentication middleware
- Environment variables for secrets
- CORS configuration
- Server-side authentication checks

### Never expose:

```text
MONGODB_URI
CLOUDINARY_SECRET_KEY
JWT_SECRET
ADMIN_PASSWORD
```

in source code or GitHub.

---

# 💳 Payment Integration

**Razorpay is currently not integrated into DIGI-DOCTOR.**

Therefore, Razorpay credentials and payment setup are **not required** to run the current version of the project.

---

# ⚠️ Known Limitations

The current version does not include:

- Razorpay/payment integration
- Email/SMS appointment notifications
- Real-time notifications
- Production deployment configuration

These can be added in future versions.

---

# 🔮 Future Improvements

Potential improvements include:

- Razorpay payment integration
- Email appointment confirmations
- SMS notifications
- Real-time appointment notifications
- Doctor reviews and ratings
- Advanced admin analytics
- Production deployment
- Improved validation and error handling
- Automated testing
- Password reset functionality

---

# 🐛 Troubleshooting

## Backend cannot connect to MongoDB

Check:

```env
MONGODB_URI=your_mongodb_connection_string
```

Also verify:

- MongoDB Atlas cluster is running
- Database credentials are correct
- Your IP address is allowed in MongoDB Atlas
- The connection string is valid

---

## Frontend cannot communicate with backend

Check:

```env
VITE_BACKEND_URL=http://localhost:4000
```

and make sure the backend is running:

```bash
cd backend
npm run server
```

---

## Cloudinary upload fails

Check all three Cloudinary variables:

```env
CLOUDINARY_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_SECRET_KEY=...
```

Also make sure the Cloudinary account is active.

---

## Port already in use

If port `4000` is already occupied, stop the process using it or change the backend `PORT` and update:

```env
VITE_BACKEND_URL=http://localhost:4000
```

in both frontend and admin environments accordingly.

---

# 🤝 Contributing

Contributions are welcome.

```bash
git checkout -b feature/your-feature
```

Make your changes, test them locally, and create a pull request.

Before submitting changes:

- Keep secrets out of Git
- Do not commit `.env` files
- Test frontend, backend, and admin separately
- Follow the existing project structure

---

# 📄 License

This project is intended for educational and portfolio purposes.

If you want to distribute or modify the project publicly, add an appropriate open-source license to the repository.

---

# 👨‍💻 Author

### RHYTHM MIRDHA

- GitHub: https://github.com/RHYTHMMIRDHA
- LinkedIn: https://www.linkedin.com/in/rhythm-mirdha-9a023536a/
- LeetCode: https://leetcode.com/u/RHYTHM0034/

---

## ⭐ If you find this project useful

Consider giving the repository a ⭐ on GitHub!
