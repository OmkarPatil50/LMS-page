# LMS Video Player App

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Design Decisions](#design-decisions)
4. [Assumptions](#assumptions)
5. [Source Code](#source-code)

## Introduction

This is a simple React application designed as a Learning Management System (LMS) video player for students. The application is structured with a component-based architecture, utilizing separate components for different UI elements.

## Project Structure

The project structure is organized as follows:

- `src/`
  - `assets/`
    - External images for the LMS logo.
  - `components/`
    - `Sidebar/`
      - `Sidebar.jsx`
      - `Sidebar.css`
    - `Topbar/`
      - `Topbar.jsx`
      - `Topbar.css`
    - `VideoCard/`
      - `VideoCard.jsx`
      - `VideoCard.css`
  - `pages/`
    - `PlayerPage/`
      - `PlayerPage.jsx`
      - `PlayerPage.css`
  - `App.jsx`
  - `App.css`
  - `index.js`
  - `index.css`

## Design Decisions

1. **Component-Based Architecture:**
   - Encapsulation of major UI elements into separate React components for modularity and reusability.

2. **Styling:**
   - Use of CSS for styling with separate files for each component, maintaining separation of concerns.

3. **Font Awesome Icons:**
   - Integration of Font Awesome icons for consistent and visually appealing iconography.

4. **Flexbox for Layout:**
   - Extensive use of Flexbox for flexible and dynamic component arrangements.

5.  **Fixed Positioning:**
   - Fixed positioning for Sidebar and Topbar components to remain static during scrolling.

6. **Responsive Design:**
   - Layout adjusts to different screen sizes for a responsive user interface.

7. **External Image References:**
   - Use of external image references for user avatars and LMS logos, allowing dynamic changes without modifying code.

8. **Conditional Styling:**
   - Application of conditional styling for active navigation items and notification badges.

9. **YouTube Embedding:**
   - Integration of embedded YouTube video using an iframe in the VideoCard component.

10. **Functional Components:**
    - Implementation of all React components as functional components.

## Assumptions

The application is assumed to be a Learning Management System (LMS) video player for students.


## Source Code

https://github.com/OmkarPatil50/LMS-page
