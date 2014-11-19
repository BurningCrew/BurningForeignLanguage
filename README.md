BurningForeignLanguage
======================

AngularJS translation directive

## How can i use it?

Ok, I'll show you how.

1. Install BFL
  >`<script src="/js/burningForeignLanguage.js"></script>`

2. Insert `bfl-translate` directive into wherever html tag you want.
  >`<p bfl-translate>Hello!</p>`<br>
  >`<a href="http://www.google.com" bfl-translate>World!</a>`

3. Write some lang files. The lang file's full names must be exact same as `langs` array in your js file.
  >en_US
  >`["Hello!", "World!"]`

  >ko_KR
  >`["안녕!", "세상!"]`
  
4. Put those lang files into your web server's directory. For instance, I've choose `./bfl`
  >web_root<br>
  >ㅏbfl<br>
  >ㅣㅏen_US<br>
  >ㅣㄴko_KR

5. Now javascript time! At first, you must tell AngularJS that you want to use BFL.
  >`var app = angular.module('app', ['burningForeignLanguage']);`

6. And fill some configuration fields. Make sure your default lang is included in langs array.
  >`app.value('bflConfig', {`<br>
  >`  baseUrl : '/bfl/',`<br>
  >`  defaultLang : 'en_US',`<br>
  >`  langs : ['en_US', 'ko_KR']`<br>
  >`});`

7. Done! Now you can translate anything you want!

## Hmm?! Then how can i change client's language?

That's also easy as well. Let me show you.

1. You can access BFL via bflLanguage service. So tell AngularJS that you want it.
  >`app.cotroller('myController', function(bflLanguage) {});`

2. Wanna get all available language list that you've set? Try this.
  >`bflLanguage.langs; //['en_US', 'ko_KR']`

3. Wanna change client's language? Try this!
  >`var newLang = 'ko_KR';`<br>
  >`bflLanguage.setLang(newLang); //Now language is korean!`
