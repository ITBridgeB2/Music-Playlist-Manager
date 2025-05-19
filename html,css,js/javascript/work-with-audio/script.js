let songs = JSON.parse(localStorage.getItem("playlist")) || [
    { title: "Knight Rider", file: "knightrider.mp3" },
    { title: "Succession", file: "succession.mp3" },
    { title: "The Sopranos", file: "the_sopranos_intro.mp3" }
  ];
  
  let currentIndex = 0;
  
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const volumeSlider = document.getElementById("volume");
  const playlist = document.getElementById("playlist");
  const titleInput = document.getElementById("songTitle");
  const urlInput = document.getElementById("songURL");
  
  function saveToLocal() {
    localStorage.setItem("playlist", JSON.stringify(songs));
  }
  
  function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    audio.src = song.file;
  }
  
  function togglePlay() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audio.play();
  }
  
  function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
  }
  
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
  
  function updatePlaylistUI() {
    playlist.innerHTML = "";
    songs.forEach((song, index) => {
      const li = document.createElement("li");
      
      // Song title click
      const songText = document.createElement("span");
      songText.textContent = song.title;
      songText.style.cursor = "pointer";
      songText.onclick = () => {
        currentIndex = index;
        loadSong(index);
        audio.play();
      };
  
      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "⛔";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.background = "transparent";
      deleteBtn.style.border = "none";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.style.color = "red";
      deleteBtn.title = "Remove song";
      deleteBtn.onclick = (e) => {
        e.stopPropagation(); // Prevent song from playing when deleting
        songs.splice(index, 1);
        saveToLocal();
        if (currentIndex >= songs.length) {
          currentIndex = 0;
        }
        loadSong(currentIndex);
        updatePlaylistUI();
      };
  
      li.appendChild(songText);
      li.appendChild(deleteBtn);
      playlist.appendChild(li);
    });
  }
  
  
  function addSong() {
    const newTitle = titleInput.value.trim();
    const newURL = urlInput.value.trim();
    if (newTitle && newURL) {
      songs.push({ title: newTitle, file: newURL });
      saveToLocal();
      updatePlaylistUI();
      titleInput.value = "";
      urlInput.value = "";
    }
  }
  
  // Initial load
  loadSong(currentIndex);
  updatePlaylistUI();
  