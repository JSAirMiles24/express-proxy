import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors'

const PORT = 8080;

const app = express();
const apiUrl = 'https://cdn.airmilesapis.ca/offers?region=ON&limit=10'; 


const options = {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'x-origin-client': 'mike:hogeboom:postman',
    'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJVTkNRalk0UkRFM1JFUTBNVVF4T0RJMlF6VTFPREZHTURjeU9EYzVNVFpDUWpjek9URTBNZyJ9.eyJodHRwczovL21lbWJlcnMubG95YWx0eS5jb20vdmVyc2lvbiI6IjIiLCJodHRwczovL21lbWJlcnMubG95YWx0eS5jb20vbWVtYmVySWQiOiIzYzY2MTQ3OS0wZjMxLTQ5N2UtOTkyYS1iZjJlMzJkOWZjZTMiLCJodHRwczovL21lbWJlcnMubG95YWx0eS5jb20vY29sbGVjdG9yTnVtYmVyIjoiODkwMzc0MDEwMTQiLCJodHRwczovL21lbWJlcnMubG95YWx0eS5jb20vaW5mb3JtYXRpb25TdXBwcmVzc2lvbiI6ZmFsc2UsImh0dHBzOi8vbWVtYmVycy5sb3lhbHR5LmNvbS9pc0F1dGhlbnRpY2F0ZWQiOnRydWUsImh0dHBzOi8vbWVtYmVycy5sb3lhbHR5LmNvbS9jb25uZWN0aW9uIjoibWVtYmVyLWVtYWlsLWlkcC1yZWNhcHRjaGEiLCJpc3MiOiJodHRwczovL29hdXRoLmFpcm1pbGVzLmNhLyIsInN1YiI6ImF1dGgwfEVNQUlMLTg5MDM3NDAxMDE0IiwiYXVkIjoiaHR0cHM6Ly9tZW1iZXJzLmxveWFsdHkuY29tIiwiaWF0IjoxNzExNTQ3ODgxLCJleHAiOjE3MTE2MzQyODEsImF6cCI6InN3UU9Jc0M3aE9yWmt6dDJGZDhoY3k0OE9zSjdDRTBDIn0.t2zMtukkRtICWzfY2gftPyuTv_6_gm0a3TxSzk3g4WWf7qTaLQXayZB46l9H5fuaM4DzaUZLIS1-8-lR3fNoWot_RiLfXRcEZ0IpMYMAzLMmpowiiExXKlz36BQ2qIwlf4W9BA4GiO0vxuz4cc87Fi1mrjgLcxyEYwG9JDwTcmEZ0xOOLxGW3rAI-NcnM2vXSeWVzFrs1wgijKMwpRqdMi4GSqmuicTtUm7jdt4GcjtGkaJY4Fi6wLEC8Tp7Enkk-ViT7xUbpRy3ZbiF3X08Jih-XIFA59D64OwYfLgQC4sXFqY082i5dRaemuSr5gUkRH5a5GicSIsHTM4a7HvBAQ'
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
      const response = await fetch(apiUrl, unauthorizedOptions);
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

  