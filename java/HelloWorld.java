public class HelloWorld{
    public static void main(String[] args){
        // Concat using Concat
      String string1="Hoda";
      String string2="Mohammad";
      String string3=string1.concat(string2);
      System.out.println(string3);
    //   concating Srtings using + ,"The '+' sign is also overloaded to provide the same functionality of .concat"
    System.out.println(string1+string2);
    // Format: Another way of concatenating strings!
    String newString = String.format(" Hi %s this is your dept %.2f $","Laila", 111.22);
    System.out.println(newString);
    System.out.println(String.format("Hi %s this is your dept %.2f $","laila",111.0));
    }
}
 