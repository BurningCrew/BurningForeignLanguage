var app = angular('app', ['burningForeignLanguage']);

app.value('bflConfig', {
    baseUrl : '/bfl/',
    defaultLang : 'en_US',
    langs : ['en_US', 'ko_KR']
});