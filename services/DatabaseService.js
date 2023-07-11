import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('weather.db');

export function initDB() {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);'
    );
  });
}

export function addCity(name) {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO cities (name) values (?);', [name]);
  });
}

export function removeCity(id) {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM cities WHERE id = ?;', [id]);
  });
}

export function getCities(setter) {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM cities;', [], (_, { rows: { _array } }) => {
      setter(_array);
    });
  });
}
