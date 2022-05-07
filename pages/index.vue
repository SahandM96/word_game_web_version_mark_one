<template>
  <div class="md-layout ">
    <md-card class="md-layout-item">
      <md-card-header class="text-center">
        <h1>{{randomWord}}</h1>
      </md-card-header>
      <md-card-content>

          <md-button @click="getNewWord">

          کلمه بعدی
          </md-button>
        <br>

        <md-button  @click="hideWord">

          عدم نمایش
          </md-button>

        </md-card-content>
    </md-card>





  </div>
</template>

<script>
import data from '@/assets/wordList.json'
export default {
  name: 'App',
  data(){
    return{
      data:data,
      randomWord:'',
      selectedWord:'',
      showWordV:true
    }
  },
  created() {
    this.getRandomWord()
    console.log(this.randomWord)
  },
  methods:{
      getRandomWord(){
        this.randomWord = this.data[Math.floor(Math.random()*this.data.length)]
      },
    getNewWord() {
      this.randomWord = this.data[Math.floor(Math.random()*this.data.length)]
      console.log(this.selectedWord);
    },
    hideWord() {
        if (this.showWordV) {
          this.selectedWord= this.randomWord
          this.randomWord = '**********'

          this.showWordV = false
        } else {
          this.randomWord = this.selectedWord
          this.selectedWord = ''

          this.showWordV = true
        }

    },
  },
}
</script>

<style lang="sass" scoped>
.md-button-content
  a
    width: 100%
</style>
