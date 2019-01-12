webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/entities/bill-item/bill-item.service.ts":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/entities/bill-item/bill-item.service.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar http_1 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\nvar moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\nvar input_constants_1 = __webpack_require__(/*! app/shared/constants/input.constants */ \"./src/main/webapp/app/shared/constants/input.constants.ts\");\nvar operators_1 = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/operators/index.js\");\nvar app_constants_1 = __webpack_require__(/*! app/app.constants */ \"./src/main/webapp/app/app.constants.ts\");\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\nvar BillItemService = /** @class */ (function () {\n    function BillItemService(http) {\n        this.http = http;\n        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/bill-items';\n    }\n    BillItemService.prototype.create = function (billItem) {\n        var _this = this;\n        var copy = this.convertDateFromClient(billItem);\n        return this.http\n            .post(this.resourceUrl, copy, { observe: 'response' })\n            .pipe(operators_1.map(function (res) { return _this.convertDateFromServer(res); }));\n    };\n    BillItemService.prototype.update = function (billItem) {\n        var _this = this;\n        var copy = this.convertDateFromClient(billItem);\n        return this.http\n            .put(this.resourceUrl, copy, { observe: 'response' })\n            .pipe(operators_1.map(function (res) { return _this.convertDateFromServer(res); }));\n    };\n    BillItemService.prototype.find = function (id) {\n        var _this = this;\n        return this.http\n            .get(this.resourceUrl + \"/\" + id, { observe: 'response' })\n            .pipe(operators_1.map(function (res) { return _this.convertDateFromServer(res); }));\n    };\n    BillItemService.prototype.query = function (req) {\n        var _this = this;\n        var options = shared_1.createRequestOption(req);\n        return this.http\n            .get(this.resourceUrl, { params: options, observe: 'response' })\n            .pipe(operators_1.map(function (res) { return _this.convertDateArrayFromServer(res); }));\n    };\n    // queryByCompany(companyname: string): Observable<EntityArrayResponseType> {\n    //     const options = createRequestOption(companyname);\n    //     return this.http\n    //         .get<IBillItem[]>(this.resourceUrl, { params: options, observe: 'response' })\n    //         .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));\n    // }\n    BillItemService.prototype.delete = function (id) {\n        return this.http.delete(this.resourceUrl + \"/\" + id, { observe: 'response' });\n    };\n    BillItemService.prototype.convertDateFromClient = function (billItem) {\n        var copy = Object.assign({}, billItem, {\n            dueDate: billItem.dueDate != null && billItem.dueDate.isValid() ? billItem.dueDate.format(input_constants_1.DATE_FORMAT) : null,\n            paymentDate: billItem.paymentDate != null && billItem.paymentDate.isValid() ? billItem.paymentDate.format(input_constants_1.DATE_FORMAT) : null\n        });\n        return copy;\n    };\n    BillItemService.prototype.convertDateFromServer = function (res) {\n        if (res.body) {\n            res.body.dueDate = res.body.dueDate != null ? moment(res.body.dueDate) : null;\n            res.body.paymentDate = res.body.paymentDate != null ? moment(res.body.paymentDate) : null;\n        }\n        return res;\n    };\n    BillItemService.prototype.convertDateArrayFromServer = function (res) {\n        if (res.body) {\n            res.body.forEach(function (billItem) {\n                billItem.dueDate = billItem.dueDate != null ? moment(billItem.dueDate) : null;\n                billItem.paymentDate = billItem.paymentDate != null ? moment(billItem.paymentDate) : null;\n            });\n        }\n        return res;\n    };\n    var _a;\n    BillItemService = tslib_1.__decorate([\n        core_1.Injectable({ providedIn: 'root' }),\n        tslib_1.__metadata(\"design:paramtypes\", [typeof (_a = typeof http_1.HttpClient !== \"undefined\" && http_1.HttpClient) === \"function\" ? _a : Object])\n    ], BillItemService);\n    return BillItemService;\n}());\nexports.BillItemService = BillItemService;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2JpbGwtaXRlbS9iaWxsLWl0ZW0uc2VydmljZS50cz8yYjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUEyQztBQUMzQyw2R0FBZ0U7QUFFaEUsa0ZBQWlDO0FBQ2pDLHFKQUFtRTtBQUNuRSw0R0FBcUM7QUFFckMsNkdBQW1EO0FBQ25ELDhGQUFpRDtBQU9qRDtJQUdJLHlCQUFzQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRi9CLGdCQUFXLEdBQUcsOEJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUVkLENBQUM7SUFFMUMsZ0NBQU0sR0FBTixVQUFPLFFBQW1CO1FBQTFCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDaEUsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFDLEdBQXVCLElBQUssWUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLFFBQW1CO1FBQTFCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWCxHQUFHLENBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDL0QsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFDLEdBQXVCLElBQUssWUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FB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TyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM5RSxRQUFRLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUYsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7SUFuRVEsZUFBZTtRQUQzQixpQkFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO3FFQUlILGlCQUFVLG9CQUFWLGlCQUFVO09BSDdCLGVBQWUsQ0FvRTNCO0lBQUQsc0JBQUM7Q0FBQTtBQXBFWSwwQ0FBZSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYmlsbC1pdGVtL2JpbGwtaXRlbS5zZXJ2aWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBEQVRFX0ZPUk1BVCB9IGZyb20gJ2FwcC9zaGFyZWQvY29uc3RhbnRzL2lucHV0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNFUlZFUl9BUElfVVJMIH0gZnJvbSAnYXBwL2FwcC5jb25zdGFudHMnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiB9IGZyb20gJ2FwcC9zaGFyZWQnO1xuaW1wb3J0IHsgSUJpbGxJdGVtIH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9iaWxsLWl0ZW0ubW9kZWwnO1xuXG50eXBlIEVudGl0eVJlc3BvbnNlVHlwZSA9IEh0dHBSZXNwb25zZTxJQmlsbEl0ZW0+O1xudHlwZSBFbnRpdHlBcnJheVJlc3BvbnNlVHlwZSA9IEh0dHBSZXNwb25zZTxJQmlsbEl0ZW1bXT47XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQmlsbEl0ZW1TZXJ2aWNlIHtcbiAgICBwdWJsaWMgcmVzb3VyY2VVcmwgPSBTRVJWRVJfQVBJX1VSTCArICdhcGkvYmlsbC1pdGVtcyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCkge31cblxuICAgIGNyZWF0ZShiaWxsSXRlbTogSUJpbGxJdGVtKTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydERhdGVGcm9tQ2xpZW50KGJpbGxJdGVtKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3Q8SUJpbGxJdGVtPih0aGlzLnJlc291cmNlVXJsLCBjb3B5LCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydERhdGVGcm9tU2VydmVyKHJlcykpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoYmlsbEl0ZW06IElCaWxsSXRlbSk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbnZlcnREYXRlRnJvbUNsaWVudChiaWxsSXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wdXQ8SUJpbGxJdGVtPih0aGlzLnJlc291cmNlVXJsLCBjb3B5LCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydERhdGVGcm9tU2VydmVyKHJlcykpKTtcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0PElCaWxsSXRlbT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydERhdGVGcm9tU2VydmVyKHJlcykpKTtcbiAgICB9XG5cbiAgICBxdWVyeShyZXE/OiBhbnkpOiBPYnNlcnZhYmxlPEVudGl0eUFycmF5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQ8SUJpbGxJdGVtW10+KHRoaXMucmVzb3VyY2VVcmwsIHsgcGFyYW1zOiBvcHRpb25zLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgICAgICAucGlwZShtYXAoKHJlczogRW50aXR5QXJyYXlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydERhdGVBcnJheUZyb21TZXJ2ZXIocmVzKSkpO1xuICAgIH1cblxuICAgIC8vIHF1ZXJ5QnlDb21wYW55KGNvbXBhbnluYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0eUFycmF5UmVzcG9uc2VUeXBlPiB7XG4gICAgLy8gICAgIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKGNvbXBhbnluYW1lKTtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgIC8vICAgICAgICAgLmdldDxJQmlsbEl0ZW1bXT4odGhpcy5yZXNvdXJjZVVybCwgeyBwYXJhbXM6IG9wdGlvbnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAvLyAgICAgICAgIC5waXBlKG1hcCgocmVzOiBFbnRpdHlBcnJheVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0RGF0ZUFycmF5RnJvbVNlcnZlcihyZXMpKSk7XG4gICAgLy8gfVxuXG4gICAgZGVsZXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnZlcnREYXRlRnJvbUNsaWVudChiaWxsSXRlbTogSUJpbGxJdGVtKTogSUJpbGxJdGVtIHtcbiAgICAgICAgY29uc3QgY29weTogSUJpbGxJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgYmlsbEl0ZW0sIHtcbiAgICAgICAgICAgIGR1ZURhdGU6IGJpbGxJdGVtLmR1ZURhdGUgIT0gbnVsbCAmJiBiaWxsSXRlbS5kdWVEYXRlLmlzVmFsaWQoKSA/IGJpbGxJdGVtLmR1ZURhdGUuZm9ybWF0KERBVEVfRk9STUFUKSA6IG51bGwsXG4gICAgICAgICAgICBwYXltZW50RGF0ZTogYmlsbEl0ZW0ucGF5bWVudERhdGUgIT0gbnVsbCAmJiBiaWxsSXRlbS5wYXltZW50RGF0ZS5pc1ZhbGlkKCkgPyBiaWxsSXRlbS5wYXltZW50RGF0ZS5mb3JtYXQoREFURV9GT1JNQVQpIDogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnZlcnREYXRlRnJvbVNlcnZlcihyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSk6IEVudGl0eVJlc3BvbnNlVHlwZSB7XG4gICAgICAgIGlmIChyZXMuYm9keSkge1xuICAgICAgICAgICAgcmVzLmJvZHkuZHVlRGF0ZSA9IHJlcy5ib2R5LmR1ZURhdGUgIT0gbnVsbCA/IG1vbWVudChyZXMuYm9keS5kdWVEYXRlKSA6IG51bGw7XG4gICAgICAgICAgICByZXMuYm9keS5wYXltZW50RGF0ZSA9IHJlcy5ib2R5LnBheW1lbnREYXRlICE9IG51bGwgPyBtb21lbnQocmVzLmJvZHkucGF5bWVudERhdGUpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb252ZXJ0RGF0ZUFycmF5RnJvbVNlcnZlcihyZXM6IEVudGl0eUFycmF5UmVzcG9uc2VUeXBlKTogRW50aXR5QXJyYXlSZXNwb25zZVR5cGUge1xuICAgICAgICBpZiAocmVzLmJvZHkpIHtcbiAgICAgICAgICAgIHJlcy5ib2R5LmZvckVhY2goKGJpbGxJdGVtOiBJQmlsbEl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBiaWxsSXRlbS5kdWVEYXRlID0gYmlsbEl0ZW0uZHVlRGF0ZSAhPSBudWxsID8gbW9tZW50KGJpbGxJdGVtLmR1ZURhdGUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBiaWxsSXRlbS5wYXltZW50RGF0ZSA9IGJpbGxJdGVtLnBheW1lbnREYXRlICE9IG51bGwgPyBtb21lbnQoYmlsbEl0ZW0ucGF5bWVudERhdGUpIDogbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/bill-item/bill-item.service.ts\n");

/***/ })

})