const app = new Vue({

  el:'#app',
  data:{
    counterImg: 0,
    images: [
      'assets/img/().jpg',
      'assets/img/agaetis-byrjun.jpg',
      'assets/img/kveikur.jpg',
      'assets/img/takk.jpg'
    ],
  },
  methods:{
    prevImg(){
      this.counterImg--;
      if(this.counterImg < 0) this.counterImg = this.images.length - 1;
    },
    nextImg(){
      this.counterImg++;
      if(this.counterImg === this.images.length) this.counterImg = 0;
    },
    autoPlay(){
      setInterval((this.nextImg), 1000);
    }   
    
  }

});