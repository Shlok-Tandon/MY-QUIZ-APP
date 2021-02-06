class Form {
  constructor() {
     this.title = createElement('h2');
     this.input1 = createInput("ENTER NAME");
     this.input2 = createInput("ENTER OPTION NUMBER")
     this.button = createButton("SUBMIT");
     this.question = createElement('question');
     this.option1 = createElement('o1');
     this.option2 = createElement('o2');
     this.option3 = createElement('o3');
     this.option4 = createElement('o4');
    }

  display(){
    
    this.title.html("MY QUIZ GAME");
    this.title.position(520, 0);
    this.question.html("QUESTION :- TWO DUCKS IN FRONT OF A DUCK AND TWO DUCKS BEHIND A DUCK AND ONE DUCK IN MIDDLE. HOW MANY DUCKS ARE THERE")
    this.question.position(50,100)
    this.option1.html("1) 3");
    this.option1.position(50,170);
    this.option2.html("2) 5");
    this.option2.position(50,200);
    this.option3.html("3) 2");
    this.option3.position(50,230);
    this.option4.html("4) CAN'T BE DETERMINED");
    this.option4.position(50,260);
    this.input1.position(130, 400);
    this.input2.position(340,400);
    this.button.position(550, 400);

    this.button.mousePressed(()=>{
     
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
     
      });

  }


  play() {
      
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.title.html("RESULTS");
      backgroundImage("yellow");
      
  }
}
