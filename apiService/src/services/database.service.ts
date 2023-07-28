import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

export const collections: { cars?: mongoDB.Collection } = {};
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING,
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const carsCollection: mongoDB.Collection = db.collection(
    process.env.CAR_COLLECTION_NAME,
  );

  collections.cars = carsCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${carsCollection.collectionName}`,
  );
}
