# My YouTube Subscription Dashboard

This is a frontend React project designed to showcase the YouTube channels I subscribe to, along with my favorite playlists and videos. It serves as a personal dashboard to organize and view content I enjoy.

## Features

* **Subscription Showcase:** Displays a curated list of the channels I am currently subscribed to.
* **Favorites Collection:** dedicated sections to highlight my favorite playlists and top video picks.
* **Search & Filter:** Functionality to quickly find specific subscriptions or content within the dashboard.
* **Responsive UI:** A clean interface built with React and Tailwind CSS, featuring routing between Home, Video, and Playlist views.
* **Dark/Light Mode:** Full theming support to switch between appearance modes.

## Technologies Used

This project utilizes a modern frontend stack:

* **Core:** React, React Router.
* **Styling:** Tailwind CSS, `tw-animate-css`.
* **UI Components:** Radix UI, Lucide React (icons), Vaul (drawers), Sonner (toasts).
* **Utilities:** `cmdk` (command palette), `react-hook-form` (forms), `date-fns` (dates).

## Project Structure

* `src/components/`:
    * `Subs.jsx`: Displays the list of subscribed channels.
    * `PlaylistCom.jsx`: Renders the favorite playlists.
    * `List.jsx`: Renders the list of favorite videos.
    * `Search.jsx`: Handles user input for filtering content.
* `src/data/`: Contains the JSON data files for subscriptions, videos, and playlists.

## How to Run

1.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Start the Development Server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will open at `http://localhost:5173`.