<template>
  <kinesis-container event="scroll" duration="1200">
  <section class="section home">
    <div class="kay-illustrator">
      <img src="/src/assets/kay.svg" data-aos="fade-up" data-aos-duration="800" alt="" />
    </div>

    
      <div class="home-obj-1">
        <kinesis-element :strength="-100" axis="y" type="translate">
          <img src="/src/assets/background-plus.svg" alt="" />
        </kinesis-element>
      </div>
    
    
    <div class="home-obj-2">
      <kinesis-element :strength="100" axis="y" type="translate">
        <img src="/src/assets/background-plus.svg" alt="" />
      </kinesis-element>
    </div>

    <div class="section-main about-kay">
      <h2 data-aos="fade-up" data-aos-duration="1000">Hey, I’m Kay —</h2>
      <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">a web designer and graphic designer</p>
      <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">more about me</p>
    </div>
  </section>
  </kinesis-container>
</template>