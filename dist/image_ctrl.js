'use strict';

System.register(['moment', 'jquery', 'lodash', 'app/core/utils/kbn', 'app/core/config', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var moment, $, _, kbn, config, PanelCtrl, _createClass, ImageCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_moment) {
      moment = _moment.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_appCoreUtilsKbn) {
      kbn = _appCoreUtilsKbn.default;
    }, function (_appCoreConfig) {
      config = _appCoreConfig.default;
    }, function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('ImageCtrl', ImageCtrl = function (_PanelCtrl) {
        _inherits(ImageCtrl, _PanelCtrl);

        function ImageCtrl($scope, $injector) {
          _classCallCheck(this, ImageCtrl);

          var _this = _possibleConstructorReturn(this, (ImageCtrl.__proto__ || Object.getPrototypeOf(ImageCtrl)).call(this, $scope, $injector));

          var panelDefaults = {
            legend: {
              show: true, // disable/enable legend
              values: true
            },
            imageWidth: 100,
            imageHeight: 100,
            fontSize: '25px',
            fontWeight: '10px',
            font: { family: 'Myriad Set Pro, Helvetica Neue, Helvetica, Arial, sans-serif' },
            statData: {},
            message: "",
            image: "Default.png",
            images: ['BankOne.png', 'BankTwo.png', 'BankThree.png', 'MoneyBag.png', 'PiggyBank.png', 'multiplecard.png', 'card.png', 'Default.png'],
            text: {
              title: '',
              name: '',
              subText: ''
            }
          };
          _.defaults(_this.panel, panelDefaults);
          _.defaults(_this.panel.legend, panelDefaults.legend);
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          _this.events.on('panel-initialized', _this.render.bind(_this));

          return _this;
        }

        _createClass(ImageCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/grafana-image-panel/editor.html', 2);
          }
        }, {
          key: 'addImageToList',
          value: function addImageToList(image) {
            //adds image to list of images if not in list
            var alreadyExists = false;
            this.panel.images.forEach(function (img) {
              if (img === image) {
                alreadyExists = true;
              }
            });
            if (!alreadyExists) {
              this.panel.images.push(image);
            }
          }
        }, {
          key: 'removeImageFromList',
          value: function removeImageFromList(image) {
            //deletes image from list
            for (var i = 0; i < this.panel.images.length; i++) {
              if (this.panel.images[i] === this.panel.image) {
                this.panel.images.splice(i, 1);
                break;
              }
            }
          }
        }, {
          key: 'link',
          value: function link(scope, elem) {
            var _this2 = this;

            this.events.on('render', function () {

              var $panelContainer = elem.find('.panel-container');
              console.log(_this2.height);
              if (_this2.panel.bgColor) {
                $panelContainer.css('background-color', _this2.panel.bgColor);
              } else {
                $panelContainer.css('background-color', '');
              }
            });
          }
        }]);

        return ImageCtrl;
      }(PanelCtrl));

      _export('ImageCtrl', ImageCtrl);

      ImageCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=image_ctrl.js.map
