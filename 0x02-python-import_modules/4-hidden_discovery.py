#!/usr/bin/python3
if __name__ == '__main__':
    import sys
    import hidden_4
    for word in dir(hidden_4):
        if not word.startswith("__"):
            print(word)
