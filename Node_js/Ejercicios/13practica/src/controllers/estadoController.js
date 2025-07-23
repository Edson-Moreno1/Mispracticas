import {Estado} from "../models/estado.js";

async function  obtenerEstados(req,res){
    try{
        const estados = await Estado.findAll({
            order: [['nombre', 'ASC']]
        });
        res.json(estados);

    }catch(error){
        res.status(500).json({error:'Error getting states'});
    }
}

async function obtenerEstado (req,res){
    try{
        const estado = await Estado.findByPk(req.params.id);
        if(!estado){
            return res.status(404).json({error:'State not found'});
        }
        res.json(estado);
        }catch(error){
        res.status(500).json({error:'Error getting state'});
        }
    }


async function crearEstado(req,res){
    try{
        const {nombre} = req.body;
        if(!nombre){
            return res.status(400).json({error:'The nombre param is required'});
        }
        const newState= await Estado.create({nombre});
        res.status(201).jsbon(newState);
    }catch(error){
        res.status(500).json({error:'Error creating state'});
    }
}

async function actualizarEstado(req,res){
    try{
        const {nombre}=req.body;
        if(!nombre){
            return res.status(400).json({error:'The nombre param is required'});
        }
        const [updateRowsCount]= await Estado.update(
            {nombre},
            {where:{id:req.params.id}}
        );
        if(updateRowsCount===0){
            return res.status(404).json({error:'State not found'});
        }
        const updateEstado = await Estado.findByPk(req.params.id);
        res.json(updateEstado);
    }catch (error){
        res.status(500).json({error:'Error updating state'});
    }
}