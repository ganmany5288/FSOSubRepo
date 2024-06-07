// const config = require('./utils/config')
const express = require('express')
require('express-async-errors')

const morgan = require('morgan')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')