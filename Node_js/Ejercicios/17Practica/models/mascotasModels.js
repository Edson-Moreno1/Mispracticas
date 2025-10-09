import dbCliente from "../config/dbCliente.js";
import {ObjectId} from "mongodb";

class mascotasModel{

    async create (mascota){

        const colMascotas = dbCliente.db.collection('mascotas');
        return await colMascotas.insertOne(mascota);

    }
    async update(id,mascota){
        const colMascotas = dbCliente.db.collection('mascotas');
        return await colMascotas.updateOne({_id: new ObjectId(id)},{$set:mascota});
        
    }
     async delete(id){
        const colMascotas = dbCliente.db.collection('mascotas');
        return await colMascotas.deleteOne({_id: new ObjectId(id)});
    }
    async getAll(){
          const colMascotas = dbCliente.db.collection('mascotas');
          return await colMascotas.find({}).toArray();
    }

    async getOne(id){
        const colMascotas = dbCliente.db.collection('mascotas');
        return await colMascotas.findOne({_id: new ObjectId(id)});
    }
}

export default new mascotasModel();