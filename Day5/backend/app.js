const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');

const app = express();
let users = []

app.use(cors());
app.use(express.json());