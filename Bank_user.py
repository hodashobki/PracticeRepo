class User:
	def __init__(self,name,account_balance=0) -> None:
		self.name = name
		self.account_balance=account_balance

	def withdrawl(self,amount):
		self.account_balance -=amount

	def deposit(self,amount):
		self.account_balance +=amount
	
	def display(self):
		# print("User: "+self.name +" has Balance : "+str(self.account_balance))
		print(f"User {self.name} has Balance :{self.account_balance}")
		
	def transfer_money(self,other_user,amount):
		self.withdrawl(amount)
		other_user.deposit(amount)

hoda=User("Hoda",1200)
hoda.deposit(5000)
hoda.withdrawl(440)

ahmad=User("Ahmad",2500)
hoda.transfer_money(ahmad,440)
hoda.display()
