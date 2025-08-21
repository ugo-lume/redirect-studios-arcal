const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/arcal-studios.ics', async (req, res) => {
    try {
        const response = await axios.get(
            'https://nubes.serveur.online/remote.php/dav/calendars/Ugo/studios-arcal-1/?export',
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
