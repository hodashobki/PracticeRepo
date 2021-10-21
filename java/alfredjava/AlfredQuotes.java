import java.util.Date;
public class AlfredQuotes{

    public String returnGreeting(){
        return"Hello I'm Alfred";
    }

    public String guestGreeting(String name,String dayPeriod){
        return"Hello "+name +" it's "+dayPeriod+" would you like some tea";
    }
    public String currentdate(){
        Date date = new Date();
        return"The Date of this day is "+date;
    }

    // Final Challenge!
    // Alfred is listening. Write a method that accepts any string of conversation. 
    // If "Alexis" appears in the conversation return a snarky response, such as:
    // "Right away, sir. She certainly isn't sophisticated enough for that." 
    
    // If "Alfred" is in the conversation return an obliging response, for example: 
    // "At your service. As you wish, naturally." 
    
    // If neither name is found, return an appropriate response, for instance:
    // "Right. And with that I shall retire." 
    // **********************************************/
    /*
    * Inputs: String (A conversation)
    * Return Type: String (Something Alfred would say in response)
    * 
    * Tip: Use the indexOf String method
    */
    public String respondBeforeAlexis(String conversation) {
        if(conversation. contains("Alexis")){
            return"Right away, sir. She certainly isn't sophisticated enough for that.";
        }
        else if (conversation.contains("Alfred")){
            return"At your service. As you wish, naturally.";
        }
        else{
            return"Right. And with that I shall retire.";
        }
       
    }
}   

