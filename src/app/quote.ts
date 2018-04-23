export class Quote {
    public upvote:number;
    public downvote: number;
    public myDate:Date;
    constructor(public quote:string, public publisher:string, public author:string){
        this.upvote=0
        this.downvote=0
        this.myDate=new Date()
    }
}
