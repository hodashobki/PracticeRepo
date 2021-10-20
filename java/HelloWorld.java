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


    // indexof
    String somString="My name is Mohammad Adnan";
    int a=somString.indexOf("M");
    System.out.println(a);

    // Trim: The trim() method removes any trailing or leading white spaces from the string.
    String newString2="  We have the courage to change ourselves  ";
    System .out.println(newString2.trim());

// Uppercase and Lowercase: The String class provides methods to lowercase and uppercase strings.
String b="HELLO";
String c="world";
System.out.println(b.toLowerCase() + c.toUpperCase());

// Equality: We can compare the equality of a string in two ways. Do they refer to the exact same object,
//  or do they have the same exact sequence of characters.
String d="Ahmad";
String e="Ahmad";
        System.out.println(d == e);
        System.out.println(d.equals(e));
    }

}
 