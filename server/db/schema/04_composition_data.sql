DROP TABLE IF EXISTS composition_data CASCADE;

CREATE TABLE composition_data (
  id SERIAL PRIMARY KEY NOT NULL,
  composition_id INTEGER REFERENCES compositions(id),
  sound_setting_id INTEGER REFERENCES sound_settings(id)
);