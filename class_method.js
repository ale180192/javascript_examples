class Point{
  
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Rectangulo{
  constructor(p1, p2, p3, p4){
    this.load_data_from_ajax = this.load_data_from_ajax.bind(this);
  }
   load_data_from_ajax(data){
    console.log('call load_data_from_ajax');
    this.p1 = new Point(data.x, data.y);
    this.p2 = new Point(data.x, data.y);
    this.p3 = new Point(data.x, data.y);
    this.p4 = new Point(data.x, data.y);
      return this;
  }
}
console.log('****************************************************************************')
console.log('****************************************************************************')
mypoint = new Point(5, 3);
rect = new Rectangulo(mypoint, mypoint, mypoint, mypoint);
rect = rect.load_data_from_ajax(mypoint);
console.log(rect.p1.x);
