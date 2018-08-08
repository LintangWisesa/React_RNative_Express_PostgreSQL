#

![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# React :heart: React Native :yellow_heart: Express :green_heart: PostgreSQL

[![Video](https://img.youtube.com/vi/AnbiigKkEPw/0.jpg)](https://www.youtube.com/watch?v=AnbiigKkEPw)

## __1. Setup PostgreSQL Database__

- Activate PostgreSQL server, then create a __*dojo*__ database with a __*ninja*__ table:

    ```bash
    $ create database dojo;

    $ \c dojo

    $ create table ninja(
        no integer,
        nama varchar(30), 
        usia integer
        );
    ```

- Insert some data, as initial data, into __*ninja*__ table:

    ```bash
    $ insert into ninja values
        (1, 'Andi', 22),
        (2, 'Budi', 23);
    
    $ select * from ninja;
    ```
- __Done!__ :thumbsup:

#

## __2. Setup Node.js Backend Project__

- Clone this repo, go to __*Express_Backend*__ folder then install all dependencies:

    ```bash
    $ git clone https://github.com/LintangWisesa/React_RNative_Express_PostgreSQL.git

    $ cd React_RNative_Express_PostgreSQL/Express_Backend

    $ npm i
    ```

- Open __*app.js*__ & edit these lines to configure your database:
    
    ```javascript
    const sequelize = new Sequelize('postgres://user:password@localhost:5432/dojo');
    ```

- Save it, then run your backend project. It will run at __*localhost:3210*__:

    ```bash
    $ node app
    ```

- __Done!__ :thumbsup:

#

## __3. Setup React Frontend Project__

- Go to __*React_Frontend*__ folder, install all dependencies then run this project:

    ```bash
    $ cd React_RNative_Express_PostgreSQL/React_Frontend

    $ npm i

    $ npm start
    ```

- It will run at __*localhost:3000*__ & open in browser automatically! __Done!__ :thumbsup:

#

## __4. Setup React Native Android Project__

- Activate your __*AVD (Android Virtual Device)*__. In this project, I'm using __*Genymotion*__. It's much lighter than Android Studio's AVD.

- Go to __*RNative_Mobile*__ folder, install all dependencies then run this project:

    ```bash
    $ cd React_RNative_Express_PostgreSQL/RNative_Mobile

    $ npm i

    $ react-native run-android
    ```

- __Done!__ :thumbsup:

#

__See also:__
- [React :heart: React Native :yellow_heart: Express :green_heart: MongoDB](https://github.com/LintangWisesa/React_RNative_Express_MongoDB)
- [React :heart: React Native :yellow_heart: Express :green_heart: MySQL](https://github.com/LintangWisesa/React_RNative_Express_MySQL)
- [React :heart: React Native :yellow_heart: Express :green_heart: PostgreSQL](https://github.com/LintangWisesa/React_RNative_Express_PostgreSQL)

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) |
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)