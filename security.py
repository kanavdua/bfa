"""
    Security Technique -> SHA
    hashing :)
    Strings can be Hashed to some different String
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    step -> 3
    HELLO -> LI....
    Explore these algos
    RSA | SHA
"""

import hashlib

"""
password = input("Enter Password: ")
print("password:", password)
print("password.encode():", password.encode())
hash_reference = hashlib.sha256(password.encode())
print("hash_reference:", hash_reference)
encrypted_password = hash_reference.hexdigest()
print("encrypted_password:", encrypted_password)
print("len(encrypted_password):", len(encrypted_password))
"""

while True:
    password = input("Enter Password: ")
    print("password:", password)
    print("password.encode():", password.encode())
    hash_reference = hashlib.sha256(password.encode())
    print("hash_reference:", hash_reference)
    encrypted_password = hash_reference.hexdigest()
    print("encrypted_password:", encrypted_password)
    print("len(encrypted_password):", len(encrypted_password))

    choice = input("type quit to break: ")
    if choice == "quit":
        break