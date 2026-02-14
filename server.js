const express = require("express");
const session = require("express-session");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Session setup
app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false
}));

// Hardcoded credentials
const AUTH_USER = {
    username: "admin",
    password: "1234"
};

// Helper function to read JSON file
function readData() {
    const data = fs.readFileSync("data.json");
    return JSON.parse(data);
}

// Helper function to write JSON file
function writeData(data) {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

// Middleware to check login
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

// ================= HOME PAGE =================
app.get("/", (req, res) => {
    const data = readData();
    res.render("index", { 
        bloodStock: data.bloodStock,
        message: null,
        messageType: null,
        donors: null
    });
});

// ================= PUBLIC DONOR REGISTRATION (from home page) =================
app.post("/register", (req, res) => {
    const { name, bloodGroup, phone, city } = req.body;

    const data = readData();
    data.donors.push({ name, bloodGroup, phone, city });
    writeData(data);

    // Redirect back to home page with success message
    res.redirect("/login");
});

// ================= SEARCH DONORS =================
app.post("/search", (req, res) => {
    const { bloodGroup, city } = req.body;
    const data = readData();

    // Filter donors by blood group and city
    const filteredDonors = data.donors.filter(donor => 
        donor.bloodGroup === bloodGroup && 
        donor.city.toLowerCase() === city.toLowerCase()
    );

    res.render("index", {
        bloodStock: data.bloodStock,
        message: null,
        messageType: null,
        donors: filteredDonors
    });
});

// ================= EMERGENCY REQUEST =================
app.post("/emergency", (req, res) => {
    const { patientName, bloodGroup, hospitalName, contactNumber } = req.body;
    
    // Here you can add logic to send notifications, save emergency requests, etc.
    // For now, we'll just show a success message
    
    const data = readData();
    res.render("index", {
        bloodStock: data.bloodStock,
        message: `Emergency request submitted for ${patientName}. Blood Group: ${bloodGroup}. We will contact available donors immediately.`,
        messageType: "success",
        donors: null
    });
});

// ================= LOGIN PAGE =================
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

// ================= LOGIN POST =================
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === AUTH_USER.username && password === AUTH_USER.password) {
        req.session.user = username;
        res.redirect("/dashboard");
    } else {
        res.render("login", { error: "Invalid Credentials" });
    }
});

// ================= DASHBOARD (Admin Only) =================
app.get("/dashboard", isAuthenticated, (req, res) => {
    const data = readData();
    res.render("dashboard", { 
        donors: data.donors,
        bloodStock: data.bloodStock,
        availabilityResult: null 
    });
});

// ================= ADMIN DONOR REGISTRATION PAGE =================
app.get("/admin/register", isAuthenticated, (req, res) => {
    res.render("register");
});

// ================= ADMIN REGISTER DONOR =================
app.post("/admin/register", isAuthenticated, (req, res) => {
    const { name, bloodGroup, phone, city } = req.body;

    const data = readData();
    data.donors.push({ name, bloodGroup, phone, city });
    writeData(data);

    res.redirect("/dashboard");
});

// ================= UPDATE STOCK (Admin Only) =================
app.post("/update-stock", isAuthenticated, (req, res) => {
    const { bloodGroup, units } = req.body;

    const data = readData();

    // Convert units to number
    const numberUnits = parseInt(units);

    // Update stock
    data.bloodStock[bloodGroup] += numberUnits;

    writeData(data);

    res.redirect("/dashboard");
});

// ================= LOGOUT =================
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

// ================= START SERVER =================
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});