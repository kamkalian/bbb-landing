import time
from flask import Flask, jsonify
import os
import hashlib
from xml.dom import minidom
import requests


app = Flask(__name__)

@app.route('/user_counts')
def user_counts():

    call_name="getMeetings"

    parser = _api_query_result(call_name, "")

    user_counts = []
    for meeting in parser.getElementsByTagName('meeting'):
        room_name = meeting.getElementsByTagName('meetingName')[0].firstChild.data
        count_user = meeting.getElementsByTagName('participantCount')[0].firstChild.data
        user_counts.append((room_name, count_user))

    return jsonify(user_counts)


def _api_query_result(call_name, query_string):
    #url = os.popen('bbb-conf --secret | fgrep URL:') + "api/"
    url = "https://bbb.kurm-server.de/bigbluebutton/api/"
    #secret = os.popen('bbb-conf --secret | fgrep Secret:')
    secret = "vrOzlhFnCPSuz4ZJlcBXzyE4jFW1J8NGODbAr4SYI"

    sha_1 = hashlib.sha1()
    #sha_1.update(call_name + query_string + secret.read())
    c = call_name + query_string + secret
    sha_1.update(c.encode('utf-8'))
    checksum = sha_1.hexdigest()

    if query_string == "":
        call_url = url + call_name + "?checksum=" + checksum
    else:
        call_url = url + call_name + "?" + query_string + "checksum=" + checksum

    x = requests.get(call_url)
    xml = x.text
    parser = minidom.parseString(xml)
    return parser

