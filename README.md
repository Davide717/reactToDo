# reactToDo
Un todo List con react

Una aplicacion para crear tareas las cuales se van agregando en pantalla utilizando javascript con react. Permite la manipulacion de las mismas para indicar que esta completada y tambien la eliminacion de las tareas.
Cada tarea tiene consigo estas props: id(key) para identificar dicha tarea y se pasa por key para react,text propiamente de cada tarea a realizar y un boolean completed para identificar si dicha tarea fue marcada como completada (la cual hara que dicha tarea se tache mediante css cambiando su estilo).
Tambien posee una breve utilizacion de Effect , el cual es utilizado para guardar en todo momento en el localstorage las tareas, de esta manera las tareas agregadas no se pierden
a pesar de cerrar la ventana.
