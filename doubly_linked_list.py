class Node:
    def __init__(self, data):
        self.data=data
        self.next=None
        self.prev=None

class DoublylinkedList:
    def __init__(self):
        self.head=None
    
    def appendd(self,data):
        if self.head is None:
            new_node=Node(data)
            new_node.prev=None
            self.head=new_node
        else:
            new_node=Node(data)
            cur=self.head
            while cur.next is not None:
                cur=cur.next
            cur.next=new_node
            new_node.prev=cur
            new_node.next=None
    

    def printinorder(self):
        if self.head is None:
            print("list is Empty")
        else:
            cur=self.head
            while cur:
                print(cur.data)
                cur=cur.next


    def print_in_reverse(self):
        if self.head is None:
            print("List is Empty")
        else:
            cur=self.head
            while cur :
                cur=cur.next
            while cur:
                print(cur.data)
                cur=cur.prev    



dllist=DoublylinkedList()
dllist.appendd(1)
dllist.appendd(2)
dllist.appendd(3)
dllist.appendd(4)
dllist.printinorder()
