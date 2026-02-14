<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# LIFELINE HUB 🎯

The Online Blood Bank Availability System is a simple website designed to help users quickly check the availability of different blood groups in various cities. The main aim of this project is to make it easier for patients or hospitals to find required blood during emergencies. The system displays basic details such as blood group, city, and available units, and allows users to search by city. It is developed using HTML, CSS, and JavaScript (with optional Express.js for backend) and stores data in a simple format without a database. This project helps improve accessibility, saves time during emergencies, and provides a user-friendly way to check blood availability.

### Team Name: HACK STACK

### Team Members
- Member 1: Abina Mathew - LBS COLLEGE
- Member 2:Sreethu S -LBS COLLEGE
### Hosted Project Link
https://698ff09dbfe76fd28b43c6df--deft-croissant-e9bfdd.netlify.app/
### Project Description
Lifeline Hub is a web-based blood bank management system that connects blood donors with patients in need. It allows users to register donors, search for available blood by group and city, and send emergency blood requests. The system helps manage donor records and blood stock efficiently without using a database.

### The Problem statement
Many hospitals and patients struggle to find available blood donors quickly during emergencies. There is no simple platform to manage donor details and search for blood based on location and blood group.

Your project solves this problem by providing an easy system to register donors, search blood availability, and send emergency requests quickly.

### The Solution
We solve this problem by creating a web-based blood bank system where donors can register their details and blood group. The system stores donor information and blood stock in a structured format.

Users can search for required blood by selecting the blood group and city, and in emergency situations, they can send urgent requests through the platform. This makes finding blood faster and more organized.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: [node JavaScript,html]
- Frameworks used: [Express.js]
- Libraries used: [Express.js]
- Tools used: [VS Code, Git, ]



## Features

List the key features of your project:
✅ Donor Registration – Allows users to register blood donors with name, blood group, phone, and city.

🔍 Search Blood – Users can search for available donors by blood group and location.

🚨 Emergency Request – Enables sending urgent blood requests during critical situations.

🔐 Login Authentication – Only authorized users can access the dashboard.

📁 File-based Storage – Stores donor and blood stock data using a JSON file (without database).
---

## Implementation
The system includes routes for login, donor registration, blood search, stock update, and emergency requests, all managed through the Express server.

### For Software:

#### Installation
```bash
vs code
git
node.js

#### Run
```bash
[Run commands - e.g., npm start, python app.py]
```



## Project Documentation

### For Software:

#### Screenshots 
<img width="1865" height="893" alt="scr1" src="https://github.com/user-attachments/assets/66f8268e-bf13-4a31-9896-c198774e21e7" />(The homepage features a clean and user-friendly interface with a bold red header symbolizing blood donation awareness. It includes:

🔴 A branded header with the title “LIFELINE HUB”

❤️ A tagline: “Donate Blood, Save Lives”

🧭 A navigation bar with options:

Home

Donor Register

Search Blood

Emergency

The donor registration section allows users to enter:

Full Name

Blood Group

Phone Number

City)

<img width="1868" height="580" alt="scr2" src="https://github.com/user-attachments/assets/070fb8af-c65a-4056-969d-1460c2a216c6" />(This section allows users to search for available blood donors. Users can select a blood group and enter a city to find matching donors. After entering the details, they click the Search button to view results.

It helps patients quickly find blood donors in their location.)

<img width="1872" height="552" alt="scr3" src="https://github.com/user-attachments/assets/e613fefb-8550-40c2-83b3-a8e2e78bc76d" />(This section allows users to send an urgent blood request. The user enters the patient name, required blood group, hospital name, and contact number. After filling in the details, they click Send Emergency Request.

This feature helps quickly request blood during critical situations.)











##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*


---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:**  GitHub Copilot,git,vs code,ChatGPT

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"


*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- Abina mathew: frontend development
- 
- [sreethu s]:UI/UX design, Testing, Documentation, etc.]

---

## License



**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
