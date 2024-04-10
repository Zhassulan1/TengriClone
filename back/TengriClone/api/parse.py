from bs4 import BeautifulSoup
from selenium import webdriver
import time


def parse_item(content_list_item):
    item_meta = content_list_item.find('div', class_='content_main_item_meta')

    articleURL = 'https://tengrinews.kz' + content_list_item.find('a')['href']

    TengriID = 123456
    try: 
        TengriID = articleURL[-7:-1]
    except:
        TengriID = articleURL[-5:-1]
                    


    imgURL = 'https://tengrinews.kz' + content_list_item.find('a').find('picture').find('img', class_='content_main_item_img')['src']
    title = content_list_item.find('span', class_='content_main_item_title').text
    announce = content_list_item.find('span', class_='content_main_item_announce')
    
    # It occurs that for some rubrics announce (description) may be None (They do not have announce)
    # So we need to check if announce is None and if it is then we need to set it to title
    if announce is None:
        announce = title
    else :
        announce = announce.text

    pub_date = item_meta.find('span').text
    viewings = item_meta.find('span', class_='content_item_meta_viewings').text
    comments = item_meta.find('span', class_='content_item_meta_comments').text

    result = {
        'articleURL': articleURL,
        'TengriID': TengriID,
        'imgURL': imgURL,
        'title': title,   
        'announce': announce,
        'pub_date': pub_date[2:].strip(),
        'viewings': viewings,
        'comments': comments
    }

    return result



def parse_rubric(category, delay=20):
    url = f"https://tengrinews.kz/{category}/"
    print('\n\n')
    print(f'Parsing URL "{url}"  ...')

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

    
    time.sleep(delay)
    soup = BeautifulSoup(browser.page_source, 'html.parser')
    browser.close()

    rubric = soup.find('div', class_='content rubric')

    # For some categories (rubrics) main part in div class="content articles"
    # For others (rubrics) main part in div class="content rubric"
    # So we need to check if rubric is None and if it is then we need to set it to articles
    if rubric is None:
        rubric = soup.find('div', class_='content articles')
        if rubric is None:
            rubric = soup.find('div', class_='content')

    contents_list = rubric.find('div', class_='content_main')
    content_list_items = contents_list.find_all('div', class_='content_main_item')

    page = []

    for item in content_list_items:
        item_data = parse_item(item)
        item_data['category'] = category
        print(item_data)
        page.append(item_data)

    return page

if __name__ == '__main__':
    parse_rubric('News')