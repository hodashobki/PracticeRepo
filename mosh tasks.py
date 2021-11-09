
# 1-giving commands in a game: .....
command=""
is_started=False
while True:
    command=input("input your command ").lower()
    if command == "start":
        if is_started:
            print ("car is already started")    
          
        else:
            is_started =True
            print("car is running")   
    if command == "stop":
        if not is_started:
            print("car is lready Stoped")
           
            
        else:
            is_started = False
            print("car is stopped..")
           
    if command == "quit":
        print("you quit the game")
        break
    if command == "help":
        print("""
        type start to start the car
        type stop to stop the car
        type quit to quit 
        type help for help
        """)

        # 2- using nested loop to draw F : ...
        numbers=[5,2,5,2,2]
for x_count in numbers:
    output=""
    for number in range(x_count):
        output +="x"
    print(output)
     
    #  print items that is not duplicated
    items=[1,2,3,4,5,6,4,5]
uniqes=[]
for item in items:
    if item not in uniqes:
        uniqes.append(item)
print(uniqes)

# converting numbers to words
#we use get insted of [char] because it will through an error if the "char" didn't exist 
# and with get we can put a defult value if the "char"was not found
phon_number=input("Enter your Phon Number: ")
number_mapping={
    "0":"zero",
    "1":"one",
    "2":"two",
    "3":"three",
    "4":"four",
    "5":"five",
    "6":"six",
    "7":"seven",
    "8":"eight",
    "9":"nine"
}
output=""
for char in phon_number:
    output += number_mapping.get(char,"!")+ " " 
print(output)


# adding emojes to messages............
message=input("> ")
words=message.split(" ")
emojies={
     ":)":"😊",
     ":(":"😒"
 }
output=""
for word in words:
    output += emojies.get(word,word)+ " "
print(output)    


# Errors handling with "Try Except"......................................
try:
    age = int(input("enter your Age :"))
    print(age)
except ValueError:
    print("Invalide Value")
