import { app } from './config/custom_express';


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));