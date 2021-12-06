 var Loader = function() {}
 Loader.prototype = {
     require: function(scripts, callback) {
         this.loadCount = 0;
         this.totalRequired = scripts.length;
         this.callback = callback;

         for (var i = 0; i < scripts.length; i++) {
             this.writeScript(scripts[i]);
         }
     },
     loaded: function(evt) {
         this.loadCount++;

         if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
     },
     writeScript: function(src) {
         var self = this;
         var s = document.createElement('script');
         s.type = "text/javascript";
         s.defer = true;
         s.src = src;
         s.addEventListener('load', function(e) { self.loaded(e); }, false);
         var head = document.getElementsByTagName('head')[0];
         head.appendChild(s);
     }
 }
 if (document.querySelector('.hero-slider')) {
     var l = new Loader();
     l.require([
             "../js/slider.js"

         ],
         function() {


             class SiemaWithDots extends Siema {

                 addDots() {
                     // create a contnier for all dots
                     // add a class 'dots' for styling reason
                     this.dots = document.createElement('div');
                     this.dots.classList.add('dots');

                     // loop through slides to create a number of dots
                     for (let i = 0; i < this.innerElements.length; i++) {
                         // create a dot
                         const dot = document.createElement('button');

                         // add a class to dot
                         dot.classList.add('dots__item');

                         // add an event handler to each of them
                         dot.addEventListener('click', () => {
                             this.goTo(i);
                         })

                         // append dot to a container for all of them
                         this.dots.appendChild(dot);
                     }

                     // add the container full of dots after selector
                     this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
                 }

                 updateDots() {
                     // loop through all dots
                     for (let i = 0; i < this.dots.querySelectorAll('button').length; i++) {
                         // if current dot matches currentSlide prop, add a class to it, remove otherwise
                         const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
                         this.dots.querySelectorAll('button')[i].classList[addOrRemove]('dots__item--active');
                     }

                 }
                 curentShowSlide() {
                     return this.currentSlide;

                 }
             }



             var work = new SiemaWithDots({
                 selector: '.hero-slider',
                 duration: 400,
                 easing: 'ease',
                 startIndex: 0,
                 draggable: true,
                 multipleDrag: false,
                 threshold: 90,
                 loop: true,
                 rtl: false,
                 perPage: 1,
                 onInit: function() {
                     this.addDots();
                     this.updateDots();
                 },
                 onChange: function() {
                     this.updateDots();
                 }

             });

             document.querySelector('.sline-next').addEventListener('click', function(e) {
                 work.next();
             });

             document.querySelector('.sline-prev').addEventListener('click', function(e) {
                 work.prev();
             });
         });
 }
 if (document.querySelector('.music-player')) {
     var m = new Loader();
     m.require([
             "../js/green-audio-player.js"
         ],
         function() {
             GreenAudioPlayer.init({
                 selector: '.music-player', // inits Green Audio Player on each audio container that has class "player"
                 stopOthersOnPlay: true
             });
         });
 }
 document.querySelector('.like-button').addEventListener('click', function() {
     if (!this.classList.contains('like-add')) {
         this.classList.add('like-add');
         let newCount = document.querySelector('.like-count').textContent;
         let curentCount = parseInt(newCount) + 1;
         console.log()
         console.log(curentCount);
         document.querySelector('.like-count').textContent = curentCount;
     }
 })