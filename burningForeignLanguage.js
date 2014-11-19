(function(angular){
    'use strict';

    angular.module('burningForeignLanguage', [])
        .value('bflConfig', {
            baseUrl : '/bfl/',
            defaultLang : 'en_US',
            langs : [
                'en_US'
            ]
        })
        .factory('bflLanguage', function($http, bflConfig) {
            var result = {
                langs : bflConfig.langs,
                defaultLang : bflConfig.defaultLang,
                lang : bflConfig.defaultLang,
                dictionary : {}
            }
            result.setLang = function(newLang) {
                for (var i in bflConfig.langs) {
                    if (bflConfig.langs[i] === newLang) {
                        result.lang = newLang;
                        if (newLang === bflConfig.defaultLang) {
                            result.dictionary = {};
                            return;
                        }
                        $http.get(bflConfig.baseUrl + this.lang).success(function (data) {
                            result.dictionary = data;
                        });
                        return;
                    }
                }
            }
            return result;
        })
        .directive('bflTranslate', function(bflLanguage) {
            return {
                link : function(scope, element, attrs) {
                    scope.$watch(function() {
                        return bflLanguage.dictionary
                    }, function(dictionary) {
                        console.log(element);
                        element.text(dictionary[element.text()] || element.text());
                    })
                }
            }
        });

}(angular));