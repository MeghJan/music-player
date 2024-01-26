React Music Player Interface with Music Upload Form This project is a comprehensive React application that replicates a music player interface as per the provided screenshot. Additionally, it includes a form for users to upload music files from their computer.

Overview The project consists of several components:

SongList: Displays the list of songs. SongRow: Renders individual song details within SongList. PlayAllButton: Initiates playing all songs (simulated). AddAllButton: Adds all songs to a queue (simulated). MusicUploadForm: A component below the song list for users to upload music files. State Management The state is managed within each component using React's local state. The SongList component manages the list of songs, while MusicUploadForm handles the file selected for upload.

Installation and Running Locally To run the application locally, follow these steps:

Clone the repository: git clone https://github.com/MeghJan/music-player.git

Navigate to the project directory: cd react-music-player

Install dependencies: npm install

Start the development server: npm start

Open your browser and visit http://localhost:3000 to view the application.

Additional Features and Assumptions The MusicUploadForm component is structured to integrate with a backend API easily. Accessibility features, such as proper labels and ARIA attributes, are implemented to ensure accessibility. The UI is responsive and maintains layout across different screen sizes. Basic unit tests for components are included using Jest. Visual feedback is provided during the "upload" process with a progress indicator. Error handling is implemented in the form to simulate and display upload errors. Repository The source code for this project is available in the following public repository:

https://github.com/MeghJan/music-player.git

Feel free to clone or fork the repository and explore the code further.