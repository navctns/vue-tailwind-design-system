<template>
    <div class="card-item">
      <img src="./assets/icn-resize-icn-md.svg" alt="Icon" class="icon" />
      <h2 class="number">2680 +</h2>
      <h6 class="description">Put The Clients First</h6>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardItem',
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
  
  .card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 40px;
    background-color: #ffffff;
    width: 150px;
  }
  
  .icon {
    width: 48px;
    height: 39.53px;
    margin-bottom: 10px;
  }
  
  .number {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: #252b42;
    line-height: 57px;
    letter-spacing: 0.2px;
  }
  
  .description {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #737373;
    line-height: 24px;
    letter-spacing: 0.2px;
  }
  </style>
  