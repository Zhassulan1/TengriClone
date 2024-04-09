from bs4 import BeautifulSoup
from selenium import webdriver
import time


def parse_item(content_list_item):
    item_meta = content_list_item.find('div', class_='content_main_item_meta')

    articleURL = 'https://tengrinews.kz/' + content_list_item.find('a')['href']
    imgURL = 'https://tengrinews.kz/' + content_list_item.find('a').find('picture').find('img', class_='content_main_item_img')['src']
    title = content_list_item.find('span', class_='content_main_item_title').text
    announce = content_list_item.find('span', class_='content_main_item_announce').text
    pub_date = item_meta.find('span').text
    viewings = item_meta.find('span', class_='content_item_meta_viewings').text
    comments = item_meta.find('span', class_='content_item_meta_comments').text

    result = {
        'articleURL': articleURL,
        'imgURL': imgURL,
        'title': title[2:-1],
        'announce': announce,
        'pub_date': pub_date[2:].strip(),
        'viewings': viewings[2:-1],
        'comments': comments[2:-1]
    }

    return result



def parse_rubric(category):
    url = f"https://tengrinews.kz/{category}/"

    options = webdriver.ChromeOptions()

    # Set preferences to block images and JavaScript
    prefs = {
        "profile.managed_default_content_settings.images": 2,
    }
    options.add_experimental_option("prefs", prefs)

    browser = webdriver.Chrome(options=options)

    browser.execute_cdp_cmd("Network.setBlockedURLs", {"urls": [
        "https://www.googletagmanager.com/gtag/js", 
        "https://analytics.google.com/", 
        "https://mc.yandex.ru/",
        "https://counter.yadro.ru/",
        "https://www.google.kz/ads/", 
        "*.mp3", 
        "*.mp4"
        ]})
    browser.execute_cdp_cmd("Network.enable", {})

    browser.get(url)

    DELAY = 20
    time.sleep(DELAY)
    soup = BeautifulSoup(browser.page_source, 'html.parser')
    browser.close()

    rubric = soup.find('div', class_='content rubric')
    contents_list = rubric.find('div', class_='content_main')
    content_list_items = contents_list.find_all('div', class_='content_main_item')

    page = []

    for item in content_list_items:
        item_data = parse_item(item)
        print(item_data)
        page.append(item_data)

    return page

if __name__ == '__main__':
    parse_rubric('News')