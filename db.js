const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost")
            .then(conn => global.conn = conn.db("banco"))
            .catch(err => console.log(err))

function findAll() {
                return global.conn.collection("usuario").find().toArray();
            }

function insert(usuario) {
                return global.conn.collection("usuario").insertOne(usuario);
            }
             

const ObjectId = require("mongodb").ObjectId;
function findOne(id) {
                return global.conn.collection("usuario").findOne(new ObjectId(id));
            }

function update(id, usuario) {
                return global.conn.collection("usuario").updateOne({ _id: new ObjectId(id) }, { $set: usuario });
            }

function deleteOne(id) {
                return global.conn.collection("usuario").deleteOne({ _id: new ObjectId(id) });
            }

module.exports = { findAll, insert, findOne, update, deleteOne }