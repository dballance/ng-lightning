System.registerDynamic("ts-helpers", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);
  (function() {
    this["__assignFn"] = __assignFn;
    this["__extendsFn"] = __extendsFn;
    this["__decorateFn"] = __decorateFn;
    this["__metadataFn"] = __metadataFn;
    this["__paramFn"] = __paramFn;
    this["__awaiterFn"] = __awaiterFn;
    function __assignFn(t) {
      for (var s,
          i = 1,
          n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    }
    function __extendsFn(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __decorateFn(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadataFn(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
    }
    function __paramFn(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __awaiterFn(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
      });
    }
    (function(__global) {
      __global.__assign = (__global && __global.__assign) || Object.assign || __assignFn;
      __global.__extends = (__global && __global.__extends) || __extendsFn;
      __global.__decorate = (__global && __global.__decorate) || __decorateFn;
      __global.__metadata = (__global && __global.__metadata) || __metadataFn;
      __global.__param = (__global && __global.__param) || __paramFn;
      __global.__awaiter = (__global && __global.__awaiter) || __awaiterFn;
    })(typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : typeof global !== "undefined" ? global : Function("return this;")());
  })();
  return _retrieveGlobal();
});

System.registerDynamic("ng-lightning/images/avatar", ["@angular/core", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var NglAvatar = (function() {
    function NglAvatar(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.src = '';
      this.alt = '';
      renderer.setElementClass(element.nativeElement, 'slds-avatar', true);
    }
    Object.defineProperty(NglAvatar.prototype, "setSize", {
      set: function(value) {
        this.updateClass(this._size, value);
        this._size = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglAvatar.prototype, "setType", {
      set: function(value) {
        this.updateClass(this._type, value);
        this._type = value;
      },
      enumerable: true,
      configurable: true
    });
    NglAvatar.prototype.ngOnInit = function() {
      if (!this._type) {
        this.renderer.setElementClass(this.element.nativeElement, 'slds-avatar--rectangle', true);
      }
      if (!this._size) {
        this.renderer.setElementClass(this.element.nativeElement, 'slds-avatar--medium', true);
      }
    };
    NglAvatar.prototype.updateClass = function(oldValue, newValue) {
      util_1.replaceClass(this, "slds-avatar--" + oldValue, newValue ? "slds-avatar--" + newValue : '');
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], NglAvatar.prototype, "src", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglAvatar.prototype, "alt", void 0);
    __decorate([core_1.Input('size'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglAvatar.prototype, "setSize", null);
    __decorate([core_1.Input('type'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglAvatar.prototype, "setType", null);
    NglAvatar = __decorate([core_1.Component({
      selector: 'ngl-avatar',
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      template: "\n    <img [src]=\"src\" [alt]=\"alt\">\n  "
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglAvatar);
    return NglAvatar;
  }());
  exports.NglAvatar = NglAvatar;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/badges/badge", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglBadge = (function() {
    function NglBadge() {}
    __decorate([core_1.Input(), __metadata('design:type', String)], NglBadge.prototype, "type", void 0);
    NglBadge = __decorate([core_1.Component({
      selector: 'ngl-badge',
      template: "\n    <span [ngClass]=\"type ? 'slds-theme--' + type : ''\" class=\"slds-badge\"><ng-content></ng-content></span>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata('design:paramtypes', [])], NglBadge);
    return NglBadge;
  }());
  exports.NglBadge = NglBadge;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/breadcrumbs/breadcrumbs", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglBreadcrumbs = (function() {
    function NglBreadcrumbs() {}
    __decorate([core_1.Input(), __metadata('design:type', String)], NglBreadcrumbs.prototype, "assistiveText", void 0);
    NglBreadcrumbs = __decorate([core_1.Component({
      selector: 'ngl-breadcrumbs',
      template: "\n   <nav role=\"navigation\" [attr.aria-label]=\"assistiveText\"><div class=\"slds-breadcrumb slds-list--horizontal\"><ng-content></ng-content></div></nav>\n ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata('design:paramtypes', [])], NglBreadcrumbs);
    return NglBreadcrumbs;
  }());
  exports.NglBreadcrumbs = NglBreadcrumbs;
  return module.exports;
});

System.registerDynamic("ng-lightning/breadcrumbs/breadcrumb", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglBreadcrumb = (function() {
    function NglBreadcrumb() {}
    __decorate([core_1.Input(), __metadata('design:type', String)], NglBreadcrumb.prototype, "href", void 0);
    NglBreadcrumb = __decorate([core_1.Component({
      selector: 'ngl-breadcrumb',
      template: "\n    <a [href]=\"href\"><ng-content></ng-content></a>\n  ",
      host: {'[class.slds-list__item]': 'true'},
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata('design:paramtypes', [])], NglBreadcrumb);
    return NglBreadcrumb;
  }());
  exports.NglBreadcrumb = NglBreadcrumb;
  return module.exports;
});

System.registerDynamic("ng-lightning/buttons/button-state", ["@angular/core", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var NglButtonState = (function() {
    function NglButtonState(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.selectedChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglButtonState.prototype, "selected", {
      get: function() {
        return this._selected;
      },
      set: function(_selected) {
        this._selected = util_1.toBoolean(_selected);
        this.toggleClass('slds-is-selected', this._selected);
        this.toggleClass('slds-not-selected', !this._selected);
      },
      enumerable: true,
      configurable: true
    });
    NglButtonState.prototype.onSelectChange = function() {
      this.selectedChange.emit(!this.selected);
    };
    NglButtonState.prototype.toggleClass = function(className, isAdd) {
      this.renderer.setElementClass(this.element.nativeElement, className, isAdd);
    };
    __decorate([core_1.Input('nglButtonState'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglButtonState.prototype, "selected", null);
    __decorate([core_1.Output('nglButtonStateChange'), __metadata('design:type', Object)], NglButtonState.prototype, "selectedChange", void 0);
    __decorate([core_1.HostListener('click', ['$event.target']), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], NglButtonState.prototype, "onSelectChange", null);
    NglButtonState = __decorate([core_1.Directive({
      selector: '[nglButtonState]',
      host: {'aria-live': 'assertive'}
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglButtonState);
    return NglButtonState;
  }());
  exports.NglButtonState = NglButtonState;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/datatables/_head", ["@angular/core", "../icons/icon"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var icon_1 = $__require('../icons/icon');
  var NglInternalDatatableHeadCell = (function() {
    function NglInternalDatatableHeadCell(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.onSort = new core_1.EventEmitter();
    }
    Object.defineProperty(NglInternalDatatableHeadCell.prototype, "sortOrder", {
      get: function() {
        return this._sortOrder;
      },
      set: function(order) {
        this._sortOrder = order;
        this.renderer.setElementClass(this.element.nativeElement, 'slds-is-sorted--asc', this.sortOrder === 'asc');
        this.renderer.setElementClass(this.element.nativeElement, 'slds-is-sorted--desc', this.sortOrder === 'desc');
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglInternalDatatableHeadCell.prototype, "isSorted", {
      get: function() {
        return !!this.sortOrder;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglInternalDatatableHeadCell.prototype, "ariaSort", {
      get: function() {
        return this.sortOrder ? this.sortOrder + "ending" : null;
      },
      enumerable: true,
      configurable: true
    });
    NglInternalDatatableHeadCell.prototype.sortChange = function() {
      this.onSort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
    };
    __decorate([core_1.HostBinding('attr.title'), core_1.Input(), __metadata('design:type', String)], NglInternalDatatableHeadCell.prototype, "heading", void 0);
    __decorate([core_1.HostBinding('class.slds-is-sortable'), core_1.Input(), __metadata('design:type', Boolean)], NglInternalDatatableHeadCell.prototype, "sortable", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglInternalDatatableHeadCell.prototype, "sortOrder", null);
    __decorate([core_1.HostBinding('class.slds-is-sorted'), __metadata('design:type', Object)], NglInternalDatatableHeadCell.prototype, "isSorted", null);
    __decorate([core_1.HostBinding('attr.aria-sort'), __metadata('design:type', Object)], NglInternalDatatableHeadCell.prototype, "ariaSort", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglInternalDatatableHeadCell.prototype, "onSort", void 0);
    NglInternalDatatableHeadCell = __decorate([core_1.Component({
      selector: 'th[ngl-internal-datatatable-head]',
      template: "\n    <div *ngIf=\"!sortable\" class=\"slds-truncate\">{{ heading }}</div><a *ngIf=\"sortable\" (click)=\"sortChange()\" class=\"slds-th__action slds-text-link--reset\"> <span class=\"slds-assistive-text\">Sort Column</span><span [title]=\"heading\" class=\"slds-truncate\">{{heading}}</span><div title=\"Sort Column\" ngl-icon icon=\"arrowdown\" size=\"x-small\" svgClass=\"slds-is-sortable__icon\" class=\"slds-icon_container\"></div></a>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      directives: [icon_1.NglIcon],
      host: {'scope': 'col'}
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglInternalDatatableHeadCell);
    return NglInternalDatatableHeadCell;
  }());
  exports.NglInternalDatatableHeadCell = NglInternalDatatableHeadCell;
  return module.exports;
});

System.registerDynamic("ng-lightning/datatables/_cell", ["@angular/core", "./column"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var column_1 = $__require('./column');
  var NglInternalDatatableCell = (function() {
    function NglInternalDatatableCell() {}
    Object.defineProperty(NglInternalDatatableCell.prototype, "dataLabel", {
      get: function() {
        return this.column.heading;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglInternalDatatableCell.prototype, "context", {
      get: function() {
        return {
          $implicit: this.value,
          row: this.row,
          index: this.index
        };
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglInternalDatatableCell.prototype, "value", {
      get: function() {
        var key = this.column.key;
        return key ? this.row[key] : null;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglInternalDatatableCell.prototype, "row", void 0);
    __decorate([core_1.Input(), __metadata('design:type', column_1.NglDatatableColumn)], NglInternalDatatableCell.prototype, "column", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], NglInternalDatatableCell.prototype, "index", void 0);
    __decorate([core_1.HostBinding('attr.data-label'), __metadata('design:type', Object)], NglInternalDatatableCell.prototype, "dataLabel", null);
    NglInternalDatatableCell = __decorate([core_1.Component({
      selector: 'td[ngl-internal-datatatable-cell]',
      template: "\n    <template *ngIf=\"column.cellTpl\" [ngTemplateOutlet]=\"column.cellTpl.templateRef\" [ngOutletContext]=\"context\"></template><span *ngIf=\"!column.cellTpl\">{{ value }}</span>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata('design:paramtypes', [])], NglInternalDatatableCell);
    return NglInternalDatatableCell;
  }());
  exports.NglInternalDatatableCell = NglInternalDatatableCell;
  return module.exports;
});

System.registerDynamic("ng-lightning/datatables/datatable", ["@angular/core", "./column", "./_head", "./_cell"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var column_1 = $__require('./column');
  var _head_1 = $__require('./_head');
  var _cell_1 = $__require('./_cell');
  ;
  var NglDatatable = (function() {
    function NglDatatable(detector, element, renderer) {
      this.detector = detector;
      this.data = [];
      this.bordered = true;
      this.striped = true;
      this.sortChange = new core_1.EventEmitter();
      renderer.setElementClass(element.nativeElement, 'slds-table', true);
    }
    NglDatatable.prototype.columnTrackBy = function(index, column) {
      return column.key || index;
    };
    NglDatatable.prototype.dataTrackBy = function(index, data) {
      return this.trackByKey ? data[this.trackByKey] : index;
    };
    NglDatatable.prototype.onColumnSort = function(column, order) {
      var key = column.key;
      if (!key) {
        throw new Error("ng-lightning: No \"key\" property is set for sortable column \"" + column.heading + "\"");
      }
      this.sortChange.emit({
        key: key,
        order: order
      });
    };
    NglDatatable.prototype.getColumnSortOrder = function(column) {
      return this.sort && column.key === this.sort.key ? this.sort.order : null;
    };
    NglDatatable.prototype.ngAfterContentInit = function() {
      var _this = this;
      this._columnsSubscription = this.columns.changes.subscribe(function() {
        return _this.detector.markForCheck();
      });
    };
    NglDatatable.prototype.ngOnDestroy = function() {
      this._columnsSubscription.unsubscribe();
    };
    __decorate([core_1.Input(), __metadata('design:type', Array)], NglDatatable.prototype, "data", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglDatatable.prototype, "trackByKey", void 0);
    __decorate([core_1.HostBinding('class.slds-table--bordered'), core_1.Input(), __metadata('design:type', Object)], NglDatatable.prototype, "bordered", void 0);
    __decorate([core_1.HostBinding('class.slds-table--striped'), core_1.Input(), __metadata('design:type', Object)], NglDatatable.prototype, "striped", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglDatatable.prototype, "sort", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglDatatable.prototype, "sortChange", void 0);
    __decorate([core_1.ContentChildren(column_1.NglDatatableColumn), __metadata('design:type', core_1.QueryList)], NglDatatable.prototype, "columns", void 0);
    NglDatatable = __decorate([core_1.Component({
      selector: 'table[ngl-datatable]',
      template: "\n    <thead><tr class=\"slds-text-heading--label\"><th *ngFor=\"let col of columns; trackBy:columnTrackBy\" ngl-internal-datatatable-head [heading]=\"col.heading\" [sortable]=\"col.sortable\" [sortOrder]=\"getColumnSortOrder(col)\" (onSort)=\"onColumnSort(col, $event)\"></th></tr></thead><tbody><tr *ngFor=\"let d of data; let i = index; trackBy:dataTrackBy\"><td *ngFor=\"let col of columns; trackBy:columnTrackBy\" [ngClass]=\"col.cellClass\" ngl-internal-datatatable-cell [row]=\"d\" [column]=\"col\" [index]=\"i\"></td></tr></tbody>\n  ",
      directives: [_head_1.NglInternalDatatableHeadCell, _cell_1.NglInternalDatatableCell]
    }), __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer])], NglDatatable);
    return NglDatatable;
  }());
  exports.NglDatatable = NglDatatable;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/datatables/column", ["@angular/core", "./cell", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var cell_1 = $__require('./cell');
  var util_1 = $__require('../util/util');
  var NglDatatableColumn = (function() {
    function NglDatatableColumn() {
      this._sortable = false;
    }
    Object.defineProperty(NglDatatableColumn.prototype, "sortable", {
      get: function() {
        return this._sortable;
      },
      set: function(sortable) {
        this._sortable = util_1.toBoolean(sortable);
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', String)], NglDatatableColumn.prototype, "heading", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglDatatableColumn.prototype, "key", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglDatatableColumn.prototype, "cellClass", void 0);
    __decorate([core_1.ContentChild(cell_1.NglDatatableCell), __metadata('design:type', cell_1.NglDatatableCell)], NglDatatableColumn.prototype, "cellTpl", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglDatatableColumn.prototype, "sortable", null);
    NglDatatableColumn = __decorate([core_1.Directive({selector: 'ngl-datatable-column'}), __metadata('design:paramtypes', [])], NglDatatableColumn);
    return NglDatatableColumn;
  }());
  exports.NglDatatableColumn = NglDatatableColumn;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/datatables/cell", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglDatatableCell = (function() {
    function NglDatatableCell(templateRef) {
      this.templateRef = templateRef;
    }
    NglDatatableCell = __decorate([core_1.Directive({selector: 'template[nglDatatableCell]'}), __metadata('design:paramtypes', [core_1.TemplateRef])], NglDatatableCell);
    return NglDatatableCell;
  }());
  exports.NglDatatableCell = NglDatatableCell;
  return module.exports;
});

System.registerDynamic("ng-lightning/datatables/directives", ["./datatable", "./column", "./cell"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var datatable_1 = $__require('./datatable');
  var column_1 = $__require('./column');
  var cell_1 = $__require('./cell');
  var datatable_2 = $__require('./datatable');
  exports.NglDatatable = datatable_2.NglDatatable;
  var column_2 = $__require('./column');
  exports.NglDatatableColumn = column_2.NglDatatableColumn;
  var cell_2 = $__require('./cell');
  exports.NglDatatableCell = cell_2.NglDatatableCell;
  exports.NGL_DATATABLE_DIRECTIVES = [datatable_1.NglDatatable, column_1.NglDatatableColumn, cell_1.NglDatatableCell];
  return module.exports;
});

System.registerDynamic("ng-lightning/lookups/lookup", ["@angular/core", "rxjs/Rx", "./item", "../pills/pill", "../pills/pill-remove", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var Rx_1 = $__require('rxjs/Rx');
  var item_1 = $__require('./item');
  var pill_1 = $__require('../pills/pill');
  var pill_remove_1 = $__require('../pills/pill-remove');
  var util_1 = $__require('../util/util');
  var NglLookup = (function() {
    function NglLookup(element, renderer, detector, debounce) {
      this.element = element;
      this.renderer = renderer;
      this.detector = detector;
      this.debounce = debounce;
      this.valueChange = new core_1.EventEmitter();
      this.pickChange = new core_1.EventEmitter();
      this.inputId = util_1.uniqueId('lookup_input');
      this.globalClickUnsubscriber = null;
      this._open = false;
      this.inputValue = '';
      this.inputSubject = new Rx_1.BehaviorSubject(undefined);
      this.noResults = false;
      this.activeIndex = -1;
      this.pendingFocus = false;
      if (this.debounce === null) {
        this.debounce = 200;
      }
    }
    Object.defineProperty(NglLookup.prototype, "value", {
      set: function(value) {
        if (value !== this.inputSubject.getValue()) {
          this.inputValue = value;
          this.inputSubject.next(value);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglLookup.prototype, "setPick", {
      set: function(pick) {
        this.inputValue = this.resolveLabel(pick);
        this.pick = pick;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglLookup.prototype, "open", {
      get: function() {
        return this._open;
      },
      set: function(_open) {
        var _this = this;
        if (this.open === _open)
          return;
        if (_open) {
          this.globalClickUnsubscriber = this.renderer.listenGlobal('document', 'click', function($event) {
            _this.globalClickHandler($event);
            _this.detector.markForCheck();
          });
        } else {
          this.activeIndex = -1;
          this.unsubscribeGlobalClick();
        }
        this._open = _open;
      },
      enumerable: true,
      configurable: true
    });
    NglLookup.prototype.handlePick = function(item) {
      this.pickChange.emit(item);
    };
    NglLookup.prototype.onInputChange = function(value) {
      this.inputSubject.next(value);
    };
    NglLookup.prototype.ngOnInit = function() {
      var _this = this;
      var valueStream = this.inputSubject.skip(1).do(function(value) {
        _this.lastUserInput = value;
        _this.activeIndex = -1;
        _this.valueChange.emit(value);
      });
      if (this.debounce > 0) {
        valueStream = valueStream.debounceTime(this.debounce);
      }
      var suggestions$ = valueStream.distinctUntilChanged().switchMap(function(value) {
        var suggestions = _this.lookup(value);
        return suggestions instanceof Rx_1.Observable ? suggestions : Rx_1.Observable.of(suggestions);
      }).publish().refCount();
      suggestions$.subscribe(function(suggestions) {
        _this.suggestions = suggestions;
        _this.noResults = Array.isArray(suggestions) && !suggestions.length;
        _this.open = !!suggestions;
        _this.detector.markForCheck();
      });
    };
    NglLookup.prototype.resolveLabel = function(item) {
      return this.field && util_1.isObject(item) ? item[this.field] : item;
    };
    NglLookup.prototype.close = function(evt) {
      evt.preventDefault();
      this.open = false;
    };
    NglLookup.prototype.globalClickHandler = function($event) {
      var nativeElement = this.element.nativeElement;
      if ($event.target === nativeElement || nativeElement.contains($event.target)) {
        return;
      }
      this.open = false;
    };
    NglLookup.prototype.optionId = function(index) {
      return index < 0 ? null : this.inputId + "_active_" + index;
    };
    NglLookup.prototype.pickActive = function(evt) {
      if (this.activeIndex < 0)
        return;
      this.handlePick(this.suggestions[this.activeIndex]);
    };
    NglLookup.prototype.moveActive = function(evt, moves) {
      evt.preventDefault();
      if (!this.expanded)
        return;
      this.activeIndex = Math.max(-1, Math.min(this.activeIndex + moves, this.suggestions.length - 1));
      var value = this.activeIndex === -1 ? this.lastUserInput : this.resolveLabel(this.suggestions[this.activeIndex]);
      this.inputValue = value;
    };
    NglLookup.prototype.ngAfterViewChecked = function() {
      if (this.pendingFocus && !this.pick) {
        this.focus();
      }
      this.pendingFocus = false;
    };
    NglLookup.prototype.clear = function() {
      this.pickChange.emit(null);
      this.pendingFocus = true;
    };
    NglLookup.prototype.focus = function() {
      this.renderer.invokeElementMethod(this.inputEl.nativeElement, 'focus', []);
    };
    Object.defineProperty(NglLookup.prototype, "expanded", {
      get: function() {
        return this.open && !this.pick;
      },
      enumerable: true,
      configurable: true
    });
    NglLookup.prototype.ngOnDestroy = function() {
      this.unsubscribeGlobalClick();
    };
    NglLookup.prototype.unsubscribeGlobalClick = function() {
      if (!this.globalClickUnsubscriber)
        return;
      this.globalClickUnsubscriber();
      this.globalClickUnsubscriber = null;
    };
    __decorate([core_1.ContentChild(item_1.NglLookupItemTemplate), __metadata('design:type', item_1.NglLookupItemTemplate)], NglLookup.prototype, "itemTemplate", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglLookup.prototype, "placeholder", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglLookup.prototype, "value", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglLookup.prototype, "valueChange", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Function)], NglLookup.prototype, "lookup", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglLookup.prototype, "field", void 0);
    __decorate([core_1.Input('pick'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglLookup.prototype, "setPick", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglLookup.prototype, "pickChange", void 0);
    __decorate([core_1.ViewChild('lookupInput'), __metadata('design:type', core_1.ElementRef)], NglLookup.prototype, "inputEl", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], NglLookup.prototype, "open", null);
    NglLookup = __decorate([core_1.Component({
      selector: 'ngl-lookup',
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      template: "\n    <div data-select=\"single\" data-scope=\"single\" [class.slds-is-open]=\"expanded\" class=\"slds-lookup slds-form-element\"><label [attr.for]=\"inputId\" class=\"slds-form-element__label\"><ng-content select=\"[nglLookupLabel]\"></ng-content></label><div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon--right\"><div *ngIf=\"pick\" class=\"slds-pill_container\"><ngl-pill (nglPillRemove)=\"clear()\">{{resolveLabel(pick)}}</ngl-pill></div><input #lookupInput [id]=\"inputId\" type=\"text\" [ngClass]=\"{'slds-hide': pick}\" aria-autocomplete=\"list\" role=\"combobox\" [attr.aria-expanded]=\"!!expanded\" [attr.aria-activedescendant]=\"optionId(activeIndex)\" [ngModel]=\"inputValue\" (ngModelChange)=\"onInputChange($event)\" (keydown.Esc)=\"close($event)\" [placeholder]=\"placeholder || ''\" (keydown.ArrowDown)=\"moveActive($event, 1)\" (keydown.ArrowUp)=\"moveActive($event, -1)\" (keydown.Enter)=\"pickActive($event)\" class=\"slds-input slds-lookup__search-input\"></div><div *ngIf=\"expanded\" role=\"listbox\" [ngSwitch]=\"!!itemTemplate\" class=\"slds-lookup__menu\"><ul role=\"presentation\" class=\"slds-lookup__list\" *ngSwitchCase=\"false\"><li *ngIf=\"noResults\"><div class=\"slds-lookup__item--label\">No results found</div></li><li *ngFor=\"let item of suggestions; let i=index\" (click)=\"handlePick(item)\" [ngClass]=\"{'slds-dropdown__item--active': i === activeIndex }\"><a [id]=\"optionId(i)\" role=\"option\" class=\"slds-lookup__item-action\">{{resolveLabel(item)}}</a></li></ul><ul role=\"presentation\" class=\"slds-lookup__list\" *ngSwitchCase=\"true\"><li *ngIf=\"noResults\"><div class=\"slds-lookup__item--label\">No results found</div></li><li *ngFor=\"let item of suggestions; let i=index\" (click)=\"handlePick(item)\" [ngClass]=\"{'slds-dropdown__item--active': i === activeIndex }\"><a [id]=\"optionId(i)\" role=\"option\" class=\"slds-lookup__item-action\"><template [ngTemplateOutlet]=\"itemTemplate.templateRef\" [ngOutletContext]=\"{ $implicit: item }\"></template></a></li></ul></div></div>\n  ",
      directives: [pill_1.NglPill, pill_remove_1.NglPillRemove],
      styles: [".slds-dropdown__item--active > a {\n        outline: 0;\n        text-decoration: none;\n        background-color: #f4f6f9;\n    }"]
    }), __param(3, core_1.Attribute('debounce')), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.ChangeDetectorRef, Number])], NglLookup);
    return NglLookup;
  }());
  exports.NglLookup = NglLookup;
  return module.exports;
});

System.registerDynamic("ng-lightning/lookups/item", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglLookupItemTemplate = (function() {
    function NglLookupItemTemplate(templateRef) {
      this.templateRef = templateRef;
    }
    NglLookupItemTemplate = __decorate([core_1.Directive({selector: 'template[nglLookupItem]'}), __metadata('design:paramtypes', [core_1.TemplateRef])], NglLookupItemTemplate);
    return NglLookupItemTemplate;
  }());
  exports.NglLookupItemTemplate = NglLookupItemTemplate;
  return module.exports;
});

System.registerDynamic("ng-lightning/lookups/directives", ["./lookup", "./item"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lookup_1 = $__require('./lookup');
  var item_1 = $__require('./item');
  var lookup_2 = $__require('./lookup');
  exports.NglLookup = lookup_2.NglLookup;
  var item_2 = $__require('./item');
  exports.NglLookupItemTemplate = item_2.NglLookupItemTemplate;
  exports.NGL_LOOKUP_DIRECTIVES = [lookup_1.NglLookup, item_1.NglLookupItemTemplate];
  return module.exports;
});

System.registerDynamic("ng-lightning/datepickers/weekdays", ["@angular/core", "@angular/common"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var common_1 = $__require('@angular/common');
  var NglDatepickerWeekdays = (function() {
    function NglDatepickerWeekdays(datePipe) {
      this.datePipe = datePipe;
      this.weekdays = [];
      this.render();
    }
    NglDatepickerWeekdays.prototype.render = function() {
      var dayNumber = 11;
      for (var i = 0; i < 7; i++) {
        var date = new Date(2013, 7, dayNumber++, 12);
        this.weekdays.push({
          id: "weekday-" + i,
          label: this.datePipe.transform(date, 'EEE'),
          title: this.datePipe.transform(date, 'EEEE')
        });
      }
    };
    NglDatepickerWeekdays = __decorate([core_1.Component({
      selector: 'tr[nglWeekdays]',
      template: "\n    <th *ngFor=\"let day of weekdays\" [id]=\"day.id\" scope=\"col\"><abbr [title]=\"day.title\">{{day.label}}</abbr></th>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata('design:paramtypes', [common_1.DatePipe])], NglDatepickerWeekdays);
    return NglDatepickerWeekdays;
  }());
  exports.NglDatepickerWeekdays = NglDatepickerWeekdays;
  return module.exports;
});

System.registerDynamic("ng-lightning/datepickers/day", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglDay = (function() {
    function NglDay() {}
    Object.defineProperty(NglDay.prototype, "label", {
      get: function() {
        return this.day < 10 ? "0" + this.day : this.day;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input('nglDay'), __metadata('design:type', Object)], NglDay.prototype, "day", void 0);
    __decorate([core_1.HostBinding('class.slds-disabled-text'), core_1.HostBinding('attr.aria-disabled'), core_1.Input(), __metadata('design:type', Boolean)], NglDay.prototype, "nglDayDisabled", void 0);
    __decorate([core_1.HostBinding('class.slds-is-selected'), core_1.HostBinding('attr.aria-selected'), core_1.Input(), __metadata('design:type', Boolean)], NglDay.prototype, "nglDaySelected", void 0);
    NglDay = __decorate([core_1.Component({
      selector: 'td[nglDay]',
      template: "\n    <span class=\"slds-day\">{{ label }}</span>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      host: {'role': 'gridcell'}
    }), __metadata('design:paramtypes', [])], NglDay);
    return NglDay;
  }());
  exports.NglDay = NglDay;
  return module.exports;
});

System.registerDynamic("ng-lightning/datepickers/year", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglDatepickerYear = (function() {
    function NglDatepickerYear() {
      this.numYearsBefore = 100;
      this.numYearsAfter = 10;
      this.yearChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglDatepickerYear.prototype, "setYear", {
      set: function(year) {
        this.year = +year;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglDatepickerYear.prototype, "range", {
      get: function() {
        var currentYear = (new Date()).getFullYear();
        var firstYear = Math.min(currentYear - this.numYearsBefore, this.year);
        var size = Math.max(currentYear + this.numYearsAfter, this.year) - firstYear;
        return Array.apply(null, {length: size + 1}).map(function(value, index) {
          return firstYear + index;
        });
      },
      enumerable: true,
      configurable: true
    });
    NglDatepickerYear.prototype.change = function($event) {
      this.yearChange.emit($event);
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], NglDatepickerYear.prototype, "numYearsBefore", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], NglDatepickerYear.prototype, "numYearsAfter", void 0);
    __decorate([core_1.Input('year'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglDatepickerYear.prototype, "setYear", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglDatepickerYear.prototype, "yearChange", void 0);
    NglDatepickerYear = __decorate([core_1.Component({
      selector: 'ngl-date-year',
      template: "\n    <div class=\"slds-select_container\"><select [ngModel]=\"year\" (ngModelChange)=\"change($event)\" class=\"slds-select\"><option *ngFor=\"let yr of range\" [value]=\"yr\">{{yr}}</option></select></div>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata('design:paramtypes', [])], NglDatepickerYear);
    return NglDatepickerYear;
  }());
  exports.NglDatepickerYear = NglDatepickerYear;
  return module.exports;
});

System.registerDynamic("ng-lightning/datepickers/datepicker", ["@angular/core", "@angular/common", "../util/util", "../buttons/button-icon", "../icons/icon", "./weekdays", "./day", "./year"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var common_1 = $__require('@angular/common');
  var util_1 = $__require('../util/util');
  var button_icon_1 = $__require('../buttons/button-icon');
  var icon_1 = $__require('../icons/icon');
  var weekdays_1 = $__require('./weekdays');
  var day_1 = $__require('./day');
  var year_1 = $__require('./year');
  var NglDatepicker = (function() {
    function NglDatepicker(datePipe) {
      this.datePipe = datePipe;
      this.showToday = true;
      this.dateChange = new core_1.EventEmitter();
      this.uid = util_1.uniqueId('datepicker');
      this.split = function(arr, size) {
        if (size === void 0) {
          size = 7;
        }
        var arrays = [];
        while (arr.length > 0) {
          arrays.push(arr.splice(0, size));
        }
        return arrays;
      };
    }
    Object.defineProperty(NglDatepicker.prototype, "_date", {
      set: function(date) {
        this.date = this.parseDate(date);
        if (this.date) {
          this.current = Object.assign({}, this.date);
        }
        this.render();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglDatepicker.prototype, "_showToday", {
      set: function(showToday) {
        this.showToday = util_1.toBoolean(showToday);
      },
      enumerable: true,
      configurable: true
    });
    NglDatepicker.prototype.moveYear = function(year) {
      this.current.year = +year;
      this.render();
    };
    NglDatepicker.prototype.keyboardHandler = function($event, code, param) {
      if ($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
      if (code === 'Enter') {
        this.select();
        return;
      }
      var _a = this.current,
          year = _a.year,
          month = _a.month,
          day = _a.day;
      var date = new Date(year, month, day, 12);
      if (code === 'Move') {
        date.setDate(day + (+param));
        this.current = {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate()
        };
      } else if (code === 'MoveMonth') {
        date.setMonth(month + (+param), 1);
        this.current = {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: day
        };
      } else if (code === 'MoveTo') {
        this.current.day = +param;
      }
      this.render();
    };
    NglDatepicker.prototype.isSelected = function(date) {
      return this.isEqualDate(date, this.date);
    };
    NglDatepicker.prototype.isActive = function(date) {
      return this.isEqualDate(date, this.current);
    };
    NglDatepicker.prototype.select = function(date) {
      if (date === void 0) {
        date = this.current;
      }
      if (date.disabled)
        return;
      var year = date.year,
          month = date.month,
          day = date.day;
      this.dateChange.emit(new Date(year, month, day));
    };
    NglDatepicker.prototype.indexTrackBy = function(index) {
      return index;
    };
    NglDatepicker.prototype.selectToday = function() {
      this.dateChange.emit(new Date());
    };
    NglDatepicker.prototype.parseDate = function(date) {
      if (!date)
        return null;
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      };
    };
    NglDatepicker.prototype.isEqualDate = function(d1, d2) {
      return d1 && d2 && d1.day === d2.day && d1.month === d2.month && d1.year === d2.year;
    };
    NglDatepicker.prototype.render = function() {
      if (!this.current) {
        this.current = this.today;
      }
      var _a = this.current,
          year = _a.year,
          month = _a.month,
          day = _a.day;
      this.monthLabel = this.datePipe.transform(new Date(year, month, 1), 'MMMM');
      var days = this.daysInMonth(year, month);
      this.current.day = Math.min(day, days.length);
      Array.prototype.unshift.apply(days, this.daysInPreviousMonth(year, month));
      var nextMonth = this.daysInNextMonth(year, month + 1, days.length);
      if (nextMonth) {
        Array.prototype.push.apply(days, nextMonth);
      }
      this.weeks = this.split(days);
    };
    NglDatepicker.prototype.daysInMonth = function(year, month) {
      var last = new Date(year, month + 1, 0).getDate();
      return this.getDayObjects(year, month, 1, last);
    };
    NglDatepicker.prototype.daysInPreviousMonth = function(year, month) {
      var first = new Date(year, month, 1);
      var offset = first.getDay();
      var last = new Date(year, month, 0).getDate();
      return this.getDayObjects(year, month - 1, last - offset + 1, last, true);
    };
    NglDatepicker.prototype.daysInNextMonth = function(year, month, numOfDays) {
      if (numOfDays % 7 === 0)
        return;
      return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), true);
    };
    NglDatepicker.prototype.getDayObjects = function(year, month, from, to, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }
      var days = [];
      for (var day = from; day <= to; day++) {
        days.push({
          year: year,
          month: month,
          day: day,
          disabled: disabled
        });
      }
      return days;
    };
    Object.defineProperty(NglDatepicker.prototype, "today", {
      get: function() {
        var today = new Date();
        return {
          year: today.getFullYear(),
          month: today.getMonth(),
          day: today.getDate()
        };
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input('date'), __metadata('design:type', Date), __metadata('design:paramtypes', [Date])], NglDatepicker.prototype, "_date", null);
    __decorate([core_1.Input('showToday'), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], NglDatepicker.prototype, "_showToday", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglDatepicker.prototype, "dateChange", void 0);
    __decorate([core_1.HostListener('keydown.Enter', ['$event', '"Enter"']), core_1.HostListener('keydown.ArrowUp', ['$event', '"Move"', '-7']), core_1.HostListener('keydown.ArrowLeft', ['$event', '"Move"', '-1']), core_1.HostListener('keydown.ArrowDown', ['$event', '"Move"', '7']), core_1.HostListener('keydown.ArrowRight', ['$event', '"Move"', '1']), core_1.HostListener('keydown.PageUp', ['$event', '"MoveMonth"', '-1']), core_1.HostListener('keydown.PageDown', ['$event', '"MoveMonth"', '1']), core_1.HostListener('keydown.Home', ['$event', '"MoveTo"', '1']), core_1.HostListener('keydown.End', ['$event', '"MoveTo"', '31']), __metadata('design:type', Function), __metadata('design:paramtypes', [KeyboardEvent, String, String]), __metadata('design:returntype', void 0)], NglDatepicker.prototype, "keyboardHandler", null);
    NglDatepicker = __decorate([core_1.Component({
      selector: 'ngl-datepicker',
      template: "\n    <div class=\"slds-datepicker__filter slds-grid\"><div class=\"slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-grow\"><div class=\"slds-align-middle\"><button type=\"button\" nglButtonIcon=\"container\" (click)=\"keyboardHandler($event, 'MoveMonth', -1)\"><ngl-icon icon=\"left\" size=\"small\" alt=\"Previous Month\"></ngl-icon></button></div><h2 [id]=\"uid + '_month'\" aria-live=\"assertive\" aria-atomic=\"true\" class=\"slds-align-middle\">{{ monthLabel }}</h2><div class=\"slds-align-middle\"><button type=\"button\" nglButtonIcon=\"container\" (click)=\"keyboardHandler($event, 'MoveMonth', 1)\"><ngl-icon icon=\"right\" size=\"small\" alt=\"Next Month\"></ngl-icon></button></div></div><ngl-date-year [year]=\"current.year\" (yearChange)=\"moveYear($event)\" class=\"slds-shrink-none\"></ngl-date-year></div><table role=\"grid\" [attr.aria-labelledby]=\"uid + '_month'\" class=\"datepicker__month\"><thead><tr nglWeekdays></tr></thead><tbody><tr *ngFor=\"let week of weeks; trackBy:indexTrackBy\"><td *ngFor=\"let date of week\" (click)=\"select(date)\" [class.slds-is-today]=\"isActive(date)\" [nglDay]=\"date.day\" [nglDaySelected]=\"isSelected(date)\" [nglDayDisabled]=\"date.disabled\"></td></tr><tr *ngIf=\"showToday\"><td colspan=\"7\" role=\"gridcell\"><a href=\"javascript:void(0)\" (click)=\"selectToday()\" class=\"slds-show--inline-block slds-p-bottom--x-small\">Today</a></td></tr></tbody></table>\n  ",
      directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon, day_1.NglDay, weekdays_1.NglDatepickerWeekdays, year_1.NglDatepickerYear],
      providers: [common_1.DatePipe],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      host: {
        'aria-hidden': 'false',
        '[class.slds-datepicker]': 'true',
        'tabindex': '0'
      },
      styles: [":host { display: block; }"]
    }), __metadata('design:paramtypes', [common_1.DatePipe])], NglDatepicker);
    return NglDatepicker;
  }());
  exports.NglDatepicker = NglDatepicker;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/elements/input", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglFormInput = (function() {
    function NglFormInput(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.hostClass = 'slds-input';
    }
    NglFormInput.prototype.setup = function(id) {
      this.renderer.setElementAttribute(this.element.nativeElement, 'id', id);
      if (this.hostClass) {
        this.renderer.setElementClass(this.element.nativeElement, this.hostClass, true);
      }
    };
    __decorate([core_1.HostBinding('attr.aria-describedby'), __metadata('design:type', String)], NglFormInput.prototype, "describedBy", void 0);
    NglFormInput = __decorate([core_1.Directive({selector: 'input:not([type=checkbox]), input:not([type=radio])'}), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglFormInput);
    return NglFormInput;
  }());
  exports.NglFormInput = NglFormInput;
  ;
  var NglFormTextarea = (function(_super) {
    __extends(NglFormTextarea, _super);
    function NglFormTextarea(element, renderer) {
      _super.call(this, element, renderer);
      this.element = element;
      this.renderer = renderer;
      this.hostClass = 'slds-textarea';
    }
    NglFormTextarea = __decorate([core_1.Directive({
      selector: 'textarea',
      providers: [{
        provide: NglFormInput,
        useExisting: NglFormTextarea
      }]
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglFormTextarea);
    return NglFormTextarea;
  }(NglFormInput));
  exports.NglFormTextarea = NglFormTextarea;
  var NglFormSelect = (function(_super) {
    __extends(NglFormSelect, _super);
    function NglFormSelect(element, renderer) {
      _super.call(this, element, renderer);
      this.element = element;
      this.renderer = renderer;
      this.hostClass = 'slds-select';
    }
    NglFormSelect = __decorate([core_1.Directive({
      selector: 'select',
      providers: [{
        provide: NglFormInput,
        useExisting: NglFormSelect
      }]
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglFormSelect);
    return NglFormSelect;
  }(NglFormInput));
  exports.NglFormSelect = NglFormSelect;
  var NglFormCheckbox = (function(_super) {
    __extends(NglFormCheckbox, _super);
    function NglFormCheckbox(element, renderer) {
      _super.call(this, element, renderer);
      this.element = element;
      this.renderer = renderer;
      this.hostClass = null;
    }
    NglFormCheckbox = __decorate([core_1.Directive({
      selector: 'input[type=checkbox]',
      providers: [{
        provide: NglFormInput,
        useExisting: NglFormCheckbox
      }]
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglFormCheckbox);
    return NglFormCheckbox;
  }(NglFormInput));
  exports.NglFormCheckbox = NglFormCheckbox;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/elements/element", ["@angular/core", "../../util/util", "./input", "../form-label", "../../util/outlet"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../../util/util');
  var input_1 = $__require('./input');
  var form_label_1 = $__require('../form-label');
  var outlet_1 = $__require('../../util/outlet');
  var NglFormElement = (function() {
    function NglFormElement(detector) {
      this.detector = detector;
      this.uid = util_1.uniqueId('form_element');
      this.required = false;
    }
    Object.defineProperty(NglFormElement.prototype, "setError", {
      set: function(error) {
        this.error = error;
        if (this.contentEl) {
          this.setInputErrorId();
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglFormElement.prototype, "_label", {
      get: function() {
        return form_label_1.getFormLabel(this.label, this.labelTpl);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglFormElement.prototype, "isCheckbox", {
      get: function() {
        return this.contentEl instanceof input_1.NglFormCheckbox;
      },
      enumerable: true,
      configurable: true
    });
    NglFormElement.prototype.ngAfterContentInit = function() {
      this.contentEl.setup(this.uid);
      this.setInputErrorId();
    };
    NglFormElement.prototype.setInputErrorId = function() {
      this.contentEl.describedBy = this.error ? "error_" + this.uid : null;
    };
    __decorate([core_1.ContentChild(input_1.NglFormInput), __metadata('design:type', input_1.NglFormInput)], NglFormElement.prototype, "contentEl", void 0);
    __decorate([core_1.Input('nglFormLabel'), __metadata('design:type', String)], NglFormElement.prototype, "label", void 0);
    __decorate([core_1.ContentChild(form_label_1.NglFormLabelTemplate), __metadata('design:type', form_label_1.NglFormLabelTemplate)], NglFormElement.prototype, "labelTpl", void 0);
    __decorate([core_1.Input('nglFormError'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglFormElement.prototype, "setError", null);
    __decorate([core_1.HostBinding('class.slds-has-error'), __metadata('design:type', String)], NglFormElement.prototype, "error", void 0);
    NglFormElement = __decorate([core_1.Component({
      selector: 'ngl-form-element',
      template: "\n    <label *ngIf=\"!isCheckbox\" [attr.for]=\"uid\" class=\"slds-form-element__label\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><span [nglInternalOutlet]=\"_label\"></span></label><div class=\"slds-form-element__control\"><label *ngIf=\"isCheckbox\" class=\"slds-checkbox\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><ng-content select=\"input[type=checkbox]\"></ng-content><span class=\"slds-checkbox--faux\"></span><span [nglInternalOutlet]=\"_label\" class=\"slds-form-element__label\"></span></label><ng-content></ng-content></div><div *ngIf=\"error\" [id]=\"'error_' + uid\" class=\"slds-form-element__help\">{{error}}</div>\n  ",
      directives: [outlet_1.NglInternalOutlet],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      host: {'[class.slds-form-element]': 'true'},
      styles: [":host { display: block; }"]
    }), __metadata('design:paramtypes', [core_1.ChangeDetectorRef])], NglFormElement);
    return NglFormElement;
  }());
  exports.NglFormElement = NglFormElement;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/elements/required", ["@angular/core", "../../util/util", "./element"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../../util/util');
  var element_1 = $__require('./element');
  var NglFormElementRequired = (function() {
    function NglFormElementRequired(nglFormElement) {
      this.nglFormElement = nglFormElement;
    }
    Object.defineProperty(NglFormElementRequired.prototype, "required", {
      set: function(required) {
        if (!this.nglFormElement)
          return;
        this.nglFormElement.required = util_1.toBoolean(required);
        this.nglFormElement.detector.markForCheck();
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglFormElementRequired.prototype, "required", null);
    NglFormElementRequired = __decorate([core_1.Directive({selector: 'input[required], textarea[required], select[required]'}), __param(0, core_1.Optional()), __metadata('design:paramtypes', [element_1.NglFormElement])], NglFormElementRequired);
    return NglFormElementRequired;
  }());
  exports.NglFormElementRequired = NglFormElementRequired;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/groups/element", ["@angular/core", "./group-alt", "./input", "../form-label", "../../util/outlet"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var group_alt_1 = $__require('./group-alt');
  var input_1 = $__require('./input');
  var form_label_1 = $__require('../form-label');
  var outlet_1 = $__require('../../util/outlet');
  var NglFormGroupElement = (function() {
    function NglFormGroupElement(groupAlt, element, renderer) {
      this.groupAlt = groupAlt;
      this.element = element;
      this.renderer = renderer;
    }
    Object.defineProperty(NglFormGroupElement.prototype, "_label", {
      get: function() {
        return form_label_1.getFormLabel(this.label, this.labelTpl);
      },
      enumerable: true,
      configurable: true
    });
    NglFormGroupElement.prototype.ngAfterContentInit = function() {
      var type = this.contentEl.type;
      if (this.groupAlt) {
        this.groupAlt.type = type;
        this.renderer.setElementClass(this.element.nativeElement, 'slds-button', true);
        this.renderer.setElementClass(this.element.nativeElement, "slds-" + type + "--button", true);
      } else {
        this.renderer.setElementClass(this.element.nativeElement, "slds-" + type, true);
      }
    };
    __decorate([core_1.ContentChild(input_1.NglFormGroupCheckbox), __metadata('design:type', input_1.NglFormGroupCheckbox)], NglFormGroupElement.prototype, "contentEl", void 0);
    __decorate([core_1.Input('nglFormLabel'), __metadata('design:type', String)], NglFormGroupElement.prototype, "label", void 0);
    __decorate([core_1.ContentChild(form_label_1.NglFormLabelTemplate), __metadata('design:type', form_label_1.NglFormLabelTemplate)], NglFormGroupElement.prototype, "labelTpl", void 0);
    NglFormGroupElement = __decorate([core_1.Component({
      selector: 'label[ngl-form-group-element]',
      template: "\n    <ng-content></ng-content><span [ngClass]=\"'slds-' + contentEl?.type + '--faux'\"><span *ngIf=\"groupAlt\" [nglInternalOutlet]=\"_label\"></span></span><span *ngIf=\"!groupAlt\" [nglInternalOutlet]=\"_label\" class=\"slds-form-element__label\"></span>\n  ",
      directives: [outlet_1.NglInternalOutlet],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __param(0, core_1.Optional()), __metadata('design:paramtypes', [group_alt_1.NglFormGroupAlternate, core_1.ElementRef, core_1.Renderer])], NglFormGroupElement);
    return NglFormGroupElement;
  }());
  exports.NglFormGroupElement = NglFormGroupElement;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/groups/group", ["@angular/core", "../../util/util", "../form-label", "../../util/outlet"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../../util/util');
  var form_label_1 = $__require('../form-label');
  var outlet_1 = $__require('../../util/outlet');
  var NglFormGroup = (function() {
    function NglFormGroup() {
      this.uid = util_1.uniqueId('form_group');
    }
    Object.defineProperty(NglFormGroup.prototype, "_label", {
      get: function() {
        return form_label_1.getFormLabel(this.label, this.labelTpl);
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input('nglFormLabel'), __metadata('design:type', String)], NglFormGroup.prototype, "label", void 0);
    __decorate([core_1.ContentChild(form_label_1.NglFormLabelTemplate), __metadata('design:type', form_label_1.NglFormLabelTemplate)], NglFormGroup.prototype, "labelTpl", void 0);
    __decorate([core_1.HostBinding('class.slds-has-error'), core_1.Input('nglFormError'), __metadata('design:type', String)], NglFormGroup.prototype, "error", void 0);
    __decorate([core_1.Input('nglFormRequired'), __metadata('design:type', Boolean)], NglFormGroup.prototype, "required", void 0);
    NglFormGroup = __decorate([core_1.Component({
      selector: 'fieldset[ngl-form-group]',
      template: "\n    <legend class=\"slds-form-element__label\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><span [nglInternalOutlet]=\"_label\"></span></legend><div class=\"slds-form-element__control\"><ng-content></ng-content></div><div *ngIf=\"error\" class=\"slds-form-element__help\">{{error}}</div>\n  ",
      directives: [outlet_1.NglInternalOutlet],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      host: {'[class.slds-form-element]': 'true'}
    }), __metadata('design:paramtypes', [])], NglFormGroup);
    return NglFormGroup;
  }());
  exports.NglFormGroup = NglFormGroup;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/groups/group-alt", ["@angular/core", "./group", "../form-label", "../../util/outlet"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var group_1 = $__require('./group');
  var form_label_1 = $__require('../form-label');
  var outlet_1 = $__require('../../util/outlet');
  var NglFormGroupAlternate = (function(_super) {
    __extends(NglFormGroupAlternate, _super);
    function NglFormGroupAlternate() {
      _super.apply(this, arguments);
    }
    __decorate([core_1.Input('nglFormLabel'), __metadata('design:type', String)], NglFormGroupAlternate.prototype, "label", void 0);
    __decorate([core_1.ContentChild(form_label_1.NglFormLabelTemplate), __metadata('design:type', form_label_1.NglFormLabelTemplate)], NglFormGroupAlternate.prototype, "labelTpl", void 0);
    __decorate([core_1.HostBinding('class.slds-has-error'), core_1.Input('nglFormError'), __metadata('design:type', String)], NglFormGroupAlternate.prototype, "error", void 0);
    __decorate([core_1.Input('nglFormRequired'), __metadata('design:type', Boolean)], NglFormGroupAlternate.prototype, "required", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglFormGroupAlternate.prototype, "type", void 0);
    NglFormGroupAlternate = __decorate([core_1.Component({
      selector: 'fieldset[ngl-form-group-alt]',
      template: "\n    <legend class=\"slds-form-element__label\"><abbr *ngIf=\"required\" title=\"required\" class=\"slds-required\">*</abbr><span [nglInternalOutlet]=\"_label\"></span></legend><div class=\"slds-form-element__control\"><div [ngClass]=\"'slds-' + type + '--button-group'\"><ng-content></ng-content></div></div><div *ngIf=\"error\" class=\"slds-form-element__help\">{{error}}</div>\n  ",
      directives: [outlet_1.NglInternalOutlet],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      host: {'[class.slds-form-element]': 'true'}
    }), __metadata('design:paramtypes', [])], NglFormGroupAlternate);
    return NglFormGroupAlternate;
  }(group_1.NglFormGroup));
  exports.NglFormGroupAlternate = NglFormGroupAlternate;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/groups/input", ["@angular/core", "./group", "./group-alt"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var group_1 = $__require('./group');
  var group_alt_1 = $__require('./group-alt');
  var NglFormGroupCheckbox = (function() {
    function NglFormGroupCheckbox() {
      this.type = 'checkbox';
    }
    NglFormGroupCheckbox = __decorate([core_1.Directive({selector: 'input([type=checkbox])'}), __metadata('design:paramtypes', [])], NglFormGroupCheckbox);
    return NglFormGroupCheckbox;
  }());
  exports.NglFormGroupCheckbox = NglFormGroupCheckbox;
  var NglFormGroupRadio = (function() {
    function NglFormGroupRadio(formGroup, formGroupAlt) {
      this.type = 'radio';
      if (!formGroup && !formGroupAlt)
        return;
      this.name = "name_" + (formGroup || formGroupAlt).uid;
    }
    __decorate([core_1.HostBinding('attr.name'), __metadata('design:type', String)], NglFormGroupRadio.prototype, "name", void 0);
    NglFormGroupRadio = __decorate([core_1.Directive({
      selector: 'input([type=radio])',
      providers: [{
        provide: NglFormGroupCheckbox,
        useExisting: NglFormGroupRadio
      }]
    }), __param(0, core_1.Optional()), __param(1, core_1.Optional()), __metadata('design:paramtypes', [group_1.NglFormGroup, group_alt_1.NglFormGroupAlternate])], NglFormGroupRadio);
    return NglFormGroupRadio;
  }());
  exports.NglFormGroupRadio = NglFormGroupRadio;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/form-label", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglFormLabelTemplate = (function() {
    function NglFormLabelTemplate(templateRef) {
      this.templateRef = templateRef;
    }
    NglFormLabelTemplate = __decorate([core_1.Directive({selector: 'template[nglFormLabel]'}), __metadata('design:paramtypes', [core_1.TemplateRef])], NglFormLabelTemplate);
    return NglFormLabelTemplate;
  }());
  exports.NglFormLabelTemplate = NglFormLabelTemplate;
  function getFormLabel(label, labelTemplate) {
    if (label)
      return label;
    return labelTemplate ? labelTemplate.templateRef : '';
  }
  exports.getFormLabel = getFormLabel;
  return module.exports;
});

System.registerDynamic("ng-lightning/forms/form", ["./elements/element", "./elements/input", "./elements/required", "./groups/group", "./groups/group-alt", "./groups/element", "./groups/input", "./form-label"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var element_1 = $__require('./elements/element');
  var input_1 = $__require('./elements/input');
  var required_1 = $__require('./elements/required');
  var group_1 = $__require('./groups/group');
  var group_alt_1 = $__require('./groups/group-alt');
  var element_2 = $__require('./groups/element');
  var input_2 = $__require('./groups/input');
  var form_label_1 = $__require('./form-label');
  var element_3 = $__require('./elements/element');
  exports.NglFormElement = element_3.NglFormElement;
  var input_3 = $__require('./elements/input');
  exports.NglFormInput = input_3.NglFormInput;
  exports.NglFormTextarea = input_3.NglFormTextarea;
  exports.NglFormSelect = input_3.NglFormSelect;
  exports.NglFormCheckbox = input_3.NglFormCheckbox;
  var required_2 = $__require('./elements/required');
  exports.NglFormElementRequired = required_2.NglFormElementRequired;
  var group_2 = $__require('./groups/group');
  exports.NglFormGroup = group_2.NglFormGroup;
  var group_alt_2 = $__require('./groups/group-alt');
  exports.NglFormGroupAlternate = group_alt_2.NglFormGroupAlternate;
  var element_4 = $__require('./groups/element');
  exports.NglFormGroupElement = element_4.NglFormGroupElement;
  var input_4 = $__require('./groups/input');
  exports.NglFormGroupCheckbox = input_4.NglFormGroupCheckbox;
  exports.NglFormGroupRadio = input_4.NglFormGroupRadio;
  var form_label_2 = $__require('./form-label');
  exports.NglFormLabelTemplate = form_label_2.NglFormLabelTemplate;
  exports.NGL_FORM_DIRECTIVES = [element_1.NglFormElement, input_1.NglFormInput, input_1.NglFormTextarea, input_1.NglFormSelect, input_1.NglFormCheckbox, required_1.NglFormElementRequired, group_1.NglFormGroup, group_alt_1.NglFormGroupAlternate, element_2.NglFormGroupElement, input_2.NglFormGroupCheckbox, input_2.NglFormGroupRadio, form_label_1.NglFormLabelTemplate];
  return module.exports;
});

System.registerDynamic("ng-lightning/menus/dropdown-trigger", ["@angular/core", "./dropdown"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var dropdown_1 = $__require('./dropdown');
  var NglDropdownTrigger = (function() {
    function NglDropdownTrigger(element, renderer, dropdown) {
      this.element = element;
      this.renderer = renderer;
      this.dropdown = dropdown;
      this.parentFocusEventSubscription = this.dropdown.triggerFocusEventEmitter.subscribe(this.focus.bind(this));
    }
    NglDropdownTrigger.prototype.ngOnDestroy = function() {
      this.parentFocusEventSubscription.unsubscribe();
    };
    NglDropdownTrigger.prototype.toggleOpen = function() {
      this.dropdown.toggle();
    };
    NglDropdownTrigger.prototype.onKeyDownOpen = function($event) {
      $event.preventDefault();
      this.dropdown.toggle(true);
    };
    NglDropdownTrigger.prototype.focus = function() {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    };
    __decorate([core_1.HostListener('click'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], NglDropdownTrigger.prototype, "toggleOpen", null);
    __decorate([core_1.HostListener('keydown.arrowdown', ['$event']), __metadata('design:type', Function), __metadata('design:paramtypes', [Event]), __metadata('design:returntype', void 0)], NglDropdownTrigger.prototype, "onKeyDownOpen", null);
    NglDropdownTrigger = __decorate([core_1.Directive({
      selector: '[nglDropdownTrigger]',
      host: {
        'aria-haspopup': 'true',
        '[class.slds-picklist__label]': 'dropdown.isPicklist'
      }
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, dropdown_1.NglDropdown])], NglDropdownTrigger);
    return NglDropdownTrigger;
  }());
  exports.NglDropdownTrigger = NglDropdownTrigger;
  return module.exports;
});

System.registerDynamic("ng-lightning/menus/dropdown", ["@angular/core", "./dropdown-item", "../pick/pick", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var dropdown_item_1 = $__require('./dropdown-item');
  var pick_1 = $__require('../pick/pick');
  var util_1 = $__require('../util/util');
  var openEventEmitter = new core_1.EventEmitter();
  var NglDropdown = (function() {
    function NglDropdown(element, renderer, pick) {
      this.element = element;
      this.renderer = renderer;
      this.pick = pick;
      this.handlePageEvents = true;
      this.isOpenChange = new core_1.EventEmitter();
      this.triggerFocusEventEmitter = new core_1.EventEmitter();
      this.isPicklist = false;
      this.handleGlobalClickEvents = true;
      this._isOpen = false;
      this.clickEventUnsubscriber = null;
      this.isPicklist = this.pick && this.pick.element.nativeElement === this.element.nativeElement;
    }
    Object.defineProperty(NglDropdown.prototype, "isOpen", {
      get: function() {
        return this._isOpen;
      },
      set: function(isOpen) {
        var _this = this;
        isOpen = util_1.toBoolean(isOpen);
        if (isOpen) {
          this._subscribeToGlobalClickEvents();
          this.handleGlobalClickEvents = false;
          setTimeout(function() {
            return _this.handleGlobalClickEvents = true;
          });
        } else {
          this._unsubscribeFromGlobalClickEvents();
        }
        this._isOpen = isOpen;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglDropdown.prototype, "__isOpen", {
      get: function() {
        return this.isOpen;
      },
      enumerable: true,
      configurable: true
    });
    NglDropdown.prototype.onKeydownClose = function(eventName) {
      this.toggle(false);
      if (eventName === 'esc') {
        this.triggerFocusEventEmitter.emit(null);
      }
    };
    NglDropdown.prototype.onKeydownFocusNext = function($event, direction) {
      $event.preventDefault();
      this.focusItem(direction);
    };
    NglDropdown.prototype.ngOnInit = function() {
      this.openEventSubscription = openEventEmitter.subscribe(this.handleDropdownOpenEvent.bind(this));
    };
    NglDropdown.prototype.ngOnDestroy = function() {
      this.openEventSubscription.unsubscribe();
      this._unsubscribeFromGlobalClickEvents();
    };
    NglDropdown.prototype.toggle = function(toggle, focus) {
      if (toggle === void 0) {
        toggle = !this.isOpen;
      }
      if (focus === void 0) {
        focus = false;
      }
      if (toggle === this.isOpen) {
        return;
      }
      this.isOpenChange.emit(toggle);
      if (toggle) {
        openEventEmitter.emit(this);
        if (focus) {
          this.focusItem('next');
        }
      }
    };
    NglDropdown.prototype.handleGlobalClickEvent = function($event) {
      if (!this.handlePageEvents || !this.handleGlobalClickEvents || $event.target === this.element.nativeElement || this.element.nativeElement.contains($event.target)) {
        return;
      }
      this.toggle(false);
    };
    NglDropdown.prototype._subscribeToGlobalClickEvents = function() {
      if (this.handlePageEvents && this.clickEventUnsubscriber === null) {
        this.clickEventUnsubscriber = this.renderer.listenGlobal('document', 'click', this.handleGlobalClickEvent.bind(this));
      }
    };
    NglDropdown.prototype._unsubscribeFromGlobalClickEvents = function() {
      if (this.clickEventUnsubscriber !== null) {
        this.clickEventUnsubscriber();
        this.clickEventUnsubscriber = null;
      }
    };
    NglDropdown.prototype.focusItem = function(direction) {
      if (!this.items.length) {
        return;
      }
      var items = this.items.toArray();
      var activeElementIndex = items.findIndex(function(item) {
        return item.hasFocus();
      }) + (direction === 'next' ? 1 : -1);
      if (activeElementIndex === items.length || activeElementIndex < 0) {
        return;
      }
      this.renderer.invokeElementMethod(items[activeElementIndex], 'focus', []);
    };
    NglDropdown.prototype.handleDropdownOpenEvent = function(dropdown) {
      if (dropdown !== this) {
        this.toggle(false);
      }
    };
    __decorate([core_1.Input('open'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglDropdown.prototype, "isOpen", null);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglDropdown.prototype, "handlePageEvents", void 0);
    __decorate([core_1.ContentChildren(dropdown_item_1.NglDropdownItem, {descendants: true}), __metadata('design:type', core_1.QueryList)], NglDropdown.prototype, "items", void 0);
    __decorate([core_1.Output('openChange'), __metadata('design:type', Object)], NglDropdown.prototype, "isOpenChange", void 0);
    __decorate([core_1.HostBinding('class.slds-is-open'), core_1.HostBinding('attr.aria-expanded'), __metadata('design:type', Object)], NglDropdown.prototype, "__isOpen", null);
    __decorate([core_1.HostListener('keydown.esc', ['"esc"']), core_1.HostListener('keydown.tab', ['"tab"']), __metadata('design:type', Function), __metadata('design:paramtypes', [String]), __metadata('design:returntype', void 0)], NglDropdown.prototype, "onKeydownClose", null);
    __decorate([core_1.HostListener('keydown.arrowdown', ['$event', '"next"']), core_1.HostListener('keydown.arrowup', ['$event', '"previous"']), __metadata('design:type', Function), __metadata('design:paramtypes', [Event, Object]), __metadata('design:returntype', void 0)], NglDropdown.prototype, "onKeydownFocusNext", null);
    NglDropdown = __decorate([core_1.Directive({
      selector: '[nglDropdown]',
      host: {
        '[class.slds-dropdown-trigger]': 'true',
        '[class.slds-dropdown-trigger--click]': 'true',
        '[class.slds-picklist]': 'isPicklist'
      }
    }), __param(2, core_1.Optional()), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, pick_1.NglPick])], NglDropdown);
    return NglDropdown;
  }());
  exports.NglDropdown = NglDropdown;
  return module.exports;
});

System.registerDynamic("ng-lightning/menus/dropdown-item", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglDropdownItem = (function() {
    function NglDropdownItem(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.isFocused = false;
    }
    NglDropdownItem.prototype.onFocus = function() {
      this.isFocused = true;
    };
    NglDropdownItem.prototype.onBlur = function() {
      this.isFocused = false;
    };
    NglDropdownItem.prototype.hasFocus = function() {
      return this.isFocused;
    };
    NglDropdownItem.prototype.focus = function() {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    };
    __decorate([core_1.HostListener('focus'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], NglDropdownItem.prototype, "onFocus", null);
    __decorate([core_1.HostListener('blur'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], NglDropdownItem.prototype, "onBlur", null);
    NglDropdownItem = __decorate([core_1.Directive({
      selector: '[nglDropdownItem]',
      host: {'tabindex': '0'}
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglDropdownItem);
    return NglDropdownItem;
  }());
  exports.NglDropdownItem = NglDropdownItem;
  return module.exports;
});

System.registerDynamic("ng-lightning/modals/modal", ["@angular/core", "../util/util", "../buttons/button-icon", "../icons/icon"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var button_icon_1 = $__require('../buttons/button-icon');
  var icon_1 = $__require('../icons/icon');
  var NglModal = (function() {
    function NglModal(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.header = '';
      this.headingId = util_1.uniqueId('modal_header');
      this.open = false;
      this.openChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglModal.prototype, "_open", {
      set: function(_open) {
        var _this = this;
        _open = util_1.toBoolean(_open);
        if (_open === this.open)
          return;
        if (_open) {
          setTimeout(function() {
            return _this.focusFirst();
          });
        }
        this.open = _open;
      },
      enumerable: true,
      configurable: true
    });
    NglModal.prototype.close = function(event) {
      if (event === void 0) {
        event = false;
      }
      this.openChange.emit(event);
    };
    NglModal.prototype.focusFirst = function() {
      this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus', []);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], NglModal.prototype, "header", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglModal.prototype, "size", void 0);
    __decorate([core_1.Input('open'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglModal.prototype, "_open", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglModal.prototype, "openChange", void 0);
    NglModal = __decorate([core_1.Component({
      selector: 'ngl-modal',
      directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      template: "\n    <div *ngIf=\"open\" (click)=\"$event.stopPropagation()\" tabindex=\"0\" (keyup.esc)=\"close()\"><div [ngClass]=\"[size ? 'slds-modal--' + size : '']\" [attr.aria-hidden]=\"!open\" role=\"dialog\" [attr.aria-labelledby]=\"headingId\" class=\"slds-modal slds-fade-in-open\"><div class=\"slds-modal__container\"><div class=\"slds-modal__header\"><button type=\"button\" nglButtonIcon=\"inverse\" (click)=\"close()\" class=\"slds-modal__close\"><ngl-icon icon=\"close\" size=\"large\" alt=\"Close\"></ngl-icon></button><h2 [id]=\"headingId\" class=\"slds-text-heading--medium\">{{header}}</h2><ng-content select=\"[tagline]\"></ng-content></div><div class=\"slds-modal__content slds-p-around--medium\"><ng-content select=\"[body]\"></ng-content></div><div class=\"slds-modal__footer\"><ng-content select=\"button\"></ng-content></div></div></div><div tabindex=\"0\" (focus)=\"focusFirst()\"></div><div class=\"slds-backdrop slds-backdrop--open\"></div></div>\n  "
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglModal);
    return NglModal;
  }());
  exports.NglModal = NglModal;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/notifications/notification", ["@angular/core", "./notification-close", "../buttons/button-icon", "../icons/icon", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var notification_close_1 = $__require('./notification-close');
  var button_icon_1 = $__require('../buttons/button-icon');
  var icon_1 = $__require('../icons/icon');
  var util_1 = $__require('../util/util');
  var NglNotification = (function() {
    function NglNotification(element, renderer, notificationClose) {
      this.element = element;
      this.renderer = renderer;
      this.type = 'toast';
      this.closeEventEmitter = new core_1.EventEmitter();
      this.showClose = false;
      this.currentTimeout = null;
      this.showClose = !!notificationClose;
    }
    Object.defineProperty(NglNotification.prototype, "setSeverity", {
      set: function(severity) {
        this.severity = severity === 'info' ? null : severity;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglNotification.prototype, "timeout", {
      set: function(timeout) {
        var _this = this;
        this.clearTimeout();
        if (util_1.isInt(timeout) && timeout >= 0) {
          this.currentTimeout = setTimeout(function() {
            return _this.close('timeout');
          }, timeout);
        }
      },
      enumerable: true,
      configurable: true
    });
    NglNotification.prototype.ngOnChanges = function(changes) {
      var changedType = changes.type,
          changedSeverity = changes.setSeverity;
      if (changedType) {
        var previousValue = typeof(changedType.previousValue) === 'string' ? changedType.previousValue : '';
        util_1.replaceClass(this, "slds-notify--" + previousValue, "slds-notify--" + changedType.currentValue);
      }
      if (changedSeverity) {
        var previousValue = typeof(changedSeverity.previousValue) === 'string' ? changedSeverity.previousValue : '';
        util_1.replaceClass(this, "slds-theme--" + previousValue, changedSeverity.currentValue ? "slds-theme--" + changedSeverity.currentValue : null);
      }
    };
    NglNotification.prototype.close = function(reason, $event) {
      this.clearTimeout();
      if ($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
      this.closeEventEmitter.emit(reason);
    };
    NglNotification.prototype.clearTimeout = function() {
      if (this.currentTimeout !== null) {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = null;
      }
    };
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglNotification.prototype, "type", void 0);
    __decorate([core_1.Input('severity'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglNotification.prototype, "setSeverity", null);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglNotification.prototype, "assistiveText", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglNotification.prototype, "closeAssistiveText", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], NglNotification.prototype, "timeout", null);
    __decorate([core_1.Output('nglNotificationClose'), __metadata('design:type', Object)], NglNotification.prototype, "closeEventEmitter", void 0);
    NglNotification = __decorate([core_1.Component({
      selector: 'ngl-notification',
      template: "\n    <span class=\"slds-assistive-text\">{{assistiveText || severity || 'Info'}}</span><button *ngIf=\"showClose\" type=\"button\" nglButtonIcon=\"inverse\" (click)=\"close('button', $event)\" class=\"slds-notify__close\"><ngl-icon icon=\"close\"></ngl-icon><span class=\"slds-assistive-text\">{{closeAssistiveText || 'Close'}}</span></button><ng-content></ng-content>\n  ",
      directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon],
      host: {
        '[class.slds-notify]': 'true',
        'role': 'alert'
      },
      styles: [":host.slds-notify--alert {\n      display: block;\n    }"],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      exportAs: 'nglNotification'
    }), __param(2, core_1.Optional()), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, notification_close_1.NglNotificationClose])], NglNotification);
    return NglNotification;
  }());
  exports.NglNotification = NglNotification;
  return module.exports;
});

System.registerDynamic("ng-lightning/notifications/notification-close", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglNotificationClose = (function() {
    function NglNotificationClose() {}
    NglNotificationClose = __decorate([core_1.Directive({selector: '[nglNotificationClose]'}), __metadata('design:paramtypes', [])], NglNotificationClose);
    return NglNotificationClose;
  }());
  exports.NglNotificationClose = NglNotificationClose;
  return module.exports;
});

System.registerDynamic("ng-lightning/paginations/pagination", ["@angular/core", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var NglPagination = (function() {
    function NglPagination() {
      this.pages = [];
      this.pageChange = new core_1.EventEmitter();
      this.perPage = 10;
      this.limit = 0;
      this.boundaryNumbers = 0;
      this._boundaryLinks = false;
    }
    Object.defineProperty(NglPagination.prototype, "boundaryLinks", {
      get: function() {
        return this._boundaryLinks;
      },
      set: function(boundaryLinks) {
        this._boundaryLinks = util_1.toBoolean(boundaryLinks);
      },
      enumerable: true,
      configurable: true
    });
    NglPagination.prototype.hasPrevious = function() {
      return this.current > 1;
    };
    NglPagination.prototype.hasNext = function() {
      return this.current < this.totalPages;
    };
    NglPagination.prototype.goto = function(page) {
      if (page === this.current)
        return;
      this.pageChange.emit(+page);
    };
    NglPagination.prototype.ngOnChanges = function() {
      var _this = this;
      this.totalPages = Math.ceil(+this.total / +this.perPage);
      var _a = this.limits(),
          start = _a.start,
          end = _a.end;
      this.pages = this.getPageArray(start, end);
      if (this.boundaryNumbers > 0) {
        if (start > 1) {
          var preGap = this.getPageArray(1, Math.min(start - 1, this.boundaryNumbers));
          var lastGapNumber = +preGap[preGap.length - 1].number;
          if (lastGapNumber < start - 1) {
            this.pages.unshift(this.getGapPage(lastGapNumber, start));
          }
          (_b = this.pages).unshift.apply(_b, preGap);
        }
        if (end < this.totalPages) {
          var postGap = this.getPageArray(Math.max(this.totalPages - this.boundaryNumbers + 1, end + 1), this.totalPages);
          var firstGapNumber = +postGap[0].number;
          if (firstGapNumber > end + 1) {
            this.pages.push(this.getGapPage(end, firstGapNumber));
          }
          (_c = this.pages).push.apply(_c, postGap);
        }
      }
      if (this.current > this.totalPages) {
        setTimeout(function() {
          return _this.goto(_this.totalPages);
        });
      } else if (!this.current && this.totalPages > 0) {
        setTimeout(function() {
          return _this.goto(1);
        });
      }
      var _b,
          _c;
    };
    NglPagination.prototype.pageTrackBy = function(index, page) {
      return page.number;
    };
    Object.defineProperty(NglPagination.prototype, "start", {
      get: function() {
        return Math.max(1 + (+this.current - 1) * +this.perPage, 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglPagination.prototype, "end", {
      get: function() {
        return Math.min(this.start + (+this.perPage - 1), +this.total);
      },
      enumerable: true,
      configurable: true
    });
    NglPagination.prototype.getPageArray = function(start, end) {
      var _this = this;
      return Array.apply(null, {length: end - start + 1}).map(function(value, index) {
        return _this.getPage(start + index);
      });
    };
    NglPagination.prototype.getPage = function(number, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }
      return {
        number: number,
        disabled: disabled
      };
    };
    NglPagination.prototype.getGapPage = function(before, after) {
      var isConsecutive = before + 1 === after - 1;
      return this.getPage(isConsecutive ? before + 1 : '...', !isConsecutive);
    };
    NglPagination.prototype.limits = function() {
      var start = 1,
          end = this.totalPages;
      if (this.limit < 1)
        return {
          start: start,
          end: end
        };
      start = Math.max(+this.current - Math.floor(+this.limit / 2), 1);
      end = start + +this.limit - 1;
      if (end > this.totalPages) {
        end = this.totalPages;
        start = Math.max(end - +this.limit + 1, 1);
      }
      return {
        start: start,
        end: end
      };
    };
    __decorate([core_1.Input('page'), __metadata('design:type', Object)], NglPagination.prototype, "current", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglPagination.prototype, "pageChange", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglPagination.prototype, "total", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglPagination.prototype, "perPage", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglPagination.prototype, "limit", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], NglPagination.prototype, "boundaryNumbers", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglPagination.prototype, "boundaryLinks", null);
    NglPagination = __decorate([core_1.Component({
      selector: 'ngl-pagination',
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      template: "\n    <div role=\"group\" class=\"slds-button-group\"><button *ngIf=\"boundaryLinks\" [disabled]=\"!hasPrevious()\" (click)=\"goto(1)\" class=\"slds-button slds-button--neutral\">First</button><button [disabled]=\"!hasPrevious()\" (click)=\"goto(current - 1)\" class=\"slds-button slds-button--neutral\">Previous</button><button *ngFor=\"let page of pages; trackBy:pageTrackBy\" [class.slds-button--brand]=\"page.number === current\" (click)=\"goto(page.number)\" [disabled]=\"page.disabled\" class=\"slds-button slds-button--neutral\">{{page.number}}</button><button [disabled]=\"!hasNext()\" (click)=\"goto(current + 1)\" class=\"slds-button slds-button--neutral\">Next</button><button *ngIf=\"boundaryLinks\" [disabled]=\"!hasNext()\" (click)=\"goto(totalPages)\" class=\"slds-button slds-button--neutral\">Last</button></div>\n  ",
      exportAs: 'nglPagination'
    }), __metadata('design:paramtypes', [])], NglPagination);
    return NglPagination;
  }());
  exports.NglPagination = NglPagination;
  return module.exports;
});

System.registerDynamic("ng-lightning/pick/pick", ["@angular/core", "rxjs/Rx", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var Rx_1 = $__require('rxjs/Rx');
  var util_1 = $__require('../util/util');
  var NglPick = (function() {
    function NglPick(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.values = new Rx_1.BehaviorSubject(null);
      this.isMultiple = false;
      this.nglPickChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglPick.prototype, "setSelected", {
      set: function(selected) {
        this.selected = selected;
        this.ngAfterContentInit();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglPick.prototype, "setIsMultiple", {
      set: function(isMultiple) {
        this.isMultiple = util_1.toBoolean(isMultiple);
      },
      enumerable: true,
      configurable: true
    });
    NglPick.prototype.ngAfterContentInit = function() {
      this.values.next(this.selected);
    };
    NglPick.prototype.selectOption = function(value) {
      var next;
      if (this.isMultiple) {
        if (Array.isArray(this.selected)) {
          var index = this.selected.indexOf(value);
          next = index > -1 ? this.selected.slice(0, index).concat(this.selected.slice(index + 1)) : this.selected.concat([value]);
        } else {
          next = Object.assign({}, this.selected, (_a = {}, _a[value] = !this.selected[value], _a));
        }
      } else {
        next = value;
      }
      this.nglPickChange.emit(next);
      var _a;
    };
    NglPick.prototype.optionRemoved = function(value) {
      var _this = this;
      if (this.selected !== value)
        return;
      setTimeout(function() {
        return _this.nglPickChange.emit(undefined);
      });
    };
    __decorate([core_1.Input('nglPick'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglPick.prototype, "setSelected", null);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglPick.prototype, "nglPickActiveClass", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglPick.prototype, "nglPickChange", void 0);
    __decorate([core_1.Input('nglPickMultiple'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglPick.prototype, "setIsMultiple", null);
    NglPick = __decorate([core_1.Directive({selector: '[nglPick]'}), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglPick);
    return NglPick;
  }());
  exports.NglPick = NglPick;
  return module.exports;
});

System.registerDynamic("ng-lightning/pick/pick-option", ["@angular/core", "./pick"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var pick_1 = $__require('./pick');
  var NglPickOption = (function() {
    function NglPickOption(element, renderer, nglPick) {
      this.element = element;
      this.renderer = renderer;
      this.nglPick = nglPick;
      this._active = false;
    }
    Object.defineProperty(NglPickOption.prototype, "active", {
      get: function() {
        return this._active;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglPickOption.prototype, "setValue", {
      set: function(value) {
        this._value = value;
      },
      enumerable: true,
      configurable: true
    });
    NglPickOption.prototype.pick = function(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.nglPick.selectOption(this._value);
    };
    NglPickOption.prototype.ngOnInit = function() {
      var _this = this;
      this._subscription = this.nglPick.values.subscribe(function(value) {
        _this._active = _this._isActive(value);
        var activeClass = _this.nglPickActiveClass || _this.nglPick.nglPickActiveClass;
        if (activeClass) {
          _this.renderer.setElementClass(_this.element.nativeElement, activeClass, _this.active);
        }
      });
    };
    NglPickOption.prototype.ngOnDestroy = function() {
      this._subscription.unsubscribe();
      this.nglPick.optionRemoved(this._value);
    };
    NglPickOption.prototype._isActive = function(value) {
      if (this.nglPick.isMultiple) {
        return Array.isArray(value) ? value.indexOf(this._value) > -1 : !!value[this._value];
      } else {
        return this._value === value;
      }
    };
    __decorate([core_1.Input('nglPickOption'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglPickOption.prototype, "setValue", null);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglPickOption.prototype, "nglPickActiveClass", void 0);
    __decorate([core_1.HostListener('click'), core_1.HostListener('keydown.Space', ['$event']), core_1.HostListener('keydown.Enter', ['$event']), __metadata('design:type', Function), __metadata('design:paramtypes', [Event]), __metadata('design:returntype', void 0)], NglPickOption.prototype, "pick", null);
    NglPickOption = __decorate([core_1.Directive({
      selector: '[nglPickOption]',
      exportAs: 'nglPickOption',
      host: {'role': 'button'}
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, pick_1.NglPick])], NglPickOption);
    return NglPickOption;
  }());
  exports.NglPickOption = NglPickOption;
  return module.exports;
});

System.registerDynamic("ng-lightning/pills/pill-image", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglPillImage = (function() {
    function NglPillImage(element, renderer) {
      this.element = element;
      this.renderer = renderer;
    }
    NglPillImage.prototype.ngAfterContentInit = function() {
      this.renderer.setElementClass(this.element.nativeElement, 'slds-pill__icon', true);
      this.renderer.setElementClass(this.element.nativeElement, 'slds-avatar--medium', false);
    };
    NglPillImage = __decorate([core_1.Directive({selector: '[nglPillImage]'}), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglPillImage);
    return NglPillImage;
  }());
  exports.NglPillImage = NglPillImage;
  return module.exports;
});

System.registerDynamic("ng-lightning/pills/pill-link", ["@angular/core", "./pill"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var pill_1 = $__require('./pill');
  var NglPillLink = (function() {
    function NglPillLink(pill, element, renderer) {
      if (!pill)
        return;
      renderer.setElementClass(element.nativeElement, 'slds-pill__label', true);
      pill.unlinked = false;
    }
    NglPillLink = __decorate([core_1.Directive({selector: 'a'}), __param(0, core_1.Optional()), __metadata('design:paramtypes', [pill_1.NglPill, core_1.ElementRef, core_1.Renderer])], NglPillLink);
    return NglPillLink;
  }());
  exports.NglPillLink = NglPillLink;
  return module.exports;
});

System.registerDynamic("ng-lightning/pills/pill", ["@angular/core", "../buttons/button-icon", "../icons/icon"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var button_icon_1 = $__require('../buttons/button-icon');
  var icon_1 = $__require('../icons/icon');
  var NglPill = (function() {
    function NglPill(detector) {
      this.detector = detector;
      this.unlinked = true;
      this.nglPillRemove = new core_1.EventEmitter();
    }
    NglPill.prototype.remove = function() {
      this.nglPillRemove.emit(null);
    };
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglPill.prototype, "nglPillRemove", void 0);
    NglPill = __decorate([core_1.Component({
      selector: 'ngl-pill',
      template: "\n    <ng-content select=\"[nglPillImage]\"></ng-content><ng-content select=\"a\"></ng-content><span *ngIf=\"unlinked\" class=\"slds-pill__label\"><ng-content></ng-content></span><button *ngIf=\"removable\" type=\"button\" nglButtonIcon=\"bare\" (click)=\"remove()\" class=\"slds-pill__remove\"><ngl-icon icon=\"close\"></ngl-icon></button>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon],
      host: {'[class.slds-pill]': 'true'}
    }), __metadata('design:paramtypes', [core_1.ChangeDetectorRef])], NglPill);
    return NglPill;
  }());
  exports.NglPill = NglPill;
  return module.exports;
});

System.registerDynamic("ng-lightning/pills/pill-remove", ["@angular/core", "../util/util", "./pill"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var pill_1 = $__require('./pill');
  var NglPillRemove = (function() {
    function NglPillRemove(pill) {
      this.pill = pill;
    }
    Object.defineProperty(NglPillRemove.prototype, "nglPillRemovable", {
      set: function(removable) {
        this.pill.removable = util_1.toBoolean(removable);
        this.pill.detector.markForCheck();
      },
      enumerable: true,
      configurable: true
    });
    NglPillRemove.prototype.ngOnInit = function() {
      if (this.pill.removable === undefined) {
        this.pill.removable = true;
      }
    };
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglPillRemove.prototype, "nglPillRemovable", null);
    NglPillRemove = __decorate([core_1.Directive({selector: '[nglPillRemove]'}), __metadata('design:paramtypes', [pill_1.NglPill])], NglPillRemove);
    return NglPillRemove;
  }());
  exports.NglPillRemove = NglPillRemove;
  return module.exports;
});

System.registerDynamic("ng-lightning/popovers/popover", ["@angular/core", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var NglPopover = (function() {
    function NglPopover(element, renderer, changeDetector) {
      this.element = element;
      this.renderer = renderer;
      this.changeDetector = changeDetector;
      this.renderer.setElementClass(this.element.nativeElement, 'slds-popover', true);
      this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
    }
    Object.defineProperty(NglPopover.prototype, "theme", {
      set: function(theme) {
        util_1.replaceClass(this, "slds-theme--" + this._theme, theme ? "slds-theme--" + theme : '');
        this._theme = theme;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglPopover.prototype, "nglTooltip", {
      set: function(isTooltip) {
        this.renderer.setElementClass(this.element.nativeElement, 'slds-popover--tooltip', util_1.toBoolean(isTooltip));
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglPopover.prototype, "nubbin", {
      set: function(direction) {
        util_1.replaceClass(this, "slds-nubbin--" + this._nubbin, direction ? "slds-nubbin--" + direction : '');
        this._nubbin = direction;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglPopover.prototype, "theme", null);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglPopover.prototype, "nglTooltip", null);
    NglPopover = __decorate([core_1.Component({
      selector: 'ngl-popover',
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      template: "\n    <div class=\"slds-popover__body\"><ng-content></ng-content></div>\n  "
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.ChangeDetectorRef])], NglPopover);
    return NglPopover;
  }());
  exports.NglPopover = NglPopover;
  return module.exports;
});

System.registerDynamic("ng-lightning/popovers/placements", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var attachments = {
    top: {
      attachment: 'bottom center',
      offset: '10px 0',
      opposite: 'bottom'
    },
    left: {
      attachment: 'middle right',
      offset: '0 15px',
      opposite: 'right'
    },
    right: {
      attachment: 'middle left',
      offset: '0 -15px',
      opposite: 'left'
    },
    bottom: {
      attachment: 'top center',
      offset: '-10px 0',
      opposite: 'top'
    }
  };
  var PLACEMENTS = Object.keys(attachments).reduce(function(placements, direction) {
    var _a = attachments[direction],
        attachment = _a.attachment,
        offset = _a.offset,
        opposite = _a.opposite;
    var targetAttachment = attachments[opposite].attachment;
    placements[direction] = {
      opposite: opposite,
      attachment: attachment,
      targetAttachment: targetAttachment,
      offset: offset
    };
    return placements;
  }, {});
  function placement(direction) {
    return PLACEMENTS[direction];
  }
  exports.placement = placement;
  return module.exports;
});

System.registerDynamic("ng-lightning/popovers/trigger", ["@angular/core", "tether", "./popover", "./placements"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var Tether = $__require('tether');
  var popover_1 = $__require('./popover');
  var placements_1 = $__require('./placements');
  var NglPopoverTrigger = (function() {
    function NglPopoverTrigger(element, viewContainer, injector, renderer, componentFactoryResolver) {
      this.element = element;
      this.viewContainer = viewContainer;
      this.injector = injector;
      this.renderer = renderer;
      this.placement = 'top';
      this.popoverFactory = componentFactoryResolver.resolveComponentFactory(popover_1.NglPopover);
    }
    Object.defineProperty(NglPopoverTrigger.prototype, "nglPopoverPlacement", {
      set: function(_placement) {
        this.placement = _placement || 'top';
        this.setTether();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglPopoverTrigger.prototype, "nglPopoverTheme", {
      set: function(theme) {
        this.theme = theme;
        this.setPopover();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglPopoverTrigger.prototype, "nglOpen", {
      set: function(open) {
        if (open) {
          this.create();
        } else {
          this.destroy();
        }
      },
      enumerable: true,
      configurable: true
    });
    NglPopoverTrigger.prototype.ngOnDestroy = function() {
      this.destroy();
    };
    NglPopoverTrigger.prototype.setTether = function(create) {
      if (create === void 0) {
        create = false;
      }
      if (!this.tether && !create)
        return;
      var _a = placements_1.placement(this.placement),
          attachment = _a.attachment,
          targetAttachment = _a.targetAttachment,
          offset = _a.offset;
      var options = {
        element: this.popover.element.nativeElement,
        target: this.element.nativeElement,
        attachment: attachment,
        targetAttachment: targetAttachment,
        offset: offset
      };
      if (create) {
        this.tether = new Tether(options);
        this.tether.position();
      } else {
        this.tether.setOptions(options);
      }
      this.setPopover();
    };
    NglPopoverTrigger.prototype.setPopover = function() {
      if (!this.popover)
        return;
      var opposite = placements_1.placement(this.placement).opposite;
      this.popover.nubbin = opposite;
      this.popover.theme = this.theme;
      this.popover.nglTooltip = this.nglTooltip;
    };
    NglPopoverTrigger.prototype.create = function() {
      if (this.componentRef)
        return;
      this.componentRef = this.viewContainer.createComponent(this.popoverFactory, 0, this.injector, [this.projectableNodes]);
      this.popover = this.componentRef.instance;
      this.setTether(true);
      this.popover.changeDetector.markForCheck();
    };
    Object.defineProperty(NglPopoverTrigger.prototype, "projectableNodes", {
      get: function() {
        if (this.nglPopover instanceof core_1.TemplateRef) {
          var view = this.viewContainer.createEmbeddedView(this.nglPopover);
          return view.rootNodes;
        } else {
          return [this.renderer.createText(null, this.nglPopover)];
        }
      },
      enumerable: true,
      configurable: true
    });
    NglPopoverTrigger.prototype.destroy = function() {
      if (!this.componentRef)
        return;
      this.tether.destroy();
      this.tether = null;
      this.componentRef.destroy();
      this.componentRef = null;
      this.popover = null;
    };
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglPopoverTrigger.prototype, "nglPopover", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglPopoverTrigger.prototype, "nglPopoverPlacement", null);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglPopoverTrigger.prototype, "nglPopoverTheme", null);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglPopoverTrigger.prototype, "nglTooltip", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], NglPopoverTrigger.prototype, "nglOpen", null);
    NglPopoverTrigger = __decorate([core_1.Directive({selector: '[nglPopover]'}), __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.Injector, core_1.Renderer, core_1.ComponentFactoryResolver])], NglPopoverTrigger);
    return NglPopoverTrigger;
  }());
  exports.NglPopoverTrigger = NglPopoverTrigger;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/popovers/behavior", ["@angular/core", "./trigger"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var trigger_1 = $__require('./trigger');
  var NglPopoverBehavior = (function() {
    function NglPopoverBehavior(trigger) {
      this.trigger = trigger;
    }
    NglPopoverBehavior.prototype.onMouseOver = function() {
      this.trigger.nglOpen = true;
    };
    NglPopoverBehavior.prototype.onMouseOut = function() {
      this.trigger.nglOpen = false;
    };
    __decorate([core_1.HostListener('mouseenter'), core_1.HostListener('focus'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], NglPopoverBehavior.prototype, "onMouseOver", null);
    __decorate([core_1.HostListener('mouseleave'), core_1.HostListener('blur'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], NglPopoverBehavior.prototype, "onMouseOut", null);
    NglPopoverBehavior = __decorate([core_1.Directive({selector: '[nglPopover][nglPopoverBehavior]'}), __metadata('design:paramtypes', [trigger_1.NglPopoverTrigger])], NglPopoverBehavior);
    return NglPopoverBehavior;
  }());
  exports.NglPopoverBehavior = NglPopoverBehavior;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/popovers/directives", ["./popover", "./trigger", "./behavior"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var popover_1 = $__require('./popover');
  var trigger_1 = $__require('./trigger');
  var behavior_1 = $__require('./behavior');
  var popover_2 = $__require('./popover');
  exports.NglPopover = popover_2.NglPopover;
  var trigger_2 = $__require('./trigger');
  exports.NglPopoverTrigger = trigger_2.NglPopoverTrigger;
  var behavior_2 = $__require('./behavior');
  exports.NglPopoverBehavior = behavior_2.NglPopoverBehavior;
  exports.NGL_POPOVER_DIRECTIVES = [trigger_1.NglPopoverTrigger, behavior_1.NglPopoverBehavior];
  exports.NGL_POPOVER_PRECOMPILE = [popover_1.NglPopover];
  return module.exports;
});

System.registerDynamic("ng-lightning/ratings/rating", ["@angular/core", "../util/util", "../icons/icon"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var icon_1 = $__require('../icons/icon');
  var NglRating = (function() {
    function NglRating(element, renderer, max) {
      this.range = [];
      this.icon = 'favorite';
      this.max = 5;
      this.readonly = false;
      this.rateChange = new core_1.EventEmitter();
      this.hover = new core_1.EventEmitter();
      if (max)
        this.max = +max;
      this.range = Array.apply(null, {length: this.max}).map(function(value, index) {
        return index + 1;
      });
      var nativeElement = element.nativeElement;
      renderer.setElementAttribute(nativeElement, 'tabindex', '0');
      renderer.setElementAttribute(nativeElement, 'aria-valuemin', '0');
      renderer.setElementAttribute(nativeElement, 'aria-valuemax', this.max.toString());
    }
    Object.defineProperty(NglRating.prototype, "isReadonly", {
      set: function(readonly) {
        this.readonly = util_1.toBoolean(readonly);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglRating.prototype, "rate", {
      set: function(rate) {
        this.inputRate = rate;
        this.currentRate = rate;
      },
      enumerable: true,
      configurable: true
    });
    NglRating.prototype.update = function(value) {
      if (value < 1 || value > this.max || this.readonly || value === this.inputRate)
        return;
      this.rateChange.emit(value);
    };
    NglRating.prototype.enter = function(value) {
      if (this.readonly)
        return;
      this.currentRate = value;
      this.hover.emit(value);
    };
    NglRating.prototype.reset = function() {
      this.currentRate = this.inputRate;
    };
    NglRating.prototype.keyboardIncrease = function(evt) {
      evt.preventDefault();
      this.update(this.inputRate + 1);
    };
    NglRating.prototype.keyboardDecrease = function(evt) {
      evt.preventDefault();
      this.update(this.inputRate - 1);
    };
    Object.defineProperty(NglRating.prototype, "ariaValuenow", {
      get: function() {
        return this.inputRate;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglRating.prototype, "icon", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglRating.prototype, "size", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglRating.prototype, "isReadonly", null);
    __decorate([core_1.Input(), __metadata('design:type', Number), __metadata('design:paramtypes', [Number])], NglRating.prototype, "rate", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglRating.prototype, "rateChange", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglRating.prototype, "hover", void 0);
    __decorate([core_1.HostListener('mouseleave'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], NglRating.prototype, "reset", null);
    __decorate([core_1.HostListener('keydown.ArrowUp', ['$event']), core_1.HostListener('keydown.ArrowRight', ['$event']), __metadata('design:type', Function), __metadata('design:paramtypes', [KeyboardEvent]), __metadata('design:returntype', void 0)], NglRating.prototype, "keyboardIncrease", null);
    __decorate([core_1.HostListener('keydown.ArrowDown', ['$event']), core_1.HostListener('keydown.ArrowLeft', ['$event']), __metadata('design:type', Function), __metadata('design:paramtypes', [KeyboardEvent]), __metadata('design:returntype', void 0)], NglRating.prototype, "keyboardDecrease", null);
    __decorate([core_1.HostBinding('attr.aria-valuenow'), __metadata('design:type', Object)], NglRating.prototype, "ariaValuenow", null);
    NglRating = __decorate([core_1.Component({
      selector: 'ngl-rating',
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      directives: [icon_1.NglIcon],
      template: "\n    <ngl-icon [icon]=\"icon\" [size]=\"size\" *ngFor=\"let r of range\" [type]=\"r &lt;= currentRate ? 'warning' : 'default'\" (click)=\"update(r)\" (mouseenter)=\"enter(r)\"></ngl-icon>\n  ",
      host: {'style': 'white-space: nowrap;'}
    }), __param(2, core_1.Attribute('max')), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object])], NglRating);
    return NglRating;
  }());
  exports.NglRating = NglRating;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/buttons/button", ["@angular/core", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var NglButton = (function() {
    function NglButton(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.prefix = "slds-button--";
      this.renderer.setElementClass(this.element.nativeElement, 'slds-button', true);
    }
    Object.defineProperty(NglButton.prototype, "nglButton", {
      set: function(type) {
        util_1.replaceClass(this, "" + this.prefix + this._type, type ? "" + this.prefix + type : '');
        this._type = type;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglButton.prototype, "nglButton", null);
    NglButton = __decorate([core_1.Directive({selector: '[nglButton]'}), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglButton);
    return NglButton;
  }());
  exports.NglButton = NglButton;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/buttons/button-icon", ["@angular/core", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var DEFAULT_TYPE = 'border';
  var NglButtonIcon = (function() {
    function NglButtonIcon(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.renderer.setElementClass(this.element.nativeElement, 'slds-button', true);
      this.renderer.setElementClass(this.element.nativeElement, this.normalize(), true);
    }
    Object.defineProperty(NglButtonIcon.prototype, "nglButtonIcon", {
      set: function(type) {
        util_1.replaceClass(this, this.normalize(this._type), this.normalize(type));
        this._type = type;
      },
      enumerable: true,
      configurable: true
    });
    NglButtonIcon.prototype.normalize = function(type) {
      return "slds-button--icon" + (type === "''" ? '' : "-" + (type || DEFAULT_TYPE));
    };
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglButtonIcon.prototype, "nglButtonIcon", null);
    NglButtonIcon = __decorate([core_1.Directive({selector: '[nglButtonIcon]'}), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglButtonIcon);
    return NglButtonIcon;
  }());
  exports.NglButtonIcon = NglButtonIcon;
  return module.exports;
});

System.registerDynamic("ng-lightning/icons/icon", ["@angular/core", "../config/config", "../util/util", "../buttons/button", "../buttons/button-icon"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var config_1 = $__require('../config/config');
  var util_1 = $__require('../util/util');
  var button_1 = $__require('../buttons/button');
  var button_icon_1 = $__require('../buttons/button-icon');
  var NglIcon = (function() {
    function NglIcon(config, element, renderer, state, button, nglButton, nglButtonIcon) {
      this.config = config;
      this.element = element;
      this.renderer = renderer;
      this.state = state;
      this.nglButton = nglButton;
      this.nglButtonIcon = nglButtonIcon;
      this.category = 'utility';
      this.button = button === null ? !!(this.nglButton || this.nglButtonIcon) : util_1.toBoolean(button);
      if (state) {
        renderer.setElementClass(element.nativeElement, "slds-text-" + state, true);
      }
    }
    Object.defineProperty(NglIcon.prototype, "setIcon", {
      set: function(icon) {
        this._icon = icon;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglIcon.prototype, "icon", {
      get: function() {
        return this.category === 'custom' ? "custom" + this._icon : this._icon;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglIcon.prototype, "setCategory", {
      set: function(category) {
        this.category = category || 'utility';
      },
      enumerable: true,
      configurable: true
    });
    NglIcon.prototype.iconPath = function() {
      return this.config.svgPath + "/" + this.category + "-sprite/svg/symbols.svg#" + this.icon;
    };
    NglIcon.prototype.ngOnChanges = function() {
      var containerClass = this.containerClass;
      util_1.replaceClass(this, this._containerClass, containerClass);
      this._containerClass = containerClass;
    };
    NglIcon.prototype.svgClasses = function() {
      var classes = Array.isArray(this.svgClass) ? this.svgClass : [this.svgClass || ''];
      var prefix = this.button ? 'slds-button__icon' : 'slds-icon';
      classes.push(this.state ? 'slds-button__icon--stateful' : prefix);
      if (this.size) {
        classes.push(prefix + "--" + this.size);
      }
      if (this.type || (this.category === 'utility' && !this.button)) {
        classes.push("slds-icon-text-" + (this.type || 'default'));
      }
      if (this.align || this.state) {
        classes.push("slds-button__icon--" + (this.align || 'left'));
      }
      return classes;
    };
    Object.defineProperty(NglIcon.prototype, "containerClass", {
      get: function() {
        return /^(action|custom|standard)$/.test(this.category) ? ['slds-icon_container', ("slds-icon-" + this.category + "-" + this.icon.replace('_', '-'))] : null;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input('icon'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglIcon.prototype, "setIcon", null);
    __decorate([core_1.Input('category'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], NglIcon.prototype, "setCategory", null);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglIcon.prototype, "type", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglIcon.prototype, "align", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglIcon.prototype, "size", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], NglIcon.prototype, "alt", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglIcon.prototype, "svgClass", void 0);
    NglIcon = __decorate([core_1.Component({
      selector: 'ngl-icon, [ngl-icon]',
      template: "\n    <svg aria-hidden=\"true\" [ngClass]=\"svgClasses()\"><use [attr.xlink:href]=\"iconPath()\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"></use></svg><span *ngIf=\"alt\" class=\"slds-assistive-text\">{{alt}}</span><ng-content></ng-content>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __param(3, core_1.Attribute('state')), __param(4, core_1.Attribute('button')), __param(5, core_1.Optional()), __param(6, core_1.Optional()), __metadata('design:paramtypes', [config_1.NglConfig, core_1.ElementRef, core_1.Renderer, Object, Object, button_1.NglButton, button_icon_1.NglButtonIcon])], NglIcon);
    return NglIcon;
  }());
  exports.NglIcon = NglIcon;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/sections/section", ["@angular/core", "../buttons/button-icon", "../icons/icon"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var button_icon_1 = $__require('../buttons/button-icon');
  var icon_1 = $__require('../icons/icon');
  var NglSection = (function() {
    function NglSection(element, renderer) {
      this.element = element;
      this.renderer = renderer;
      this.open = false;
      this.openChange = new core_1.EventEmitter();
      renderer.setElementClass(element.nativeElement, 'slds-section', true);
    }
    NglSection.prototype.toggle = function(event) {
      event.preventDefault();
      this.openChange.emit(!this.open);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], NglSection.prototype, "title", void 0);
    __decorate([core_1.HostBinding('class.slds-is-open'), core_1.Input(), __metadata('design:type', Object)], NglSection.prototype, "open", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglSection.prototype, "openChange", void 0);
    NglSection = __decorate([core_1.Component({
      selector: 'ngl-section',
      changeDetection: core_1.ChangeDetectionStrategy.OnPush,
      template: "\n    <div class=\"slds-section__title\"><h3 (click)=\"toggle($event)\" class=\"slds-section__title-action\"><button type=\"button\" nglButtonIcon=\"container\"><ngl-icon icon=\"switch\"></ngl-icon></button>{{title}}</h3></div><div class=\"slds-section__content\"><ng-content></ng-content></div>\n  ",
      directives: [button_icon_1.NglButtonIcon, icon_1.NglIcon]
    }), __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])], NglSection);
    return NglSection;
  }());
  exports.NglSection = NglSection;
  return module.exports;
});

System.registerDynamic("ng-lightning/spinners/spinner", ["@angular/core", "../util/util"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var NglSpinner = (function() {
    function NglSpinner() {
      this.size = 'medium';
      this._container = false;
    }
    Object.defineProperty(NglSpinner.prototype, "hasContainer", {
      get: function() {
        return this._container;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglSpinner.prototype, "container", {
      set: function(container) {
        this._container = util_1.toBoolean(container);
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglSpinner.prototype, "size", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglSpinner.prototype, "type", void 0);
    __decorate([core_1.HostBinding('class.slds-spinner_container'), __metadata('design:type', Object)], NglSpinner.prototype, "hasContainer", null);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglSpinner.prototype, "container", null);
    NglSpinner = __decorate([core_1.Component({
      selector: 'ngl-spinner',
      template: "\n    <div [ngClass]=\"['slds-spinner--' + size, type ? 'slds-spinner--' + type : '']\" aria-hidden=\"false\" role=\"alert\" class=\"slds-spinner\"><div class=\"slds-spinner__dot-a\"></div><div class=\"slds-spinner__dot-b\"></div></div>\n  ",
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata('design:paramtypes', [])], NglSpinner);
    return NglSpinner;
  }());
  exports.NglSpinner = NglSpinner;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/util/util", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function toBoolean(value) {
    switch (value) {
      case '':
        return true;
      case 'false':
      case '0':
        return false;
      default:
        return !!value;
    }
  }
  exports.toBoolean = toBoolean;
  function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }
  exports.isInt = isInt;
  function isObject(value) {
    var type = typeof value;
    return !!value && (type === 'object' || type === 'function');
  }
  exports.isObject = isObject;
  var idCounter = 0;
  function uniqueId(prefix) {
    if (prefix === void 0) {
      prefix = 'uid';
    }
    return "ngl_" + prefix + "_" + ++idCounter;
  }
  exports.uniqueId = uniqueId;
  ;
  function replaceClass(instance, oldClass, newClass) {
    if (oldClass && oldClass !== newClass) {
      setClass(instance, oldClass, false);
    }
    if (newClass) {
      setClass(instance, newClass, true);
    }
  }
  exports.replaceClass = replaceClass;
  function setClass(instance, klasses, isAdd) {
    if (klasses) {
      (Array.isArray(klasses) ? klasses : [klasses]).forEach(function(k) {
        instance.renderer.setElementClass(instance.element.nativeElement, k, isAdd);
      });
    }
  }
  return module.exports;
});

System.registerDynamic("ng-lightning/util/outlet", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglInternalOutlet = (function() {
    function NglInternalOutlet() {}
    Object.defineProperty(NglInternalOutlet.prototype, "content", {
      get: function() {
        return this.nglInternalOutlet instanceof core_1.TemplateRef ? '' : this.nglInternalOutlet;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NglInternalOutlet.prototype, "contentTemplate", {
      get: function() {
        return this.nglInternalOutlet instanceof core_1.TemplateRef ? this.nglInternalOutlet : null;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglInternalOutlet.prototype, "nglInternalOutlet", void 0);
    NglInternalOutlet = __decorate([core_1.Component({
      selector: '[nglInternalOutlet]',
      template: "{{content}}<template [ngTemplateOutlet]=\"contentTemplate\"></template>"
    }), __metadata('design:paramtypes', [])], NglInternalOutlet);
    return NglInternalOutlet;
  }());
  exports.NglInternalOutlet = NglInternalOutlet;
  ;
  return module.exports;
});

System.registerDynamic("ng-lightning/tabs/tabs", ["@angular/core", "../util/util", "./tab", "../util/outlet"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var util_1 = $__require('../util/util');
  var tab_1 = $__require('./tab');
  var outlet_1 = $__require('../util/outlet');
  var NglTabs = (function() {
    function NglTabs() {
      this.type = 'default';
      this.selectedChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NglTabs.prototype, "setSelected", {
      set: function(selected) {
        if (selected === this.selected)
          return;
        this.selected = selected;
        if (!this.tabs)
          return;
        this.activate();
      },
      enumerable: true,
      configurable: true
    });
    NglTabs.prototype.ngAfterContentInit = function() {
      var _this = this;
      this.activate();
      if (!this.activeTab) {
        setTimeout(function() {
          return _this.select(_this.tabs.first);
        });
      }
    };
    NglTabs.prototype.select = function(tab) {
      this.selectedChange.emit(tab);
    };
    NglTabs.prototype.move = function(evt, moves) {
      evt.preventDefault();
      var tabs = this.tabs.toArray();
      var selectedIndex = tabs.indexOf(this.activeTab);
      this.select(tabs[(tabs.length + selectedIndex + moves) % tabs.length]);
    };
    NglTabs.prototype.activate = function() {
      var _this = this;
      this.activeTab = this.findTab();
      this.tabs.forEach(function(t) {
        return t.active = (t === _this.activeTab);
      });
    };
    NglTabs.prototype.findTab = function(value) {
      if (value === void 0) {
        value = this.selected;
      }
      if (value instanceof tab_1.NglTab) {
        return value;
      }
      if (util_1.isInt(value)) {
        return this.tabs.toArray()[+value];
      }
      return this.tabs.toArray().find(function(t) {
        return t.id && t.id === value;
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglTabs.prototype, "type", void 0);
    __decorate([core_1.ContentChildren(tab_1.NglTab), __metadata('design:type', core_1.QueryList)], NglTabs.prototype, "tabs", void 0);
    __decorate([core_1.Input('selected'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], NglTabs.prototype, "setSelected", null);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglTabs.prototype, "selectedChange", void 0);
    NglTabs = __decorate([core_1.Component({
      selector: 'ngl-tabs',
      template: "\n    <ul [ngClass]=\"'slds-tabs--' + type + '__nav'\" role=\"tablist\" (keydown.ArrowLeft)=\"move($event, -1)\" (keydown.ArrowRight)=\"move($event, 1)\"><li *ngFor=\"let tab of tabs\" [ngClass]=\"'slds-tabs--' + type + '__item'\" (click)=\"select(tab)\" [class.slds-active]=\"tab.active\" role=\"presentation\" class=\"slds-text-heading--label\"><a [nglInternalOutlet]=\"tab.heading\" [ngClass]=\"'slds-tabs--' + type + '__link'\" role=\"tab\" [attr.aria-selected]=\"tab.active\" [attr.tabindex]=\"tab.active ? 0 : 1\"></a></li></ul><div [ngClass]=\"'slds-tabs--' + type + '__content'\" role=\"tabpanel\"><template [ngTemplateOutlet]=\"activeTab?.templateRef\"></template></div>\n  ",
      directives: [outlet_1.NglInternalOutlet]
    }), __metadata('design:paramtypes', [])], NglTabs);
    return NglTabs;
  }());
  exports.NglTabs = NglTabs;
  return module.exports;
});

System.registerDynamic("ng-lightning/tabs/tab", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglTab = (function() {
    function NglTab(templateRef) {
      this.templateRef = templateRef;
      this.onActivate = new core_1.EventEmitter();
      this.onDeactivate = new core_1.EventEmitter();
      this._active = false;
    }
    Object.defineProperty(NglTab.prototype, "active", {
      get: function() {
        return this._active;
      },
      set: function(active) {
        if (active === this._active)
          return;
        this._active = active;
        if (active) {
          this.onActivate.emit(this);
        } else {
          this.onDeactivate.emit(this);
        }
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input('nglTabId'), __metadata('design:type', String)], NglTab.prototype, "id", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglTab.prototype, "heading", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglTab.prototype, "onActivate", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglTab.prototype, "onDeactivate", void 0);
    NglTab = __decorate([core_1.Directive({
      selector: 'template[ngl-tab]',
      exportAs: 'nglTab'
    }), __metadata('design:paramtypes', [core_1.TemplateRef])], NglTab);
    return NglTab;
  }());
  exports.NglTab = NglTab;
  return module.exports;
});

System.registerDynamic("ng-lightning/tabs/tab-verbose", ["@angular/core", "./tab"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var tab_1 = $__require('./tab');
  var NglTabHeading = (function() {
    function NglTabHeading(templateRef) {
      this.templateRef = templateRef;
    }
    NglTabHeading = __decorate([core_1.Directive({selector: 'template[ngl-tab-heading]'}), __metadata('design:paramtypes', [core_1.TemplateRef])], NglTabHeading);
    return NglTabHeading;
  }());
  exports.NglTabHeading = NglTabHeading;
  var NglTabContent = (function() {
    function NglTabContent(templateRef) {
      this.templateRef = templateRef;
    }
    NglTabContent = __decorate([core_1.Directive({selector: 'template[ngl-tab-content]'}), __metadata('design:paramtypes', [core_1.TemplateRef])], NglTabContent);
    return NglTabContent;
  }());
  exports.NglTabContent = NglTabContent;
  var NglTabVerbose = (function(_super) {
    __extends(NglTabVerbose, _super);
    function NglTabVerbose() {
      _super.apply(this, arguments);
      this.onActivate = new core_1.EventEmitter();
      this.onDeactivate = new core_1.EventEmitter();
    }
    NglTabVerbose.prototype.ngAfterContentInit = function() {
      if (this.headingTemplate) {
        this.heading = this.headingTemplate.templateRef;
      }
      this.templateRef = this.contentTemplate.templateRef;
    };
    __decorate([core_1.Input('nglTabId'), __metadata('design:type', String)], NglTabVerbose.prototype, "id", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], NglTabVerbose.prototype, "heading", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglTabVerbose.prototype, "onActivate", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], NglTabVerbose.prototype, "onDeactivate", void 0);
    __decorate([core_1.ContentChild(NglTabContent), __metadata('design:type', NglTabContent)], NglTabVerbose.prototype, "contentTemplate", void 0);
    __decorate([core_1.ContentChild(NglTabHeading), __metadata('design:type', NglTabHeading)], NglTabVerbose.prototype, "headingTemplate", void 0);
    NglTabVerbose = __decorate([core_1.Directive({
      selector: 'ngl-tab',
      providers: [{
        provide: tab_1.NglTab,
        useExisting: NglTabVerbose
      }]
    }), __metadata('design:paramtypes', [])], NglTabVerbose);
    return NglTabVerbose;
  }(tab_1.NglTab));
  exports.NglTabVerbose = NglTabVerbose;
  return module.exports;
});

System.registerDynamic("ng-lightning/config/config", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var NglConfig = (function() {
    function NglConfig() {
      this.svgPath = 'assets/icons';
    }
    return NglConfig;
  }());
  exports.NglConfig = NglConfig;
  var defaultConfig = new NglConfig();
  function provideNglConfig(config) {
    if (config === void 0) {
      config = {};
    }
    var useValue = Object.assign({}, defaultConfig, config || {});
    return [core_1.provide(NglConfig, {useValue: useValue})];
  }
  exports.provideNglConfig = provideNglConfig;
  return module.exports;
});

System.registerDynamic("ng-lightning/ng-lightning", ["ts-helpers", "./images/avatar", "./badges/badge", "./breadcrumbs/breadcrumbs", "./breadcrumbs/breadcrumb", "./buttons/button", "./buttons/button-state", "./buttons/button-icon", "./datatables/directives", "./icons/icon", "./lookups/directives", "./datepickers/datepicker", "./forms/form", "./menus/dropdown-trigger", "./menus/dropdown", "./menus/dropdown-item", "./modals/modal", "./notifications/notification", "./notifications/notification-close", "./paginations/pagination", "./pick/pick", "./pick/pick-option", "./pills/pill", "./pills/pill-image", "./pills/pill-link", "./pills/pill-remove", "./popovers/directives", "./ratings/rating", "./sections/section", "./spinners/spinner", "./tabs/tabs", "./tabs/tab", "./tabs/tab-verbose", "./config/config"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('ts-helpers');
  var avatar_1 = $__require('./images/avatar');
  var badge_1 = $__require('./badges/badge');
  var breadcrumbs_1 = $__require('./breadcrumbs/breadcrumbs');
  var breadcrumb_1 = $__require('./breadcrumbs/breadcrumb');
  var button_1 = $__require('./buttons/button');
  var button_state_1 = $__require('./buttons/button-state');
  var button_icon_1 = $__require('./buttons/button-icon');
  var directives_1 = $__require('./datatables/directives');
  var icon_1 = $__require('./icons/icon');
  var directives_2 = $__require('./lookups/directives');
  var datepicker_1 = $__require('./datepickers/datepicker');
  var form_1 = $__require('./forms/form');
  var dropdown_trigger_1 = $__require('./menus/dropdown-trigger');
  var dropdown_1 = $__require('./menus/dropdown');
  var dropdown_item_1 = $__require('./menus/dropdown-item');
  var modal_1 = $__require('./modals/modal');
  var notification_1 = $__require('./notifications/notification');
  var notification_close_1 = $__require('./notifications/notification-close');
  var pagination_1 = $__require('./paginations/pagination');
  var pick_1 = $__require('./pick/pick');
  var pick_option_1 = $__require('./pick/pick-option');
  var pill_1 = $__require('./pills/pill');
  var pill_image_1 = $__require('./pills/pill-image');
  var pill_link_1 = $__require('./pills/pill-link');
  var pill_remove_1 = $__require('./pills/pill-remove');
  var directives_3 = $__require('./popovers/directives');
  var rating_1 = $__require('./ratings/rating');
  var section_1 = $__require('./sections/section');
  var spinner_1 = $__require('./spinners/spinner');
  var tabs_1 = $__require('./tabs/tabs');
  var tab_1 = $__require('./tabs/tab');
  var tab_verbose_1 = $__require('./tabs/tab-verbose');
  var avatar_2 = $__require('./images/avatar');
  exports.NglAvatar = avatar_2.NglAvatar;
  var badge_2 = $__require('./badges/badge');
  exports.NglBadge = badge_2.NglBadge;
  var breadcrumbs_2 = $__require('./breadcrumbs/breadcrumbs');
  exports.NglBreadcrumbs = breadcrumbs_2.NglBreadcrumbs;
  var breadcrumb_2 = $__require('./breadcrumbs/breadcrumb');
  exports.NglBreadcrumb = breadcrumb_2.NglBreadcrumb;
  var button_2 = $__require('./buttons/button');
  exports.NglButton = button_2.NglButton;
  var button_state_2 = $__require('./buttons/button-state');
  exports.NglButtonState = button_state_2.NglButtonState;
  var button_icon_2 = $__require('./buttons/button-icon');
  exports.NglButtonIcon = button_icon_2.NglButtonIcon;
  var directives_4 = $__require('./datatables/directives');
  exports.NGL_DATATABLE_DIRECTIVES = directives_4.NGL_DATATABLE_DIRECTIVES;
  var icon_2 = $__require('./icons/icon');
  exports.NglIcon = icon_2.NglIcon;
  var directives_5 = $__require('./lookups/directives');
  exports.NGL_LOOKUP_DIRECTIVES = directives_5.NGL_LOOKUP_DIRECTIVES;
  var datepicker_2 = $__require('./datepickers/datepicker');
  exports.NglDatepicker = datepicker_2.NglDatepicker;
  var form_2 = $__require('./forms/form');
  exports.NGL_FORM_DIRECTIVES = form_2.NGL_FORM_DIRECTIVES;
  var dropdown_trigger_2 = $__require('./menus/dropdown-trigger');
  exports.NglDropdownTrigger = dropdown_trigger_2.NglDropdownTrigger;
  var dropdown_2 = $__require('./menus/dropdown');
  exports.NglDropdown = dropdown_2.NglDropdown;
  var dropdown_item_2 = $__require('./menus/dropdown-item');
  exports.NglDropdownItem = dropdown_item_2.NglDropdownItem;
  var modal_2 = $__require('./modals/modal');
  exports.NglModal = modal_2.NglModal;
  var notification_2 = $__require('./notifications/notification');
  exports.NglNotification = notification_2.NglNotification;
  var notification_close_2 = $__require('./notifications/notification-close');
  exports.NglNotificationClose = notification_close_2.NglNotificationClose;
  var pagination_2 = $__require('./paginations/pagination');
  exports.NglPagination = pagination_2.NglPagination;
  var pick_2 = $__require('./pick/pick');
  exports.NglPick = pick_2.NglPick;
  var pick_option_2 = $__require('./pick/pick-option');
  exports.NglPickOption = pick_option_2.NglPickOption;
  var pill_2 = $__require('./pills/pill');
  exports.NglPill = pill_2.NglPill;
  var pill_image_2 = $__require('./pills/pill-image');
  exports.NglPillImage = pill_image_2.NglPillImage;
  var pill_link_2 = $__require('./pills/pill-link');
  exports.NglPillLink = pill_link_2.NglPillLink;
  var pill_remove_2 = $__require('./pills/pill-remove');
  exports.NglPillRemove = pill_remove_2.NglPillRemove;
  var directives_6 = $__require('./popovers/directives');
  exports.NGL_POPOVER_DIRECTIVES = directives_6.NGL_POPOVER_DIRECTIVES;
  exports.NGL_POPOVER_PRECOMPILE = directives_6.NGL_POPOVER_PRECOMPILE;
  var rating_2 = $__require('./ratings/rating');
  exports.NglRating = rating_2.NglRating;
  var section_2 = $__require('./sections/section');
  exports.NglSection = section_2.NglSection;
  var spinner_2 = $__require('./spinners/spinner');
  exports.NglSpinner = spinner_2.NglSpinner;
  var tabs_2 = $__require('./tabs/tabs');
  exports.NglTabs = tabs_2.NglTabs;
  var tab_2 = $__require('./tabs/tab');
  exports.NglTab = tab_2.NglTab;
  var tab_verbose_2 = $__require('./tabs/tab-verbose');
  exports.NglTabVerbose = tab_verbose_2.NglTabVerbose;
  exports.NglTabContent = tab_verbose_2.NglTabContent;
  exports.NglTabHeading = tab_verbose_2.NglTabHeading;
  exports.NGL_DIRECTIVES = [avatar_1.NglAvatar, badge_1.NglBadge, breadcrumbs_1.NglBreadcrumbs, breadcrumb_1.NglBreadcrumb, button_1.NglButton, button_state_1.NglButtonState, button_icon_1.NglButtonIcon, directives_1.NGL_DATATABLE_DIRECTIVES, icon_1.NglIcon, directives_2.NGL_LOOKUP_DIRECTIVES, datepicker_1.NglDatepicker, form_1.NGL_FORM_DIRECTIVES, dropdown_trigger_1.NglDropdownTrigger, dropdown_1.NglDropdown, dropdown_item_1.NglDropdownItem, modal_1.NglModal, notification_1.NglNotification, notification_close_1.NglNotificationClose, pagination_1.NglPagination, pick_1.NglPick, pick_option_1.NglPickOption, pill_1.NglPill, pill_image_1.NglPillImage, pill_link_1.NglPillLink, pill_remove_1.NglPillRemove, directives_3.NGL_POPOVER_DIRECTIVES, rating_1.NglRating, section_1.NglSection, spinner_1.NglSpinner, tabs_1.NglTabs, tab_1.NglTab, tab_verbose_1.NglTabVerbose, tab_verbose_1.NglTabContent, tab_verbose_1.NglTabHeading];
  exports.NGL_PRECOMPILE = [directives_3.NGL_POPOVER_PRECOMPILE];
  var config_1 = $__require('./config/config');
  exports.provideNglConfig = config_1.provideNglConfig;
  return module.exports;
});
