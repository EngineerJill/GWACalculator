<template>
  <div class="express-main">
      <div class="express-container">
          <h3 class="express-title" :style="{display: displays}">{{one.year}} YEAR {{one.sem}} SEMESTER</h3>
          <p class="subs-font" :style="{display: displays}">SUBJECT <span class="grades-put">INPUT GRADES</span></p>
          <ul v-for="una in one.subjects" :key="una.sub" class="li-ul">
              <li class="li-grade"><span class="subjectsus">{{una.sub}}</span><span class="input-grades"> <input type="number" v-model="una.grades" class="main-input"> </span></li>
          </ul>
          <h3 class="computed-gwas" :style="{display: displays}">GWA: <span class="gwa-color">{{total}}</span></h3>
          <button @click="computedGWA" class="compute-btn" :style="{display: displays}">Compute</button>
          <div class="import-text" :style="{display: displaysus}">
              Please import a <br> semester and a year
              <p class="scroll">Scroll bellow</p>
          </div>
      </div>
  </div>
</template>

<script>


export default {
    props: ['one'],
    data() {
        return {
            total: 'your GWA is...'
        }
    },
    computed: {
        displays: function() {
            if (this.one === 'Please import year and Subject') {
                return "none"
            } else {
                return "block"
            }    
        },
        displaysus: function() {
            if (this.one === 'Please import year and Subject') {
                return "block"
            } else {
                return "none"
            }    
        }
    },
    methods: {
            computedGWA: function() {

            /* Trying to use ES6 Reduce for a more elegant code**/

               let gradesTimesUnits = 0

                for (let i in this.one.subjects) {
                    //This if loop is to make all no entries 0 so that the users can see their tentative GWA
                    if (this.one.subjects[i].grades === '') {
                        this.one.subjects[i].grades = "0"
                        this.one.subjects[i].units = "0"
                    }
                    gradesTimesUnits += (parseFloat(this.one.subjects[i].grades) * parseFloat(this.one.subjects[i].units))
                }

                const totalUnits = Object.values(this.one.subjects).reduce((a, {units}) => a + parseFloat(units) ,0)

                return this.total = (gradesTimesUnits/totalUnits).toFixed(3)

            }
        }
}
</script>

<style>

    .scroll {
        color: #FF7E67;
        font-size: 1rem;
    }

    .import-text {
        font-size: 2rem;
        font-weight: 100;
        text-align: center;
        margin-top: 100px;
        color:#07689F;
    }


    .express-title {
        text-align: center;
        margin-bottom: 17px;
        margin-top: 10px;
        font-size: 1.2rem;
        color:#07689F;
    }

    .gwa-color {
        color:#07689F;
    }

    .subs-font {
        margin-bottom: 9px;
        font-weight: 100;
        margin-left: 70px;
        color:#07689F;
    }

    .grades-put {
        margin-left: 217px;
    }

    .computed-gwas {
        text-align: center;
        font-size: 1.2rem;
    }

    .compute-btn {
        position: absolute;
        height: 35px;
        width: 110px;
        border-radius: 5px;
        background-color: #07689F;
        color: white;
        cursor: pointer;
        border: none;
        bottom: 2.5%;
        left: 42%;
        box-shadow: 0px 1px 2px #BAC1C5;
    }

    .main-input {
        height: 17px;
        width: 80px;
        border:1px solid #07689F;
        border-radius: 3px;
        padding-left: 3px;
    }

    .express-main {
        position: fixed;
        width: 60%;
        height: 80vh;
        background-color: white;
        left: 0;
        top: 10%;
    }

    .express-container {
        position: relative;
        width: 600px;
        height: 600px;
        left: 20%;
        top: 10%;
        box-shadow: 0px 1px 2px #BAC1C5;
        border-top: 8px solid #07689F;
        color: black;
    }

    .li-grade {
        margin-bottom: 10px;
        list-style: none;
        background-color: white;
        padding: 8px 0;
        margin-left: 30px;
        margin-right: 30px;
        border-top: 3px solid #07689F;
        border-bottom: .3px solid #BAC1C5;
        border-left: .3px solid #BAC1C5;
        border-right: .3px solid #BAC1C5;
    }

    .input-grades {
        margin-left: 60%;
        
    }

    .subjectsus {
        position: absolute;
        margin-left: 13px;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 1215px) {
        .express-container {
            left: 10%;
        }
    }

    @media screen and (max-width: 1113px) {
        .express-main {
            position: static;
            width: 100%;
            background-color: white;
            left: 0;
            top: 0;
            height: 650px;
    }
        .express-container {
            left: 20%;
            top: 0;
        }
    }

    @media screen and (max-width: 787px) {
        .express-container {
            position: relative;
            margin-top: 1%;
            margin-left: 2.5%;
            width: 400px;
            height: 600px;
            box-shadow: 0px 1px 2px #BAC1C5;
            text-align: center;
            margin: 2% auto;
            left:0;
            right:0;
            margin-left:auto;
            margin-right:auto;
    }

        .subjectsus {
            position: absolute;
            margin-left: 0;
            font-size: 0.9rem;
            font-weight: 100;
    }
        .main-input {
            margin-left: 10%;
        }

        .grades-put {
            margin-left: 130px;
        }

        .subs-font {
            margin-left: 0;
        }

        .compute-btn {
            left: 35%;
        }
    }

    @media screen and (max-width: 425px) {
        .express-container {
            width: 330px;
        }

        .li-grade {
            margin-left: 15px;
            margin-right: 15px;
        }

        .input-grades {
            margin-left: 200px;
        }

        .main-input {
            width: 50px;
        }

        .sublist-title {
            margin-bottom: 15px;
        }

    }



</style>