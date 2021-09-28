# Create a function that, given a string ,returns it ,without blanks.

# 1-without built in function ,saved in another array
def withoutBlank(str):
    newstr=""
    for i in str:
        if i !=" ":
            newstr+=i
    return newstr
result=withoutBlank("for the end ")
print(result)         

# using split function and having an array instead then usin empty string and then join function
def withoutBlank2(str):
   rr=str.split(" ")
   s=""
   s=s.join(rr) 
   return s

result2=withoutBlank2("what are you waiting for")
print(result2)   
 

# using built in function 
def withoutBlank3(str):
    result=str.replace(" ","")
    return result

print(withoutBlank3("To what limit do you dream"))    