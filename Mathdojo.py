class MathDojo:
	def __init__(self) -> None:
		self.result=0

	def add(self ,num ,*nums):
		self.result +=num
		if nums:
			for a in nums:
				self.result +=a
		return self
	def subtract(self,num ,*nums):
		self.result -=num
		if nums:
			for a in nums:
				self.result -=a
		return self
md = MathDojo()
x=md.add(2).add(2,5,1).subtract(3,2).result
print(x)
		