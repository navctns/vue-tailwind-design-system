!<template>
  <table class="table-auto table border-collapse border border-slate-400"
        :class="{'table': color === 'light','table-dark': color === 'dark'}">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
</template>

<script>
// import '../../assets/style/minimal-table.css'
export default {
  props:{
    color:{ type: String, default:'light'}
  }

}
</script>

<style  lang="scss">


.table {
  border-collapse: collapse;
  border: 2px solid rgb(200,200,200);
  letter-spacing: 1px;
  font-size: 0.8rem;

  td, th {
  // border: 2px solid rgb(190,190,190);
  border: 2px solid #EDEDED;
  padding: 10px 20px;
}

th {
  // background-color: rgb(235,235,235);
  background-color:#FFFFFF;
}

td {
  // text-align: center;
}

tr:nth-child(even) td {
  // background-color: rgb(250,250,250);
  background-color:#FFFFFF;
}

tr:nth-child(odd) td {
  // background-color: rgb(245,245,245);
  background-color: #F6F6F6;
}

caption {
  padding: 10px;
}
}

.table-dark {
  border-collapse: collapse;
  border: 2px solid rgb(200,200,200);
  letter-spacing: 1px;
  font-size: 0.8rem;

  td, th {
  // border: 2px solid rgb(190,190,190);
  border: 2px solid #EDEDED;
  padding: 10px 20px;
  color:white;
}

th {
  // background-color: rgb(235,235,235);
  background-color:#252B42;
}

td {
  // text-align: center;
}

tr:nth-child(even) td {
  // background-color: rgb(250,250,250);
  background-color:#202537;
}

tr:nth-child(odd) td {
  // background-color: rgb(245,245,245);
  background-color: #181C2D;
}

caption {
  padding: 10px;
}
}



</style>