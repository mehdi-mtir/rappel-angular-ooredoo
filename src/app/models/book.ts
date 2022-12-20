export class Book {
    /*id : number;
    title : string;
    author : string;
    price : number;*/

    constructor(private _id : number, 
        private _title : string, 
        private _author : string, 
        private _price : number){
        //this.id = id;
    }

    
    public get id() : number {
        return this._id;
    }

    public get title() : string {
        return this._title;
    }

    public get author() : string {
        return this._author;
    }

    public get price() : number {
        return this._price;
    }


    
}
