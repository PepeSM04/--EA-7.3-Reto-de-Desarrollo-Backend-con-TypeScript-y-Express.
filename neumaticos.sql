CREATE DATABASE IF NOT EXISTS neumaticosdb;
USE neumaticosdb;

CREATE TABLE neumaticos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modelo VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  disponible BOOLEAN NOT NULL
);

INSERT INTO neumaticos (modelo, precio, disponible) VALUES
('Michelin Pilot Sport 4', 129.99, TRUE),
('Pirelli Cinturato P7', 114.50, TRUE),
('Bridgestone Turanza T005', 98.75, FALSE),
('Goodyear Eagle F1 Asymmetric', 142.00, TRUE),
('Continental PremiumContact 6', 135.20, FALSE);