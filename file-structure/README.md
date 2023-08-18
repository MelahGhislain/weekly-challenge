# File Structure Visualizer

This little project is a file structure visualizer implemented using React TypeScript. It displays a hierarchical structure of files and folders, allowing users to expand and collapse the tree to explore the contents.

![Demo](/public/demo.png)

### Overview

The main functionality of the application is implemented in the File component. This component is a recursive component that renders the file structure recursively. It takes two props: files and depth. The files prop represents a file or folder object, and the depth prop determines the indentation level of the file or folder in the visual hierarchy.

The File component uses the useState hook to manage the state of whether a folder is open or closed. This state is stored in the isOpen variable and is toggled when the user clicks on a folder name. By clicking the button, the user can expand or collapse the folder and view or hide its contents.

The file structure is defined using an object named folder, which represents the root folder. It consists of nested objects, each representing a file or a folder. Each object has a name property to store the name of the file or folder and a children property to store its nested files and folders.

In the App component, the file structure defined in the folder object is rendered. The isOpen state is used to control the visibility of the folder's contents. The map function is used to iterate over the folder.children array and render each file or folder using the File component. The depth prop is set to 1 for the root level files and folders.