/*
    * Principio DRY ( DONT REPEAT YOURSELF )
    * No es más que evitar que tener duplicidad de código
    * Simplifica las pruebas
    * Ayuda a centralizar los procesos
    * Aplicar el pricipio DRY, usualmente lleva a refactorizar
*/

type Size = ''|'S'|'M'|'L'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        //* haciendo dinamicas las propiedades del constructor
        for( const key in this ) {
            // console.log(key);

            switch( typeof this[key] ) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${key} is zero`);
                break;
                default:
                    throw Error(`${ typeof this[key] } is not supported`);
            }
        }

        return true;
    }

    toString() {
        //! No DRY
        // if( this.name.length <= 0 ) throw Error('name is empty');
        // if( this.price <= 0 ) throw Error('price is zero');
        // if( this.size.length <= 0 ) throw Error('size is empty');
        // return `${ this.name } (${this.price}, ${this.size})`

        if(!this.isProductReady) return;

        return `${ this.name } (${this.price}), ${this.size}`
    }
}

(() => {

    const bluePants = new Product('Blue Large Pants', 10, 'M');
    console.log(bluePants.toString());

})();