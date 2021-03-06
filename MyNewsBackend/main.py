from typing import List, Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from bs4 import BeautifulSoup
import re
from pydantic import BaseModel
import scraping

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://my-news-feed.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Keywords(BaseModel):
    keywords: List


@app.get("/hello")
def hello():
    return {"Hello": "World!"}


@app.get("/articles/yahoonews")
def get_yahoo_news():
    articles_dict = scraping.yahoo_news()
    return articles_dict


@app.get("/articles/yahoonewsranking")
def get_yahoo_ranking():
    articles_dict = scraping.yahoo_ranking()
    return articles_dict


@app.get("/articles/gizmodo")
def get_gizmodo():
    articles_dict = scraping.gizmodo()
    return articles_dict


@app.get("/articles/itmedia")
def get_itmedia():
    articles_dict = scraping.itmedia()
    return articles_dict


@app.post("/articles/keywords")
def search_keywords(keywords: Keywords):
    # yahoo
    load_url = "https://news.yahoo.co.jp/ranking/access/news"
    html = requests.get(load_url)
    soup = BeautifulSoup(html.content, "html.parser")

    count = 1
    article_number = 1

    articles_dict = {}

    topic = soup.find(class_="newsFeed_list")
    for element in topic.find_all("a"):
        if(count < 9):
            rank = element.text[0:1]
            title = element.text[1:]
        else:
            rank = element.text[0:2]
            title = element.text[2:]

        url = element.get("href")

        for keyword in keywords.keywords:
            if keyword in title:
                article_dict = {"rank": rank, "title": title, "url": url}
                articles_dict[article_number] = article_dict
                article_number += 1

        count += 1

    # gizmodo
    url = "https://www.gizmodo.jp/"
    res = requests.get(url)
    soup = BeautifulSoup(res.text, "html.parser")

    elems = soup.find_all(href=re.compile("https://www.gizmodo.jp/2022/05"))
    for elem in elems:
        title = elem.contents[0].text
        url = elem.attrs['href']

        for keyword in keywords.keywords:
            if keyword in title:
                article_dict = {"title": title, "url": url}
                articles_dict[article_number] = article_dict
                article_number += 1

        count += 1

    return articles_dict
