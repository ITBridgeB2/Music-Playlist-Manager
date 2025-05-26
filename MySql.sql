create database MUSICDB;

USE MUSICDB;

CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(100) NOT NULL,
  genre VARCHAR(100) NOT NULL,
  duration INT NOT NULL,
  position INT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO songs (title, artist, genre, duration, position) VALUES
('Shimmering Lights', 'Nova Ray', 'Pop', 210, 1),
('Echoes of You', 'The Harmonics', 'Rock', 185, 2),
('Late Night Swing', 'Blue Vibe', 'Jazz', 240, 3),
('Moonlight Sonata', 'L. van Beethoven', 'Classical', 420, 4),
('Digital Dreams', 'Synthwave City', 'Other', 200, 5),
('Falling Stars', 'Skyline', 'Pop', 195, 6),
('Electric Pulse', 'Neon Drive', 'Rock', 220, 7),
('Smooth Cafe', 'Jazz Junction', 'Jazz', 250, 8),
('Canon in D', 'Pachelbel', 'Classical', 300, 9),
('Ambient Trails', 'Echo Drift', 'Other', 230, 10),
('Summer Vibes', 'Luna Beats', 'Pop', 205, 11),
('Thunder Road', 'Iron Grove', 'Rock', 210, 12),
('Velvet Night', 'Sax Avenue', 'Jazz', 260, 13),
('Nocturne Op.9', 'F. Chopin', 'Classical', 360, 14),
('Oceanic', 'Waveform', 'Other', 190, 15),
('Golden Hour', 'Daylight Duo', 'Pop', 180, 16),
('Burning Flame', 'Riffstone', 'Rock', 240, 17),
('Midnight Lounge', 'Cool Keys', 'Jazz', 270, 18),
('Air on the G String', 'J.S. Bach', 'Classical', 340, 19),
('Desert Mirage', 'Sound Voyager', 'Other', 225, 20);
