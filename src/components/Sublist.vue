<template>
  <div class="big-picture">
      <expresscomp class="express" :one="Transfer"/>
      <!-- -->
    <div class="main-container">
        <h3 class="sublist-title">BSCpE Subjects and its equivalent units per year and semester</h3>
        <div class="container" v-for="(weight, index) in One" :key="weight.id">
                <div class="content">
                    <li v-for="subs in weight.subjects" :key="subs.sub" class="listings"><span class="subjectsis">{{subs.sub}}</span> <span class="units">{{subs.units}}</span></li>
                </div>
            <div class="list-header">
                <h3 class="list-header-title">
                {{weight.year}} YEAR {{weight.sem}} SEMESTER
                </h3>
            </div>
            <button @click="toTransfer(index)" class="transfer-button">Import</button>
        </div>
    </div>
    </div>
</template>

<script>
import expresscomp from '@/components/expresscomp'

export default {
    name: 'Sublist',
    components: {
        expresscomp
    },
    data () {
        return {
            Transfer: 'Please import year and Subject',
            One: [
                {
                id: 1,
                year: '1ST',
                sem: '1ST',
                subjects: [
                        {sub:'Differential Calculus', units: 3, grades: ''},  
                        {sub:'Programming Logics and Design', units: 2, grades: ''},
                        {sub:'Math in the Modern World', units: 3, grades: ''},
                        {sub:'Chemistry for Engineers', units: 4, grades: ''},  
                        {sub:'Computer Eng\'g as a Discipline', units: 1, grades: ''},
                        {sub:'Science Technology and Society', units: 3, grades: ''},
                        {sub:'Understanding the Self', units: 3, grades: ''},  
                        {sub:'Physical Education 1', units: 2, grades: ''},
                ]
                },
                {
                id: 2,
                year: '1ST',
                sem: '2ND',
                subjects: [
                        {sub:'Object Oriented Programming', units: 2, grades: ''},  
                        {sub:'Physics for Engineers', units: 4, grades: ''},
                        {sub:'Integral Calculus', units: 3, grades: ''},
                        {sub:'Filipino 1', units: 3, grades: ''},  
                        {sub:'Discrete Mathematics', units: 3, grades: ''},
                        {sub:'Engineering Data Analysis', units: 3, grades: ''},
                        {sub:'Physical Education 2', units: 2, grades: ''},  
                ]
                },
                {
                id: 3,
                year: '2ND',
                sem: '1ST',
                subjects: [
                        {sub:'Differential Equations', units: 3, grades: ''},  
                        {sub:'Arts Appreciation', units: 3, grades: ''},
                        {sub:'Filipino 2', units: 3, grades: ''},
                        {sub:'Data Structures and Algorithms', units: 2, grades: ''},  
                        {sub:'Engineering Economics', units: 3, grades: ''},
                        {sub:'Fundamentals of Electrical Circuit', units: 4, grades: ''},
                        {sub:'Physical Education 3', units: 2, grades: ''},  
                        {sub:'Computer Aided Drafting', units: 1, grades: ''},
                        {sub:'Readings in the Philippine History', units: 3, grades: ''}
                ]
                },
                {
                id: 4,
                year: '2ND',
                sem: '2ND',
                subjects: [
                        {sub:'Fundamentals of Electronics Circuit', units: 4, grades: ''},  
                        {sub:'Ethics', units: 3, grades: ''},
                        {sub:'The Contemporary World', units: 3, grades: ''},
                        {sub:'Life and Works of Rizal', units: 3, grades: ''},  
                        {sub:'Software Design', units: 4, grades: ''},
                        {sub:'Numerical Methods', units: 3, grades: ''},
                        {sub:'Physical Education 4', units: 2,grades: ''},  
                        {sub:'Purposive Communication', units: 3, grades: ''}
                ]
                }
            ]
    }
},
        methods: {
            toTransfer: function (index) {
                return this.Transfer = this.One[index], window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
}

</script>

<style>
    .big-picture {
        margin-top: 100px;
        background-color: #FAFAFA;
    }


    .list-header-title {
        margin-top: 8px;
    }

    .main-container {
        width: 40%;

        display: flex;
        flex-wrap: wrap;
        float: right;
    }

    .transfer-button {
        position: absolute;
        height: 30px;
        width: 100px;
        border-radius: 5px;
        background-color: #07689F;
        color: white;
        cursor: pointer;
        border: none;
        bottom: 5%;
        left: 37%;
        box-shadow: 0px 1px 2px #BAC1C5;
    }

    .content {
        margin-top: 13%;
        padding-top: 2%;
        padding-bottom: 14%;
        padding-left: 5%;
        padding-right: 5%;
    }

    .all {
        display: flex;
        flex-wrap: wrap;
    }

    .list-header {
        position: absolute;
        width: 400px;
        background-color: #07689F;
        height: 40px;
        color: white;
        top: 0;
    }


    .sublist-title {
        text-align: center;
        margin: 1.5% auto;
        padding: 0 5px;
        color:#07689F;
        font-family: Arial, Helvetica, sans-serif;
    }

    .separator {
        margin-left: 40px;
    }

    .list-subs{
        list-style: none;
        margin-top: 7%;

    }

    .container {
        position: relative;
        margin-top: 1%;
        margin-left: 2.5%;
        width: 400px;
        box-shadow: 0px 1px 2px #BAC1C5;
        text-align: center;
        margin: 2% auto;
    }

    .listings {
        width: 350px;
        height: 25px;
        margin-left: 25px;
        margin-bottom: 10px;
        list-style: none;
    }

    .units {
        width: 50px;
        text-align: center;
        margin-left: 85%;
        left: -2%;
        font-weight: bold;
        color: #FF7E67;
    }

    .subjectsis {
        left: 10%;
        color: #07689F;
    }

    .subjectsis, .units {
        position: absolute;
        padding-top: 5px;
    }


    @media screen and (max-width: 425px) {
        .container {
            width: 330px;
        }

        .list-header {
            width: 330px;
        }

        .listings {
            border-bottom: none;
        }

        .container {
            margin: 10px auto;
        }

        .listings {
            margin-left: 5px;
        }

        .subjectsis {
            left: 5%;
        }
    }

    @media screen and (max-width: 1113px) {
        .main-container {
            position: static;
            width: 100%;
            background-color: white;
        }

        .container {
            margin-top: 5%;
        }

        .sublist-title {
            height: 20px;
            width: 100%;
    }
    }
</style>