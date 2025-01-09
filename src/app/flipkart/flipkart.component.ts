import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products: any = [
    { productname: 'pen', price: 10, rating: 3, freedelivery: 'true' },
    { productname: 'phone', price: 100, rating: 2, freedelivery: 'false' },
    { productname: 'shirt', price: 400, rating: 4, freedelivery: 'true' },
    { productname: 'cap', price: 200, rating: 5, freedelivery: 'false' },
    { productname: 'mobile', price: 300, rating: 2, freedelivery: 'true' },
    { productname: 'remote', price: 400, rating: 2.5, freedelivery: 'false' },
  ];

  delete(i:number){
    this.products.splice(i,1)
  }
  text:string="";

  search(){
    this.products=this.products.filter((product:any)=>product.productname.includes(this.text))
  }

  filter(){
    this.products=this.products.filter((product:any)=>product.freedelivery.includes(true))
  }

  sort1(){
    this.products.sort((a:any,b:any)=>a.price-b.price)
  }

  sort2(){
    this.products.sort((a:any,b:any)=>b.price-a.price)
  }

  sort3(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating)
  }

  sort4(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }

  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price-(product.price/2);
      return product;
    })
  }

  charges(){
    this.products=this.products.filter((product:any)=>product.freedelivery.includes(false));
      console.log(this.products);
    this.products=this.products.map((product:any)=>{
      product.price=product.price+20;
      return product;
  })
  }

  total1(){
    let total=this.products.reduce((sum:any,product:any)=>sum+product.price,0)
    alert(total)
  }
  
  total2(){
    let total=this.products.reduce((sum:any,product:any)=>this.products.length)
    alert(total)
    
  }

  name:string="";
  price:number=0;
  rating:number=0;
  yes:boolean=true;
  
  freedelivery:string='';

  add(){
    let product={
      productname:this.name,
      price:this.price,
      rating:this.rating,
      freedelivery:this.freedelivery
    };
    this.products.unshift(product);
  }
}