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