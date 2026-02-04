## Architecture
Component-based structure was chosen to ensure reusability and clean separation of concerns.

## AI Usage
Used AI tools to generate starter components and optimize layout.
Prompt example:
"Create a responsive React portfolio component with accessibility best practices."

## Challenges
Faced layout issues on mobile screens which were fixed using CSS grid and responsive units.

# PROCESS DOCUMENT – Sprint 01
## Assignment 001: The Engineer’s Identity (Portfolio)

---

## 1. Architecture

I chose a component-based architecture using React.js to ensure modularity, readability, and scalability. Each major section of the portfolio (Hero, Tech Stack, Projects, Publications, Footer) is implemented as an independent React component.

Static data such as skills and project details are stored separately in a `data` folder. This separation keeps the UI components clean and allows easy updates to content without modifying component logic.

The project structure follows industry best practices for small-to-medium React applications and makes the codebase easy to maintain and extend.

---

## 2. AI Usage

AI tools were used responsibly to accelerate development and improve code quality. I used AI primarily for:
- Generating initial React component templates
- Improving UI styling and layout suggestions
- Debugging issues such as blank screens and component rendering problems

### Example Prompt Used:
“Create a responsive React component for a personal portfolio with clean UI, accessibility best practices, and mobile-friendly layout.”

All AI-generated code was reviewed, understood, and modified before being integrated into the project. No code was used blindly.

---

## 3. Challenges and Solutions

### Challenge:
During development, the application initially rendered a blank screen without any visible errors. This made debugging difficult as there were no console error messages.

### Solution:
I debugged the issue by isolating components one by one and testing them individually. This helped identify issues related to component imports, data mapping, and CSS visibility. After correcting the import paths, verifying exports, and adjusting styling, the issue was resolved successfully.

This process helped me better understand React’s rendering behavior and improved my debugging approach.

---

## 4. Deployment and Performance

The application was deployed using Vercel with a production build configuration. Lighthouse audits were performed on the live deployed URL in mobile mode.

The final deployed site achieved:
- Performance score above 90
- Accessibility score above 90

This ensured compliance with the assignment’s performance and accessibility requirements.

---

## 5. Learnings

Through this sprint, I gained hands-on experience in:
- Structuring a React application professionally
- Debugging real-world UI and rendering issues
- Improving UI/UX using CSS and layout techniques
- Understanding the difference between development and production performance
- Deploying and validating a live web application

This sprint helped me transition from academic-style development to industry-oriented thinking.
