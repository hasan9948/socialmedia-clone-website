// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('task');
    const fileInput = document.getElementById('fileInput');
    const taskList = document.getElementById('taskList');

    // Get the task description and file data
    const taskDescription = taskInput.value;
    const file = fileInput.files[0];

    // Create a new list item
    const listItem = document.createElement('li');

    // Display the task description
    const taskText = document.createElement('span');
    taskText.textContent = taskDescription;
    listItem.appendChild(taskText);

    // Check if a file was selected
    if (file) {
        if (file.type.startsWith('image/')) {
            // If it's an image, display it
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '100%';
            listItem.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            // If it's a video, display it
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.style.maxWidth = '100%';
            listItem.appendChild(video);
        } else {
            // Display the file name for non-image and non-video files
            const fileDisplay = document.createElement('div');
            fileDisplay.textContent = `File: ${file.name}`;
            listItem.appendChild(fileDisplay);
        }
    }

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear input fields
    taskInput.value = '';
    fileInput.value = '';
}

// Add a click event listener to the "Add" button
document.getElementById('addTask').addEventListener('click', addTask);
