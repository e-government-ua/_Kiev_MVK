define('datepicker/factory', ['angularAMD'], function (angularAMD) {
    angularAMD.factory('DatepickerFactory', function () {
        var datepicker = function () {
            this.value = null;
            this.format = 'dd/MM/yyyy';
            this.opened = false;
			this.options = {};
        };

        datepicker.prototype.today = function () {
            this.value = new Date();
        };

        datepicker.prototype.clear = function () {
            this.value = null;
        };

        datepicker.prototype.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            this.opened = true;
        };

        return datepicker;
    });
});