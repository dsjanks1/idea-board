import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { trigger, transition, style, animate } from '@angular/animations';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'
import * as _ from 'underscore';


let myMoment: moment.Moment = moment();
let currentDate = '';
let newIdea = [{title: String}, {description: String}, {dateAddedUpdated:String}];


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ height: 0, opacity: 0 }),
				animate('1s ease-out', style({ height: 150, opacity: 1 }))
			]),
			transition(':leave', [
				style({ height: 300, opacity: 1 }),
				animate('1s ease-in', style({ height: 0, opacity: 0 }))
			])
		])
	]
})



export class BoardComponent implements OnInit {
 
   
  ideaTitle
  ideaDesciption
  
  ideas = [{
    id: 1,
    title: 'My Idea 1',
    description: 'rgfrgwfweffqefwefef',
    createdUpdatedTime : ''
  },
  {
    id: 2,
    title: 'My Idea 2',
    description: 'rgfrgwfweffqefwefef',
    createdUpdatedTime : ''
  },
  {
    id: 3,
    title: 'My Idea 3',
    description: 'rgfrgwfweffqefwefef',
    createdUpdatedTime : ''
  },
  { id: 4,
    title: 'My Idea 4',
    description: 'rgfrgwfweffqefwefef',
    createdUpdatedTime : ''
  }
]

  a = new Date('1/1/2016'); 
  closeResult: string;


  addIdea(){
  
    this.ideas.push({'id': 0,'title' :this.ideaTitle, 'description': this.ideaDesciption, 'createdUpdatedTime':myMoment.format()})

    console.log(this.ideas);

  }


 
  constructor(private modalService: NgbModal) {


  }

  ngOnInit() {


  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

}
