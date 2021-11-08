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