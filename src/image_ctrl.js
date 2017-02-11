import moment from 'moment';

import $ from 'jquery';
import _ from 'lodash';

import kbn from 'app/core/utils/kbn';
import config from 'app/core/config';
import {PanelCtrl} from 'app/plugins/sdk';

export class ImageCtrl extends PanelCtrl {
  constructor($scope,$injector){
    super($scope,$injector);


    const panelDefaults = {
      legend: {
        show: true, // disable/enable legend
        values: true
      },
      imageWidth:100,
      imageHeight:100,
      fontSize: '25px',
      fontWeight: '10px',
      font: { family: 'Myriad Set Pro, Helvetica Neue, Helvetica, Arial, sans-serif' },
      statData:{},
      message:"",
      image:"Default.png",
      images:[
        'BankOne.png',
        'BankTwo.png',
        'BankThree.png',
        'MoneyBag.png',
        'PiggyBank.png',
        'multiplecard.png',
        'card.png',
        'Default.png'
      ],
      text:{
        title:'',
        name:'',
        subText:''
      }
    }
    _.defaults(this.panel, panelDefaults);
    _.defaults(this.panel.legend, panelDefaults.legend);
    this.events.on('init-edit-mode',this.onInitEditMode.bind(this));
    this.events.on('panel-initialized', this.render.bind(this));


  }
  onInitEditMode() {
    this.addEditorTab('Options','public/plugins/grafana-image-panel/editor.html',2);
  }

  // increaseSize(){
  //   this.panel.imageWidth += 10;
  //   this.panel.imageHeight += 10;
  // }
  //
  // decreaseSize(){
  //   this.panel.imageWidth -= 10;
  //   this.panel.imageHeight -= 10;
  // }

  addImageToList(image){
    //adds image to list of images if not in list
    var alreadyExists = false;
    this.panel.images.forEach(function(img){
      if(img === image){
        alreadyExists = true;
      }
    })
    if(!alreadyExists){
      this.panel.images.push(image);
    }
  }

  removeImageFromList(image){
    //deletes image from list
    for(var i = 0; i < this.panel.images.length;i++){
      if(this.panel.images[i] === this.panel.image){
        this.panel.images.splice(i,1);
        break;
      }
    }
  }

  link(scope, elem) {
    this.events.on('render', () => {

      const $panelContainer = elem.find('.panel-container');
      console.log(this.height)
      if (this.panel.bgColor) {
        $panelContainer.css('background-color', this.panel.bgColor);
      } else {
        $panelContainer.css('background-color', '');
      }
     });

  }
}

ImageCtrl.templateUrl = 'module.html';
