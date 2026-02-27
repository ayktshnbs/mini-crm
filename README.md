#  Mini CRM – Full Stack MERN Application

🔗 **Live Demo:** https://mini-crm-opal.vercel.app/  
🌐 **Backend:** Render (Node + Express)  
☁️ **Database:** MongoDB Atlas  

Mini CRM is a full-stack lead management application built with React, Node.js, Express, and MongoDB Atlas.  
The project demonstrates CRUD operations, cloud deployment, environment configuration, and production-ready architecture.

---

##  Tech Stack

### Frontend
- React (Create React App)
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB Atlas

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

##  Features

- Add new leads
- Delete leads
- Update lead status (New / Contacted / Won / Lost)
- Persistent cloud database
- Production deployment (separate frontend & backend)
- Environment-based API configuration

---

##  Project Structure (Monorepo)

mini-crm/
│
├── client/ # React Frontend
├── server/ # Express Backend
└── package.json # Concurrent dev configuration


---

##  API Endpoints

| Method | Endpoint        | Description |
|--------|-----------------|-------------|
| GET    | `/`             | Health check |
| GET    | `/leads`        | Get all leads |
| POST   | `/leads`        | Create a new lead |
| PUT    | `/leads/:id`    | Update a lead |
| DELETE | `/leads/:id`    | Delete a lead |

### Example Request Body

```json
{
  "name": "Aykut",
  "email": "aykut@mail.com"
} ```

## Clone repository

git clone https://github.com/ayktshnbs/mini-crm.git
cd mini-crm


Install dependencies
npm install
npm install --prefix server
npm install --prefix client

Configure Environment

Create server/.env file:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mini_crm?retryWrites=true&w=majority
PORT=5000

Start development
npm run dev

Frontend → http://localhost:3000

Backend → http://localhost:5000

Deployment Setup
Backend (Render)

Root Directory: server

Build Command: npm install

Start Command: npm start

Environment Variable:

MONGODB_URI

Frontend (Vercel)

Root Directory: client

Environment Variable:

REACT_APP_API_BASE_URL=<Render Backend URL>

Security

Environment variables stored securely

.env excluded via .gitignore

MongoDB Atlas IP access control

API base URL configured per environment

Future Improvements

JWT Authentication

User accounts

Role-based permissions

Search & filtering

Pagination

Analytics dashboard

Docker support

Author

Aykut Şahinbaş
GitHub: https://github.com/ayktshnbs


---

License

MIT
