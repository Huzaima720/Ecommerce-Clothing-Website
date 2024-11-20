
# **Project Documentation**

## **Project Overview**
This project is a responsive React-based website created using Vite. The focus of the project is on design precision and responsiveness, adhering to the provided design and color scheme. 

## **Technologies Used**
The following tools, frameworks, and libraries were utilized to build this project:

### **Frontend Framework and Tools**
- **React** (v18.3.1): For building the UI components.
- **Vite** (v5.4.1): For fast development and optimized builds.
- **React Router DOM** (v6.28.0): For client-side routing.
- **React Icons** (v5.3.0): For scalable vector icons.
- **React Range** (v1.10.0): For range slider functionality.



### **Styling**
- **CSS Variables**: The project uses the following CSS variables for its color scheme:
  ```css
  --color-primary-dark: #6F6A42;
  --color-primary-light: #EFE8C2;
  --color-secondary-dark: #224F34;
  --color-accent: #00398F;
  --color-dark: #272727;
  ```
- **Fonts**:
  - Primary: 'Poppins'
  - Secondary: 'Libre Baskerville'

## **Setup Instructions**
Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies**:
   Ensure that Node.js is installed on your system. Then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   To start the development server:
   ```bash
   npm run dev
   ```

4. **Build the Project**:
   To create a production build:
   ```bash
   npm run build
   ```

5. **Preview the Build**:
   To preview the production build:
   ```bash
   npm run preview
   ```

## **File Structure**
The project is structured as follows:
```
src/
├── components/       # Reusable React components and its styles with module.css files 
├── pages/            # Page-level components and its styles with module.css files
├── assets/           # Images
├── data/products.jsx # Products Data
├── App.jsx           # Root component
├── main.jsx          # Application entry point
public/
└── index.html        # Main HTML file
```

## **Design Considerations**
- **Color Scheme**: The design adheres to the provided palette.
- **Typography**: Ensures consistent use of fonts across components.
- **Responsiveness**: Designed to work seamlessly across various screen sizes.

## **Dependencies**
### **Production Dependencies**
```json
{
  "@babel/runtime": "^7.26.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.3.0",
  "react-range": "^1.10.0",
  "react-router-dom": "^6.28.0",
}
```

### **Development Dependencies**
```json
{
  "@eslint/js": "^9.9.0",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "eslint": "^9.9.0",
  "eslint-plugin-react": "^7.35.0",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.9",
  "globals": "^15.9.0",
  "vite": "^5.4.1"
}
```

## **Key Features**
- Fully responsive design.
- Dynamic range sliders and interactivity.
- Smooth navigation with React Router.


