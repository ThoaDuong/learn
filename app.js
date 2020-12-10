
var app = angular.module('app', ['ngSanitize', 'jm.i18next']);
app.run(function () {
    window.i18next.use(window.i18nextXHRBackend);
    window.i18next.init({
        lng: 'en',
        resources: {
            en: {
                translation: {
                    "name": "Name",
                    "age": "Age",
                }
            },
            vi: {
                translation: {
                    "name": "Tên",
                    "age": "Tuổi",
                }
            }
        }
    }, function (err, t) {
        console.log('resources loaded');
    });
})

app.controller('myCtl', function ($scope, $i18next) {
    $scope.test = 'Test';

    $scope.onChangeLanguage = (lang) => {
        $i18next.changeLanguage(lang);
    }
    i18next.on('languageChanged', () => {
        $scope.name = $i18next.t('name');
        $scope.age = $i18next.t('age');
    });
})