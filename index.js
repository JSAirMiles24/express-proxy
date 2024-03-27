import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

const PORT = process.env.PORT || 8080;

const app = express();
const apiUrl = process.env.API_URL; 

const options = {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'x-origin-client': 'mike:hogeboom:postman',
    'Authorization' : `Bearer ${process.env.AUTHORIZATION_BEARER}`
  },
};

const unauthorizedOptions = {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'x-origin-client': 'mike:hogeboom:postman',
  },
};

app.use(cors());

app.get('/api/proxy', async (req, res) => {
    try {
      const response = await fetch(apiUrl, options); // Asegúrate de usar la variable correcta aquí
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error al hacer la llamada a la API:', error);
      res.status(500).send('Error al procesar la solicitud');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
