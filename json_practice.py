import json

f = open("book.txt",'r')

s = f.read()
print(s)

book = json.loads(s)
print(book)

print(type(book))
print(type(s))

print(book['bob']['phone'])
print(book['tom']['address'])

print('New line \n')
for person in book:
    print(book[person])

