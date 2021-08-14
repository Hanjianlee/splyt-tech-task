import express from 'express';
import {port,client,splitApi} from './utils/env';
import cors from 'cors';
import axios,{AxiosRequestConfig, AxiosResponse} from 'axios';
const app = express()
app.use(express.json())

/** Enable Cross Origin **/
const allowedOrigins = [`http://localhost:${client}`];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options))

/** Server Front End React SPA Production Version **/
app.use(express.static(__dirname+"/build"))
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/build/index.html')
})
app.get('/api/drivers/getDrivers', async (req, res) => {
  try {
  const {count,longitude,latitude} = req.query
  if (!count) return res.status(400).json({message: "Please provide Count - Number of Drivers"})
  if (!longitude) return res.status(400).json({message: "Please provide Longitude"})
  if (!latitude) return res.status(400).json({message: "Please provide Latitude"})
  await axios.get(`${splitApi}`,{params:{count,latitude,longitude}} as AxiosRequestConfig).then( (result:AxiosResponse) => {
    try{
      res.status(200).json(result.data)
    }catch (err){
      res.status(400).json({message:err})
    }
  })
} catch(err){
  console.log(err)
}
})
app.listen(port, () => {
  console.log(`Backend Server running on http://localhost:${port} !`)
})