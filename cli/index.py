#! /usr/bin/env python3
passwords = []
while (True):
    word = input().lower()
    if word == "start":
        break
    passwords.append(word)


def filterPasswords(correct_chars_num=0,word=passwords[0],words=passwords[1:]):
    if(len(words) == 0 or  correct_chars_num == -1):
        return word
    result = list(filter(lambda w: sum(list(map(lambda i: 1 if word[i[0]] == i[1] else 0,enumerate(w)))) >= correct_chars_num,words))
    print("Choose: " + result[0])
    return filterPasswords(int(input("Likeness: ")),result[0],result[1:])

def sum(arr = []):
    if arr == []:
        return 0
    head,tail = arr[0],arr[1:]
    return head + sum(tail)

print(filterPasswords(int(input("Likeness: "))))
    
