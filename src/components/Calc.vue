<template>
    <div class="main-box">
        <div class="up-box">
            <div class='main-calc-box'>
                <div class="calc-box">
                    <p class="grades-text">Grades</p>
                    <input v-model="newGrade" placeholder="Input Grades" type="number" class="grade-input">
                    <p class="units-text">Equivalent Units</p>
                    <input v-model="newUnit" placeholder="Input Units" type="number" class="unit-input" @keyup.enter="addValues(); calculateGWA()">
                    <button class="add-button" v-on:click="addValues(); calculateGWA()" v-bind:disabled="isDisableded" v-bind:class="{disabled: isDisableded}">ADD</button>
                    <p class="error1" :style="{display : showError}">Grades must be higher than or equal to 1.0 or less than 5.1</p>
                    <p class="error2" :style="{display : showError3}">Units must be higher than or equal to 1</p>
                </div>
            </div>
                <h2 class="gwa-text">GWA: <span class="gwa-final" :class="{colorify:changeColor}">{{gwa}}</span></h2>

                <div class="grades-list" v-bind:style="{height: computeHeight}">
                    <p class="grades-text2">Grades</p>
                    <p class="units-text2">Units</p>

                    <ul class="list-grades">
                        <li class="li-grades" v-for="(dato, ind) in datos" v-bind:key="dato.id">{{dato.grade}}<span class="li-white-space">{{dato.unit}}</span>
                        <button class="edit" v-on:click="editValues(ind);calculateGWA()"></button><button class="delete" v-on:click="removeValues(ind); calculateGWA()"></button></li>
                    </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calc',
    data() {
        return {
        gwa: 'your GWA is...',
        error: 'block',
        heighty: 50,
        datos: [],
        newGrade: null,
        newUnit: null,
        newId: 1
    }
    }, 
    computed: { 
        computeHeight: function() {
            let heightz = this.heighty + (this.datos.length)*40
            return heightz + 'px'
        },
        isDisableded: function() {
            if (this.newGrade < 1 || this.newGrade > 5 || this.newUnit < 1) {
                return true
            } else {
                return false
            }
        },
        changeColor: function() {
            if (this.datos.length >= 1) {
                return true
            } else {
                return false
            }
        },
        showError: function() {
            if (this.newGrade < 1 || this.newGrade > 5 ) {
            return this.error
        } else {
            return 'none'
        }
        },
        showError3: function() {
            if (this.newUnit < 1) {
            return this.error
        } else {
            return 'none'
        }
        }
    },
    methods: {
        addValues: function() {
            return this.datos.unshift ({id: this.newId++, grade: parseFloat(this.newGrade), unit: parseFloat(this.newUnit), mult: this.newGrade * this.newUnit}),
            this.newUnit = '', this.newGrade = '',

            document.getElementsByClassName('grade-input')[0].focus()
        },
        removeValues: function(ind) {
            this.datos.splice(ind,1)
        },
        editValues: function(ind) {
            return this.newGrade = this.datos[ind].grade, this.newUnit = this.datos[ind].unit,
            this.datos.splice(ind,1)
        },
        calculateGWA: function() {

            let roff = function (rnum, rlength) { 
            let newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
            return newnumber;
            }
            
            let ttl = 0
            let ttlUnts = 0

              for (let i=0; i<this.datos.length; i++) {
                ttl += this.datos[i].mult
                ttlUnts += this.datos[i].unit
              }

                if (this.datos.length === 0) {
                    return this.gwa = "Please input grades and units"
                } else {
                return this.gwa = roff(ttl/ttlUnts, 3)
                }
        },
    }
}
    
</script>

<style>

    * {
        outline: none;
        
    }


    .main-calc-box {
        height: 240px;
        width: 100%;
        align-content: center;

    }

    .calc-box {
        position: relative;
        height: 200px;
        width: 600px;
        text-align: center;
        top: 20%;
        margin-right: auto;
        margin-left: auto;
        background-color: white;
        box-shadow: 0px 1px 2px #BAC1C5;
        border-top: solid 8px #07689F;

    }

    .grade-input {
        position: absolute;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #07689F;
        top: 30%;
        left: 70px;
        width: 205px;
        padding-left: 10px;
        background-color: white;
    }

    .unit-input {
        position: absolute;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #07689F;
        top: 30%;
        right: 70px;
        width: 205px;
        padding-left: 10px;
        background-color: white;
    }

    .grades-text {
        position: absolute;
        top: 20%;
        font-size: 0.9rem;
        left: 70px;
        color: #44484A;
    }

    .units-text {
        position: absolute;
        top: 20%;
        font-size: 0.9rem;
        left: 315px;
        color: #44484A;
    }

    .add-button {
        position: absolute;
        top: 60%;
        align-items: center;
        height: 30px;
        width: 100px;
        left: 250px;
        border-radius: 5px;
        border: 2px solid #07689F;
        background-color: #07689F;
        color: white;
        cursor: pointer;
    }

    .gwa-text {
        text-align: center;
        margin-top: 40px;
    }

    .gwa-final {
        color: gray;
    }

    .grades-list {
        position: relative;
        width: 600px;
        text-align: center;
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0px 1px 2px #BAC1C5;
        background-color: white;
        border-top: solid 8px #07689F;
    }

    .grades-text2, .units-text2 {
        top: 5px;
        position: absolute;
        font-size: .9rem;
        color: #44484A;
    }

    .grades-text2 {
        left: 170px;
    }

    .units-text2 {
        left: 354px;
    }

    .list-grades {
        position: absolute;
        list-style: none;
        text-decoration: none;
        left: 185px;
        top: 40px;
        font-size: 1.2rem ;
    }

    .list-grades li {
        height: 40px;
        position: relative;
    }

    .li-white-space {
        margin-left: 150px ;
    }

    .edit {
        position: absolute;
        background-image: url(edit.png);
        height: 30px;
        width: 30px;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: center;
        background-color: #A2D5F2 ;
        border: none;
        border-radius: 50% ;
        margin-left: 30px;
        top:-9%;
    }

    .edit:hover {
        background-color: #07689F;
        cursor: pointer;
    }

    .delete {
        position: absolute;
        background-image: url(whitecross.png);
        height: 30px;
        width: 30px;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: center;
        background-color:#F37777 ;
        border: none;
        border-radius: 50% ;
        margin-left: 70px;
        top:-9%;
    }

    .delete:hover {
        background-color: #FE0909;
        cursor: pointer;
    }


    .disabled {
        background-color: #BAC1C5;
        border: none;
    }

    .colorify {
        color: #07689F
    }

    .error1 {
        position: absolute; 
        display: none;
        bottom: 94px;
        left: 74px;
        font-size: .5rem;
        color: green;
    }


    .error2 {
        display: none;
        position: absolute; 
        bottom: 94px;
        left: 320px;
        font-size: .5rem;
        color: green;
    }

    .component-sublist {
        margin-top: 70px;
    }

    .up-box {
        margin-top: 60px;
        height: 100vh;
        top: 10%;
    }

    @media screen and (max-width: 657px){
        .calc-box {
            width: 500px;
        }

        .grade-input, .unit-input {
            width: 150px;
        }

        .grades-list {
            width: 500px;
        }

        .add-button {
            left: 200px;
        }

        .error2 {
            left: 300px;
        }

    }

    @media screen and (max-width: 541px){
        .calc-box {
            width: 400px;
        }

        .grade-input, .unit-input {
            width: 100px;
        }

        .grades-list {
            width: 400px;
        }

        .list-grades {
            left: 20%;
        }

        .units-text {
            left: 220px;
        }

        .grades-text2 {
            left: 18%;
        }

        .units-text2 {
            left: 65%;
        }

        .add-button {
            left: 150px;
            top: 150px;
        }

        .error1 {
            left: 100px;
            top: 105px;
        }

        .error2 {
            top: 120px;
            left: 130px;
        }
    }

    @media screen and (max-width: 425px) {
        .calc-box {
            width: 300px;
        }

        .grade-input {
            left: 10%;
        }

        .unit-input {
            right: 8%;
        }

        .grades-text {
            left: 10%;
        }

        .units-text {
            left: 55%;
        }

        .error1 {
            left: 18%;
        }

        .error2 {
            left: 30%;
        }

        .grades-list {
            width: 300px;
        }

        .li-white-space {
            margin-left: 80px;
        }

         .add-button {
            left: 100px;
            top: 150px;
        }
    }

    
</style>