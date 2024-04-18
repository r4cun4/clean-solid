(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    // const fs = [
    //     { id: 1, f: false },
    //     { id: 2, f: false },
    //     { id: 3, f: true },
    //     { id: 4, f: false },
    //     { id: 5, f: false },
    //     { id: 7, f: true },
    // ]; 

// Aplicando Clean Code
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];
    
    const arhivos = filesToEvaluate.map( file => file.flagged );

    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    // const ddmmyyyy = new Date();
    
    // Aplicando Clean Code
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    // const d: number = 23;

    // Aplicando Clean Code
    const timeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    // const dir = 33;

    // Aplicando Clean Code
    const filesInDirectory = 33;

    // primer nombre - first name
    // const nombre = 'Fernando';

    // Aplicando Clean Code
    const firstName = 'Fernando';

    // primer apellido - last name
    // const apellido = 'Herrera';

    // Aplicando Clean Code
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    // const dsm = 12;

    // Aplicando Clean Code
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    // const max = 6;

    // Aplicando Clean Code
    const maxClassesPerStudent = 6;


})();


