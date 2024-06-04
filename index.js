const PORT = process.env.PORT || 4000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const parseUrl = require('./framework/parseUrl');
const mongoose = require('mongoose');
const jsonParser = require('./framework/parseJson');

const app = new Application();

app.use(jsonParser)
app.use(parseUrl('http://localhost:4000'))
app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:123@cluster0.qudldnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    app.listen(PORT, () => console.log(`сервер стартовал на порту ${PORT}`));
  } catch (e) {
    console.log(e)
  }
}

start();