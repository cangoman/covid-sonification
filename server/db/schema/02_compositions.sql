DROP TABLE IF EXISTS compositions CASCADE;

CREATE TABLE compositions (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  state json NOT NULL,
  created_on TIMESTAMP NOT NULL,
  user_id INTEGER REFERENCES users(id)
);