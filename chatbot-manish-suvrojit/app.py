# using flask to make an api
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
# from chat.py import myChatBot
# from '/pytorch-chatbot/chatbot-pranjal/chat.py' import myChatBot
# from ..C import myChatBot
# from chatbot-pranjal import chat.py
# import chat from chatbot-pranjal
# from chatbot-pranjal import chat.py
# import chatbot-pranjal
import sys
sys.path.insert(0, 'pytorch-chatbot/chatbot-pranjal')

# import chat.py
from chat import myChatBot

# Create the flask app
app = Flask(__name__)

# to handle CORS error
CORS(app, supports_credentials=True)

@app.route('/', methods = ['POST'])
@cross_origin(supports_credentials=True)
def chatbot():
    if(request.method == "POST"):
        userChatText = request.json['userChatText']

        print(userChatText)

        botChatText, flag = myChatBot(userChatText)

        print(botChatText)

        return jsonify(botChatText, flag), 201
    

# driver function
if __name__ == '__main__':
    app.run(debug = True)