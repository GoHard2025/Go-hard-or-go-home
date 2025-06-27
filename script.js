
document.addEventListener("DOMContentLoaded", () => {
  const videoInput = document.getElementById("videoInput");
  const videoList = document.getElementById("videoList");
  const videoElement = document.getElementById("videoElement");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoTitle = document.getElementById("videoTitle");

  videoInput.addEventListener("change", () => {
    const file = videoInput.files[0];
    if (file) {
      const button = document.createElement("button");
      const date = new Date().toLocaleDateString("no-NO");
      button.textContent = `${file.name} (${date})`;
      button.addEventListener("click", () => {
        const url = URL.createObjectURL(file);
        videoElement.src = url;
        videoTitle.textContent = file.name;
        videoPlayer.style.display = "block";
      });
      videoList.appendChild(button);
    }
  });
});
