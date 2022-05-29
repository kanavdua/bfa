
from flask import *
from Database import DB
import hashlib

app = Flask(__name__)
my_db = DB()

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/login")
def you_can_give_any_name():
    return render_template("login.html")


@app.route("/Books")
def courses():
    return render_template("books.html")


@app.route("/register-and-save", methods=["POST"])
def register_user_and_save_in_db():

    user = {
        "name": request.form['txtName'],
        "email": request.form['email'],
        "password": request.form['password']
    }

    # Hashing the Password
    user['password'] = hashlib.sha256(user['password'].encode()).hexdigest()

    print(user)

    my_db.insert_operation(collection="users", document=user)

    return render_template("success.html")

@app.route("/auth", methods=["POST"])
def authenticate_user():

    user = {
        "email": request.form['email'],
        "password": request.form['password']
    }

    # Hashing the Password
    user['password'] = hashlib.sha256(user['password'].encode()).hexdigest()

    query = {"email": user['email'], "password": user['password']}
    documents = my_db.validate_document_in_collection('users', query=query)

    if documents.count() == 1:
        return render_template("home.html", email=user["email"])
    else:
        return render_template("error.html", message="Invalid Credentials")

@app.route("/books")
def fetch_all_users():
    users = my_db.fetch_documents_in_collection(collection_name="Books")
    print("books:", users)
    print("type(users ):", type(users))
    return render_template("users.html", result=users)

@app.route("/books/addbooks")
def register_books_and_save_in_db():

    user = {
        "name": request.form['txtName'],
        "category": request.form['category'],
    }

    my_db.insert_operation(collection="users", document=user)

    return render_template("success.html")

@app.route("/delete/<email>")
def delete_user(email):
    query = {"email": email}
    result = my_db.delete_document(collection_name="Books", query=query)
    if result.deleted_count > 0:
        return render_template("success.html", message="{} Deleted Successfully".format(email))
    else:
        return render_template("error.html", message="{} Not Deleted Successfully".format(email))


def main():
    app.run()


if __name__ == '__main__':
    main()