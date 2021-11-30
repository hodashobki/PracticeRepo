class Node:
    def __init__(self,val) -> None:
        self.val=val
        self.next=None
class LinkedList:
    def __init__(self) -> None:
        self.head =None

    def addNode(self,val):
        new_node =Node(val)
        if not self.head:
            self.head =new_node
        else:
            current = self.head
            new_node.next =current
            self.head =new_node
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
llist.printList()