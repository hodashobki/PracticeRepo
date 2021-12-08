class Node:
    def __init__(self,val) -> None:
        self.val=val
        self.next=None
class LinkedList:
    def __init__(self) -> None:
        self.head =None
# Add to front
    def addNode(self,val):
        new_node =Node(val)
        if not self.head:
            self.head =new_node
        else:
            current = self.head
            new_node.next =current
            self.head =new_node


    # Add to the end
    def addToTheEnd(self,val):
        if self.head is None:
            self.addNode(val)
        else:
            new_node=Node(val)
            runner =self.head
            while runner.next is not None:
                runner = runner.next
            runner.next=new_node


    def remove_from_front(self):
        if self.head != None:
            self.head = self.head.next


    def remove_from_end(self):
        if self.head ==None:
           return self
        elif self.head.next ==None:
            self.head =None
        else :
            current =self.head
            while current.next.next !=None:
                current =current.next
            current.next =None
      
        





    def printList(self):
        if self.head is None:
            print("List is empty")

        else:
            cur =self.head
            while cur:
                print(cur.val)
                cur=cur.next

llist=LinkedList()
llist.addNode(0)
llist.addNode(2)
llist.addNode(3)
llist.addNode(4)
llist.addToTheEnd(55)
llist.remove_from_front()
llist.remove_from_end()
llist.printList()