let tareas = [];
let contadorId = 1;
export function obtenerTareas (req, res) {
    res.json(tareas);
    
}
export function crearTarea (req, res) {
    const {titulo,descripcion,completada} = req.body;


    if(!titulo || !titulo.trim === ''){
        return res.status(400).json({error:'El titulo es obligatorio'});
    }
    let existe = tareas.find(t => t.titulo === titulo.trim());
    if(existe){
        return res.status(400).json({error:'La tarea ya existe'});
    }
    const nuevaTarea = {
        id:contadorId++,
        titulo:titulo.trim(),
        descripcion,
        completada
    }
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
}
export function actualizarTarea (req, res) {
    const id = parseInt(req.params.id);
    const {titulo,descripcion,completada} = req.body;
    const tarea = tareas.find(t => t.id === id);
    if(!tarea){
        return res.status(400).json({error:'Tarea no encontrada'});
    }
    
    if(!titulo || !titulo.trim === ''){
        return res.status(400).json({error:'El titulo es obligatorio'});
    }
if(typeof completada === 'boolean'){
    tarea.descripcion = descripcion;
}

tarea.titulo = titulo.trim();
tarea.completada = completada;
res.json(tarea);

    } 


export function deleteTarea (req, res) {
    const id= parseInt(req.params.id);
    const tarea = tareas.find(t => tarea.id === id);
    if(!tarea){
        return res.status(400).json({error:'Tarea no encontrada'});
    }
    tareas = tareas.filter(t => t.id !== id);
    res.sendStatus(204);
    
}
