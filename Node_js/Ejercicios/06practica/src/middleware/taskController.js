let tareas =[];
let nextId =1;

export function obtenerTareas (req,res) {
    res.json(tareas);
}

export function crearTarea (req,res){
    const {titulo,descripcion} = req.body || {};
    if(!titulo || titulo.trim() ===''){
        return res.status(400).json({error:'El titulo es obligatorio'});
    }
    const nuevaTarea = {
        id: nextId++,
        titulo: titulo.trim(),
        descripcion: descripcion || '',
        completada: false
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);

    }


    export function actualizarTarea (req,res){
        const id =parseInt(req.params.id);
        const {titulo,descripcion,completada} = req.body;
        const tarea = tareas.find(t =>t.id === id);

        if(!tarea){
            return res.status(404).json({error: 'Tarea no encontrada'});
        }

        if(titulo && titulo.trim() ===''){
            return res.status(400).json({error:'El titulo no puede estar vacio'});
        }
        if(titulo) tarea.titulo =titulo.trim();
        if(descripcion !== undefined) tarea.descripcion =descripcion;
        if(typeof completada === 'boolean') tarea.completada=completada;
        res.json(tarea);
    }
    

    export function deleteTarea (req,res){
        const id = parseInt(req.params.id);
        const index = tareas.findIndex(t => t.id ===id);

        if(index === -1){
            return res.status(404).json({error:'Tarea no encontrada'});
        }

        tareas.splice(index,1);
        res.sendStatus(204);
    }
    
