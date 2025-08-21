
const express = require('express');
const app = express();
const port = 3000;

app.get('/arcal-studios.ics', (req, res) => {
    res.redirect('https://outlook.office365.com/owa/calendar/4228bf4216614e1d86e5d8ba36ff8092@arcal-lyrique.fr/aa748fcb512d40f5a3c13dd7f8582d2b12139201866269152543/calendar.ics');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
