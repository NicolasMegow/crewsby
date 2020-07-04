import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
{/* user, checkUser */}
const { user, logout, loginWithPopup } = useAuth0()

const AUTH_PROP_KEY = "https://faunad.com/id/secret";
var faunadb = require('faunadb'),
q = faunadb.query;

async function getUserClient(user) {
    return new faunadb.Client({ secret: user[AUTH_PROP_KEY]})
}

async function getLatestFromFauna(userObj) {
    const client = await getUserClient(userObj);

    try {
        let latestFromFauna = await client.query(
            q.Call("getLatestUserMindful")
        )
        
        if (latestFromFauna.err) return latestFromFauna.err

        return { date: latestFromFauna.latestTime / 1000, ...latestFromFauna.latestMindful.mindful }
    } catch(err) {
        latestFromFauna.error = err
        return latestFromFauna
    }
}

async function getSomeFromFauna(count) {
    const client = await getUserClient(user);

    let faunaRes = await client.query(
        q.Call("getSomeUserMindfuls", count)
    )   

    return faunaRes
}

async function getRandomMindfulFromFauna(userObj) {
    const client = await getUserClient(userObj);

    try {
        let mindfulThings = await client.query(
            q.Paginate(
                q.Documents(q.Collection('mindful_things'))
            )
        )
        let randomMindful = mindfulThings.data[Math.floor(Math.random()*mindfulThings.data.length)];
        let creation = await client.query(q.Call('addUserMindful', randomMindful));
        
        return creation.data.mindful;

    } catch (error) {
        console.log(error)
    }   
}

export {getLatestFromFauna, getRandomMindfulFromFauna, getSomeFromFauna}