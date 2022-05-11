import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  rezult: string[];
  constructor(public navCtrl: NavController) {}
  ras(nn: string) {
    let n;
    this.rezult = new Array();
    n = parseInt(nn);
    for (let i = 1; i <= n; i++) {
      let str = "";
      if (i % 3 == 0) str = "Fizz";
      if (i % 5 == 0) str += "Buzz";
      if (str == "") str = i.toFixed(0);
      this.rezult.push(str);
    }
    //Рішення від Максима
    //Виведення в консоль
    const getWord = num =>
      (num % 3 ? "" : "Fizz") + (num % 5 ? "" : "Buzz") || num;

    Array.from(Array(100).keys()).forEach(counter => {
      console.log(getWord(counter));
    });
  }
}
