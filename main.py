from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Configuring Flask to connect to MongoDB
app.config["MONGO_URI"] = "mongodb+srv://akankshajadhav0026:flt1thHwaBlfDEmId@cluster1.6kxfa.mongodb.net/Pearls?retryWrites=true&w=majority"  # Update with your MongoDB URI
mongo = PyMongo(app)

@app.route('/register', methods=['POST'])
def register():
    # Parse JSON data from request
    data = request.get_json()
    
    # Extract user data from JSON
    name = data.get('name')
    email = data.get('email')
    mobile = data.get('mobile')
    password = data.get('password')
    confirm_password = data.get('confirm-password')
    
    # Basic validation: check if the passwords match
    if password != confirm_password:
        return jsonify({'message': 'Passwords do not match'}), 400
    
    # Check if user already exists by email or mobile
    existing_user = mongo.db.users.find_one({'email': email})
    if existing_user:
        return jsonify({'message': 'User already exists with this email'}), 400

    # Hash the password before storing it
    hashed_password = generate_password_hash(password)
    
    # Insert user data into MongoDB
    mongo.db.users.insert_one({
        'name': name,
        'email': email,
        'mobile': mobile,
        'password': hashed_password
    })
    
    return jsonify({'message': 'User registered successfully'}), 201


if __name__ == '__main__':
    app.run(debug=True)
