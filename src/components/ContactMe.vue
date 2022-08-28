<template>
  <kinesis-container event="scroll" duration="1200">
  <section class="section talk2me">
        <div class="talk2me-obj-1"></div>
    
      
        <div class="talk2me-obj-2">
          <kinesis-element :strength="300" axis="y" type="translate">
            <div class="bg"></div>
          </kinesis-element>
        </div>

        <div class="talk2me-obj-3">
          <kinesis-element :strength="-300" axis="y" type="translate">
            <div class="bg"></div>
          </kinesis-element>
        </div>
      

      <div class="section-main talk2me-content">
        <span>HEY</span>
        <h2 data-aos-anchor=".talk2me-content" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000">Talk to me</h2>
        <p data-aos-anchor=".talk2me-content" data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000">if you have some ideas for</p><br>
        <p data-aos-anchor=".talk2me-content" data-aos-delay="400" data-aos="fade-up" data-aos-duration="1000"><span>ANY</span> collaborations</p>
        <div class="arrow-down"></div>

        <div class="bottom-links" data-aos-anchor=".talk2me-content" data-aos-delay="600" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://www.youtube.com/channel/UCYkOKzj4p5Ea9cmyvgbqUow" target="_blank">Youtube</a>
          <a href="https://www.instagram.com/kayxiedesigns/" target="_blank">Instagram</a>
        </div>
      </div>
  </section>
  </kinesis-container>
</template>