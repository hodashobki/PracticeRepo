import java.util.Date;
public class ImportDemo{
    public String currentDate(){
        Date date=new Date();
        return("The date of today "+date);
    }

    public void currentDate2(){
        Date date2=new Date();
        System.out.println("The date of today is "+date2);
    }
}