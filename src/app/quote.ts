export class Quote {
    
    public quote:string;
    public author:string;
    public upvote:number;
    public downvote: number;
    public date:Date;
    constructor(id,quote, author, upvote, downvote,date){
        this.quote = quote
        this.author = author
        this.upvote = upvote
        this.downvote = downvote
        this.date = date
        
    }
}
