CREATE database traveldb;

use traveldb;

CREATE TABLE destinations ( 
id INT AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(255) NOT NULL, 
country VARCHAR(100) NOT NULL, 
visit_date DATE NOT NULL, 
notes TEXT, 
rating varchar(50),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO destinations (name, country, visit_date, notes, rating)VALUES
       ('Paris', 'France', '2023-04-12', 'Visited the Eiffel Tower and Louvre Museum.', 5),
       ('Kyoto', 'Japan', '2022-11-05', 'Autumn leaves and temples were stunning.', 4),
       ('New York City', 'USA', '2021-06-18', 'Broadway show and Central Park walk.', 4),
       ('Rome', 'Italy', '2022-09-10', 'Explored Colosseum and Vatican City.', 5),
       ('Cape Town', 'South Africa', '2023-02-20', 'Table Mountain hike and wine tour.', 4),
       ('Istanbul', 'Turkey', '2021-03-15', 'Crossed continents and visited Hagia Sophia.', 4),
       ('Sydney', 'Australia', '2022-12-25', 'Christmas at Bondi Beach!', 5),
       ('Reykjavik', 'Iceland', '2023-01-10', 'Saw the northern lights!', 5),
       ('Bangkok', 'Thailand', '2023-08-02', 'Street food and floating markets.', 4),
       ('Barcelona', 'Spain', '2022-07-04', 'Gaudí architecture was breathtaking.', 4);
       