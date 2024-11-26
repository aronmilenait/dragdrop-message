# dragdrop-message
![DragDrop](https://github.com/user-attachments/assets/e738d2ff-b731-4890-b51e-858e088c7eae)

# About this project
Simple Drag & Drop website, with a modern iOS look. It allows the user to drag the food items from the right to the left panel, and after all of them are there, it displays a secret message, fetched from a URL.

## ⚙️ Technologies used:
- **Vite:** a build tool that aims to provide a faster and leaner development experience for modern web projects.
- **JavaScript:** a programming language for building interactive websites.
- **React:** a JavaScript library for building dynamic and interactive user interfaces.
- **Tailwind CSS:** a utility-first CSS framework for building modern, responsive, and consistent designs.
- **Framer Motion:** a popular React library for animations and gesture-based interactions.
- **Vercel:** a cloud platform for deploying, hosting, and scaling modern web applications.

🗒️ **Note:** I followed the SOLID Principles in this project, to make it maintainable, scalable, and easier for other developers to understand:

- Followed the **Single Responsibility Principle (SRP)** by dividing App into smaller components, like Header, Panel, and SecretMessage, so they are responsible for specific parts of the UI and/or logic.
- Followed the **Open/Closed Principle (OCP)** by using props in the components, which determine their behavior, or passing different content to components like Panel via children, without modifying the component itself: just specific functionalities, like DraggableItem or DroppedItem.
- Followed the **Liskov Substitution Principle (LSP)** since any component that follows the expected contract of props can replace or extend another.
- Followed the **Interface Segregation Principle (ISP)** by using props, since each component only receives the data and methods it needs.

## 🖱️ Installation
To run this project locally, follow these steps:

### 1. Clone the repository:
``
git clone https://github.com/aronmilenait/dragdrop-message
``
### 2. Navigate to the project directory, where all the website's files are located:
``
cd dragdrop-message
``

### 3. Install dependencies:
``
npm install
``
### 4. Run the development server:
``
npm run dev
``

:left_speech_bubble: **Note:** you can see the website live at https://dragdrop-message.vercel.app/

## ✏️ Usage
- **Drag Items:** Grab an item from the "Draggable Items" panel.
- **Drop Items:** Place the item into the "Drop here" panel.
- **Reveal Secret Message:** Drag all items to unlock a hidden message fetched from an API.
