import json

book= {}
book['tom'] = {
    "name": "tom",
    "address": "1 green street NY",
    "phone": 805466778

}

book['bob'] = {

        "name": "bob",
        "address": "1 red street NY",
        "phone": 983535421

}

s = json.dumps(book)
print(s)
with open("book.json", 'w') as f:
    f.write(s)



