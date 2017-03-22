"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var NglDatepickerWeekdays = (function () {
    function NglDatepickerWeekdays(datePipe) {
        this.datePipe = datePipe;
        this.weekdays = [];
        this.render();
    }
    NglDatepickerWeekdays.prototype.render = function () {
        var dayNumber = 11;
        for (var i = 0; i < 7; i++) {
            var date = new Date(2013, 7, dayNumber++, 12);
            this.weekdays.push({
                id: "weekday-" + i,
                label: this.datePipe.transform(date, 'EEE'),
                title: this.datePipe.transform(date, 'EEEE'),
            });
        }
    };
    NglDatepickerWeekdays = __decorate([
        core_1.Component({
            selector: 'tr[nglWeekdays]',
            template: "\n    <th *ngFor=\"let day of weekdays\" [id]=\"day.id\" scope=\"col\"><abbr [title]=\"day.title\">{{day.label}}</abbr></th>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [common_1.DatePipe])
    ], NglDatepickerWeekdays);
    return NglDatepickerWeekdays;
}());
exports.NglDatepickerWeekdays = NglDatepickerWeekdays;
