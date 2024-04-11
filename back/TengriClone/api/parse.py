from bs4 import BeautifulSoup
from selenium import webdriver
import time


def parse_item(content_list_item):
    item_meta = content_list_item.find('div', class_='content_main_item_meta')

    articleURL = 'https://tengrinews.kz' + content_list_item.find('a')['href']                   


    imgURL = content_list_item.find('a').find('picture').find('img', class_='content_main_item_img')['src']
    if imgURL[:5] != 'https':
        imgURL = 'https://tengrinews.kz' + imgURL

    title = content_list_item.find('span', class_='content_main_item_title').text
    announce = content_list_item.find('span', class_='content_main_item_announce')
    
    # It occurs that for some rubrics announce (description) may be None (They do not have announce)
    # So we need to check if announce is None and if it is then we need to set it to title
    if announce is None:
        announce = title
    else :
        announce = announce.text

    pub_date = item_meta.find('span').text

    result = {
        'articleURL': articleURL,
        'imgURL': imgURL,
        'title': title,   
        'announce': announce,
        'pub_date': pub_date[2:].strip(),
    }

    return result


def parse_pages_count(category, page):
    url = f"https://tengrinews.kz/{category}/page/{page}"
    print('\n\n')
    print(f'Parsing URL "{url}"  ...')

    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument("disable-gpu")

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
    
    time.sleep(2)
    soup = BeautifulSoup(browser.page_source, 'html.parser')
    browser.close()

    pagination = soup.find('ul', class_='pagination')
    list_items = pagination.find_all('li', class_='page-item')[1:-1]
    result = [str(li) for li in list_items]
    result = ''.join(result)
    return(result)



def parse_rubric(category):
    url = f"https://tengrinews.kz/{category}"
    print('\n\n')
    print(f'Parsing URL "{url}"  ...')

    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument("disable-gpu")

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

    
    time.sleep(5)
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