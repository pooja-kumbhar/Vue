<script>
export default{
data()
{
  return{
    showModel:false,
    newNote:" ",
    notes:[],
    errorMessage:"",
  }
},
methods:{

  getRandomColor(){
  return "hsl("+Math.random()*360+", 100%, 75%)";
  },

   addNote(){
    if(this.newNote.length<=10){
    return  this.errorMessage="The note al least have 10 characters";
    }
    this.notes.push({
      id:Math.floor(Math.random()*1000000),
      text:this.newNote,
      date:new Date(),
      backgroundColor:this.getRandomColor()
    });
    this.showModel=false;
    this.newNote="";
   },
}
}
</script>

<template>
  <main>
    <div v-if ="showModel" class="overlay">
    <div class="modal">
        <textarea  v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button class="modal-button" @click="addNote">Add Note</button>
        <button class="modal-button" @click="showModel=false">Close Note</button>
      </div>
    </div>
    <div class="container">
      <header>
      <h1>Note</h1>
      <button @click="showModel=true">+</button>
    </header>
    <div class="cards-container">
      <div v-for = "note in notes" :key="note.id" class="card" :style="{backgroundColor:note.backgroundColor}">
        <p class="main-text">{{ note.text }}</p>
        <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
      </div>
    </div>
    </div>
  
  </main>
</template>

<style scoped>

main{
  height: 100vh;
  width: 100vw;
}

.container{
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

h1{
font-weight: bold;
margin-bottom: 25px;
font-size: 75px;
}

button{
border:none;
padding: 10px;
width: 50px;
height: 50px;
cursor: pointer;
background-color: rgb(21,20,20);
color: white;
border-radius: 100%;
font-size: 30px;
}

.card{
  width: 225px;
  height: 225px;
  background-color: rgb(237,182,44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date
{
  font-size: 12.5px;
  font-weight: bold;
}

.cards-container
{
  display: flex;
  flex-wrap: wrap;
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-items: center;

}

.modal{
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
    margin-left: 25%;
}

.modal-button{
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: violet;
  color:aliceblue;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  
}

.error-message{
  color: red;
}
</style>