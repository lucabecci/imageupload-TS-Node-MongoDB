import { connect } from "mongoose";

const userDB = process.env.DB_USER;
const nameDB = process.env.DB_NAME;
const passDB = process.env.DB_PASSWORD;
const clusterDB = process.env.DB_CLUSTER;
export async function startConnection() {
  try {
    await connect(
      `mongodb+srv://${userDB}:${passDB}@${clusterDB}/${nameDB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: <boolean>true,
        useUnifiedTopology: <boolean>true,
        useFindAndModify: false,
      }
    );
    return console.log("db is connected");
  } catch (e) {
    return console.log(e);
  }
}
