class Unique{
    constructor(){
        this.uniqueIds = [];
    }

    set = (key) => {
        this.uniqueIds.push(key);
    }

    check = (key) => {
        let flag = false;

        let i = 0;
        for(i; i < this.uniqueIds.length; i++) {
            if(this.uniqueIds[i] === key) {
                flag = true;
                break;
            }
        }

        return flag;
    }

    generate = () => {
        let key = "";
        key = Math.random()*10000;

        if (this.check(key)){
            key = this.generate();
        } else {
            this.set(key);
        }
        return key;
    }
        
    
}

export default Unique;