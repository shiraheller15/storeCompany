// Script - Mananger

class Manager{
    name;
    id;
    static isCreated = 0;
    constructor(name, id){
        isCreated++;
        if(isCreated > 1){
            console.error('Can not create new object');
        }
        else{
            this.name = name;
            this.id = id;  
        }
    }
} 