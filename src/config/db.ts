
import { Db, MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const dbPass = process.env.DB_PASS;
const dbUser = process.env.DB_USER;

const uri = `mongodb+srv://${dbUser}:${dbPass}@deckbuildercluster.y8sas.mongodb.net/?retryWrites=true&w=majority&appName=DeckBuilderCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const dbClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const dbClientPing = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export let db: Db | null = null;

export async function dbRun() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await dbClientPing.connect();
        // Send a ping to confirm a successful connection
        await dbClientPing.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        await dbClient.connect();
        db = dbClient.db("MTGDeckBuilderDb");
    }
    finally {
    //Ensures that the client will close when you finish/error
       await dbClientPing.close();
    }
}

await dbRun().catch(console.dir);