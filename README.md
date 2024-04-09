# Tengri News Clone 
Проект был написан в рамках 2-этапа отбора в nFactorial Incubator

## Как настроить и запустить

```
git clone https://github.com/Zhassulan1/TengriClone.git
cd TengriClone/back/TengriClone

python -m pip install Django==5.0.4
pip install selenium
pip install beautifulsoup4
pip install djangorestframework

python manage.py runserver


cd ../../front/TengriClone
npm install
npm start

```


## Процесс проектирования и разработки 
В качестве бэк-енд фреймворка был выбран Django, а в качестве фронт-енд фреймворка был выбран Angular.

## Компромиссы, принятые во время разработки
1. Данные не сохранюятся в базу данных а парсятся с сайта который может требовать до 30 секунд для загрузки всех необходимых элементов. Поэтому сайт может долго загружаться

2. Пагинация была добровольно пропущена так как Я не успел его реализовать из-за загруженного графика 

3. Поиск тоже был пропущен

4. Не было реализовано тестирование кода

