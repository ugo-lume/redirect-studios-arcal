const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/arcal-studios.ics', async (req, res) => {
    try {
        const response = await axios.get(
            'https://outlook.office365.com/owa/calendar/4228bf4216614e1d86e5d8ba36ff8092@arcal-lyrique.fr/aa748fcb512d40f5a3c13dd7f8582d2b12139201866269152543/calendar.ics',
            { responseType: 'text' }
        );
        res.setHeader('Content-Type', 'text/calendar');
        res.send(response.data);
    } catch (error) {
        console.error('Erreur lors du téléchargement du fichier ICS :', error.message);
        res.status(500).send('Erreur lors de la récupération du calendrier.');
    }
});

app.listen(port, () => {
    console.log(`Serveur en ligne sur http://localhost:${port}`);
});
