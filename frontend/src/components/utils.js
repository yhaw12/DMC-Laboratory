function downloadCSV(data) {
    const csvData = data.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'data.csv';
    link.href = url;
    link.click();
}

export { downloadCSV };


// const sqlCreateTable = `CREATE TABLE IF NOT EXISTS users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100),
//     email VARCHAR(100)
//   )`;

//   connection.query(sqlCreateTable, (error, results) => {
//     if (error) throw error;
//     console.log('Users table created');
//   });
//   ```

// connection.query('USE your_database_name', (error, results) => {
//     if (error) throw error;
//   });
//   ```

