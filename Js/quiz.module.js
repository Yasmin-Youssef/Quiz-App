
import { baseUrl} from "./index.js";
export default  class Quiz{
    constructor(category,difficult,numberOfQuestion){
        this.category=category;         
        this.difficult=difficult;
        this.numberOfQuestion=numberOfQuestion;
        this.score=0;
    }
   async getQuiz(){
    
 let url = `${baseUrl}?amount=${this.numberOfQuestion}`;
    if(this.category !== "any") url += `&category=${this.category}`;
    if(this.difficult !== "any") url += `&difficulty=${this.difficult}`;
    return await (await fetch(url)).json()}
 
}