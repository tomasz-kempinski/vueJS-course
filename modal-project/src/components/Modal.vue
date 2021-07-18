<template>
  <div class="backdrop">
    <div class="modal">
      <h1>Modal title</h1>
      <p>modal content</p>
    </div>
  </div>
</template>

// scoped spowoduje że style zostanie zastosowany tylko do tego componentu
<style>
/* <style scoped> */
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
/* h1{
    color: aqua;
    border: none;
    padding: 0;
} */
/* alternatywą dla 'scoped' jest przypisanie clasy modułu do elementu */
.modal h1 {
  color: aqua;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
</style>