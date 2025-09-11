const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const dashboardRoutes = require("./routes/dashboard");
const attendanceRoutes = require("./routes/attendance");
const leaveRoutes = require("./routes/leave");
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express();
const port = 3000;

function getMidnightExpiry() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
}

app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: "your-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: null,
        },
    })
);

app.use((req, res, next) => {
    if (req.session) {
        req.session.cookie.maxAge = getMidnightExpiry();
    }
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/leave-requests", leaveRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
