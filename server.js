const express = require("express");
const session = require("express-session");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;


app.post("/search", (req, res) => {
    res.send("Search route working");
});

app.post("/emergency", (req, res) => {
    res.send("Emergency route working");
});
app.set("view engine", "ejs");



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

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
        res.redirect("/");
    }
}

// ================= LOGIN PAGE =================
app.get("/", (req, res) => {
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

// ================= DASHBOARD =================
app.get("/dashboard", isAuthenticated, (req, res) => {
    const data = readData();
    res.render("dashboard", { donors: data.donors,bloodStock:data.bloodStock,availabilityResult:null });
});

// ================= REGISTRATION PAGE =================
app.get("/register", isAuthenticated, (req, res) => {
    res.render("register");
});

// ================= REGISTER DONOR =================
app.post("/register", isAuthenticated, (req, res) => {
    const { name, bloodGroup, phone } = req.body;

    const data = readData();
    data.donors.push({ name, bloodGroup, phone });
    writeData(data);

    res.redirect("/dashboard");
});
// ================= UPDATE STOCK =================
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

