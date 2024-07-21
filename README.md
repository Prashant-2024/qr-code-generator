# QR Code Generator

A simple web application that generates QR codes from URLs and provides options to download or share the QR codes.

## Features

- Generate QR codes from input URLs
- Download QR codes as PNG images
- Share QR codes via clipboard or social media (Coming Soon 😅)
- Responsive design suitable for different devices (Coming Soon 😅)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - A library for generating QR codes

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/qr-code-generator.git
    cd qr-code-generator
    ```

2. **Open in Browser:**

    Open `index.html` and `qr-code.html` in your web browser to see the application in action.

### Usage

1. **Generate QR Code:**

    - Enter a URL into the input field on `index.html`.
    - Click the "QR Code" button to generate a QR code.
    - You will be redirected to `qr-code.html` where the QR code will be displayed.

2. **Download QR Code:**

    - On `qr-code.html`, click the "Download" button to save the QR code as a PNG image.

3. **Share QR Code:**

    - Click the "Share" button to copy the QR code to your clipboard or open a share dialog for supported platforms.

## Code Structure

- `index.html` - The main page for inputting URLs and generating QR codes.
- `qr-code.html` - The page for displaying the generated QR code with download and share options.
- `style.css` - The stylesheet for styling the pages.
- `script.js` - JavaScript file for handling QR code generation, downloading, and sharing.

## Contributing

1. **Fork the Repository:**
    - Click the "Fork" button at the top right of the repository page.

2. **Create a New Branch:**
    ```bash
    git checkout -b feature/your-feature
    ```

3. **Make Changes and Commit:**
    ```bash
    git add .
    git commit -m "Add your commit message"
    ```

4. **Push to Your Fork:**
    ```bash
    git push origin feature/your-feature
    ```

5. **Create a Pull Request:**
    - Go to the "Pull Requests" tab of the original repository and create a new pull request from your forked repository.



## Acknowledgments

- Special thanks to the creators of QRCode.js and other libraries used in this project.

