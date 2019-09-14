from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests
import re
from operator import add
import numpy as np
from scipy.optimize import curve_fit

app = Flask(__name__)

rankDict = {
    'Iron4' : 0,
    'Iron3' : 100,
    'Iron2' : 200,
    'Iron1' : 300,
    'Bronze4' : 400,
    'Bronze3' : 500,
    'Bronze2' : 600,
    'Bronze1' : 700,
    'Silver4' : 800,
    'Silver3' : 900,
    'Silver2' : 1000,
    'Silver1' : 1100,
    'Gold4' : 1200,
    'Gold3' : 1300,
    'Gold2' : 1400,
    'Gold1' : 1500,
    'Platinum4' : 1600,
    'Platinum3' : 1700,
    'Platinum2' : 1800,
    'Platinum1' : 1900,
    'Diamond4' : 2000,
    'Diamond3' : 2100,
    'Diamond2' : 2200,
    'Diamond1' : 2300,
    'Master1' : 2400,
    'Grandmaster1' : 2500,
    'Challenger1' : 2600
}

@app.route("/<string:user_id>")
def predict(user_id):
    Url = "https://lolchess.gg/profile/na/" + user_id #Choose your own url

    data = requests.get(Url).text
    #Converting It with Beautiful Soup
    soup = BeautifulSoup(data,features="html.parser")
    lps_container = soup.findAll("dl",{"class":"lp"}) # Initializing lp container
    ranks_container = soup.findAll("span", {"class":"name"}) #Init ranks container
    lps = [] #Init lp list
    ranks = [] #Init ranks list
    for lp in lps_container:
        lps.append(int(re.findall('\d+',str(lp.find_all('dd')))[0]))
        
    for span in ranks_container:
        ranks.append((rankDict[re.sub('\s+',"",span.text)]))
        
    LPS = list(map(add, lps,ranks))
    #The Regressor
    def func(x,a,b,c):
        return a * np.log(b * x) + c
    lens = len(LPS)
    print(lens)
    x = np.arange(1,lens+1)
    print(x)
    y = np.flip(np.array(LPS))
    print(y)
    popt,pcov=curve_fit(func,x,y)
    popt=popt.tolist()
    pcov=pcov.tolist()
    return jsonify({
        "LPs":LPS,
        "popt":popt,
        "pcov":pcov})

if __name__=="__main__":
    app.run()