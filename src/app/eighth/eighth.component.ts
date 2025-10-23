import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eighth',
  templateUrl: './eighth.component.html',
  styleUrls: ['./eighth.component.css']
})
export class EighthComponent implements OnInit {
  public selected: any;
  public countrynames:any;
  public newscategery:any;


  public title0:any;
  public content0:any;
  public url0:any;
  public urlToImage0:any;
  public description0: any;

  public title1:any;
  public content1:any;
  public url1:any;
  public urlToImage1:any;
  public description1: any;

  public title2:any;
  public content2:any;
  public url2:any;
  public urlToImage2:any;
  public description2: any;

  public title3:any;
  public content3:any;
  public url3:any;
  public urlToImage3:any;
  public description3: any;

  public title4:any;
  public content4:any;
  public url4:any;
  public urlToImage4:any;
  public description4: any;

  public title5:any;
  public content5:any;
  public url5:any;
  public urlToImage5:any;
  public description5: any;

  public title6:any;
  public content6:any;
  public url6:any;
  public urlToImage6:any;
  public description6: any;

  public title7:any;
  public content7:any;
  public url7:any;
  public urlToImage7:any;
  public description7: any;

  public title8:any;
  public content8:any;
  public url8:any;
  public urlToImage8:any;
  public description8: any;

  public title9:any;
  public content9:any;
  public url9:any;
  public urlToImage9:any;
  public description9: any;

  public title10:any;
  public content10:any;
  public url10:any;
  public urlToImage10:any;
  public description10: any;

  public title11:any;
  public content11:any;
  public url11:any;
  public urlToImage11:any;
  public description11: any;

  constructor(public rout:Router,
    public http:HttpClient) { }
  ngOnInit(): void {
    this.validate();

  };

  validate(){
    // 54885441e126414db629fe96bef62f31
  
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${this.countrynames}&category=${this.newscategery}&apiKey=54885441e126414db629fe96bef62f31`).subscribe(
      // http://feeds.bbci.co.uk/news/world/europe/rss.xml
      // this.http.get<any>(`https://saurav.tech/NewsAPI/top-headlines/category/${this.newscategery}/${this.countrynames}.json`).subscribe(
      (res:any)=>{
          // console.log(res)
          // console.log(res.articles[0].title)
          // console.log(res.articles[0].content)
          // console.log(res.articles[0].url)
          // console.log(res.articles[0].description)
          // console.log(res.articles[0].urlToImage)
          this.title0=res.articles[0].title;
          this.content0=res.articles[0].content;
          this.url0=res.articles[0].url;
          this.urlToImage0=res.articles[0].urlToImage;
          this.description0=res.articles[0].description;

          // console.log(res)
          // console.log(res.articles[1].title)
          // console.log(res.articles[1].content)
          // console.log(res.articles[1].url)
          // console.log(res.articles[1].description)
          // console.log(res.articles[1].urlToImage)
          this.title1=res.articles[1].title;
          this.content1=res.articles[1].content;
          this.url1=res.articles[1].url;
          this.urlToImage1=res.articles[1].urlToImage;
          this.description1=res.articles[1].description;

          // console.log(res)
          // console.log(res.articles[2].title)
          // console.log(res.articles[2].content)
          // console.log(res.articles[2].url)
          // console.log(res.articles[2].description)
          // console.log(res.articles[2].urlToImage)
          this.title2=res.articles[2].title;
          this.content2=res.articles[2].content;
          this.url2=res.articles[2].url;
          this.urlToImage2=res.articles[2].urlToImage;
          this.description2=res.articles[2].description;

          // console.log(res)
          // console.log(res.articles[3].title)
          // console.log(res.articles[3].content)
          // console.log(res.articles[3].url)
          // console.log(res.articles[3].description)
          // console.log(res.articles[3].urlToImage)
          this.title3=res.articles[3].title;
          this.content3=res.articles[3].content;
          this.url3=res.articles[3].url;
          this.urlToImage3=res.articles[3].urlToImage;
          this.description3=res.articles[3].description;

          // console.log(res)
          // console.log(res.articles[4].title)
          // console.log(res.articles[4].content)
          // console.log(res.articles[4].url)
          // console.log(res.articles[4].description)
          // console.log(res.articles[4].urlToImage)
          this.title4=res.articles[4].title;
          this.content4=res.articles[4].content;
          this.url4=res.articles[4].url;
          this.urlToImage4=res.articles[4].urlToImage;
          this.description4=res.articles[4].description;

          // console.log(res)
          // console.log(res.articles[5].title)
          // console.log(res.articles[5].content)
          // console.log(res.articles[5].url)
          // console.log(res.articles[5].description)
          // console.log(res.articles[5].urlToImage)
          this.title5=res.articles[5].title;
          this.content5=res.articles[5].content;
          this.url5=res.articles[5].url;
          this.urlToImage5=res.articles[5].urlToImage;
          this.description5=res.articles[5].description;

          // console.log(res)
          // console.log(res.articles[6].title)
          // console.log(res.articles[6].content)
          // console.log(res.articles[6].url)
          // console.log(res.articles[6].description)
          // console.log(res.articles[6].urlToImage)
          this.title6=res.articles[6].title;
          this.content6=res.articles[6].content;
          this.url6=res.articles[6].url;
          this.urlToImage6=res.articles[6].urlToImage;
          this.description6=res.articles[6].description;

          // console.log(res)
          // console.log(res.articles[7].title)
          // console.log(res.articles[7].content)
          // console.log(res.articles[7].url)
          // console.log(res.articles[7].description)
          // console.log(res.articles[7].urlToImage)
          this.title7=res.articles[7].title;
          this.content7=res.articles[7].content;
          this.url7=res.articles[7].url;
          this.urlToImage7=res.articles[7].urlToImage;
          this.description7=res.articles[7].description;   

          // console.log(res)
          // console.log(res.articles[8].title)
          // console.log(res.articles[8].content)
          // console.log(res.articles[8].url)
          // console.log(res.articles[8].description)
          // console.log(res.articles[8].urlToImage)
          this.title8=res.articles[8].title;
          this.content8=res.articles[8].content;
          this.url8=res.articles[8].url;
          this.urlToImage8=res.articles[8].urlToImage;
          this.description8=res.articles[8].description;

          // console.log(res)
          // console.log(res.articles[9].title)
          // console.log(res.articles[9].content)
          // console.log(res.articles[9].url)
          // console.log(res.articles[9].description)
          // console.log(res.articles[9].urlToImage)
          this.title9=res.articles[9].title;
          this.content9=res.articles[9].content;
          this.url9=res.articles[9].url;
          this.urlToImage9=res.articles[9].urlToImage;
          this.description9=res.articles[9].description;

          // console.log(res)
          // console.log(res.articles[10].title)
          // console.log(res.articles[10].content)
          // console.log(res.articles[10].url)
          // console.log(res.articles[10].description)
          // console.log(res.articles[10].urlToImage)
          this.title10=res.articles[10].title;
          this.content10=res.articles[10].content;
          this.url10=res.articles[10].url;
          this.urlToImage10=res.articles[10].urlToImage;
          this.description10=res.articles[10].description;
          // console.log(res)
          // console.log(res.articles[11].title)
          // console.log(res.articles[11].content)
          // console.log(res.articles[11].url)
          // console.log(res.articles[11].description)
          // console.log(res.articles[11].urlToImage)
          this.title11=res.articles[11].title;
          this.content11=res.articles[11].content;
          this.url11=res.articles[11].url;
          this.urlToImage11=res.articles[11].urlToImage;
          this.description11=res.articles[11].description;
          if(res) { 
            // console.log("it is ok")
              
            }else{
              // console.log("not ok")
         
            }
          })
  };

value(wow:any){
  this.selected=wow.target.value;
  }
  public countryname(cname:any){
    this.countrynames=cname.target.value
    // console.log(this.countrynames)

  }
  public newstypes(ncategery:any){
    this.newscategery=ncategery.target.value
    // console.log(this.newscategery)
  }
  public img0() {
    window.open("this.urlToImage0","_top");
  };
  public imge1() {
    window.open("this.urlToImage1","_top");
   };
  public img2() {
    window.open("this.urlToImage2","_top");
   };
  public img3() {
    window.open("this.urlToImage3","_top");
   };
  public img4() {
    window.open("this.urlToImage4","_top");
   };
   public img5() {
    window.open("this.urlToImage5","_top");
   };
  public img6() {
    window.open("this.urlToImage6","_top");
   };
   public img7() {
    window.open("this.urlToImage7","_top");
   };
  public img8() {
    window.open("this.urlToImage8","_top");
   };
   public img9() {
    window.open("this.urlToImage9","_top");
   };
   public img10() {
    window.open("this.urlToImage10","_top");
   };
   public img11() {
    window.open("this.urlToImage11","_top");
   };
}
