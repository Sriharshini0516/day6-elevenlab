📌 Objective
A simple HTML contact form with client-side validation using JavaScript to check:

Non-empty name, email, and message.

Valid email format using regex.

User-friendly error and success messages.

📂 Project Structure
css
Copy
Edit
contact-form/
│── index.html        # Main HTML structure
│── css/
│   └── style.css     # Styling for form
│── js/
│   └── script.js     # Validation logic
🛠 Tools Used
HTML5 – Structure of the form

CSS3 – Styling and layout

JavaScript – Input validation & user feedback

Regex – Email format checking

🚀 How to Run
Download or Clone the project folder:

bash
Copy
Edit
git clone https://github.com/yourusername/contact-form.git
Open index.html in your browser.

Fill in the form and click Submit.

✅ Features
Checks if name, email, and message are not empty.

Validates email using:

regex
Copy
Edit
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
Displays error messages under respective fields.

Shows success message if all inputs are valid.

Stylish purple-grey-black gradient background.

📷 Screenshot
(Add screenshot here if needed)

🧪 Test Cases
Test Case	Input	Expected Output
Empty Fields	""	Shows "Field is required" message
Invalid Email	abc@com	Shows "Enter valid email"
Valid Data	Name, valid email, message	Shows "Form submitted successfully!"

📄 License
This project is open-source. You can modify and use it for learning or personal projects.
