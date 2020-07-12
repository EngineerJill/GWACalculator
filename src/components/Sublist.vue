<template>
  <div class="big-picture">
      <h3 class="sublist-title">Subjects and its equivalent units per year and semester</h3>
    <div class="main-container">
        <div class="container" v-for="weight in One" :key="weight.id">
                <div class="content">
                    <li v-for="subs in weight.subjects" :key="subs.sub" class="listings"><span class="subjects">{{subs.sub}}</span> <span class="units">{{subs.units}}</span></li>
                </div>
            <div class="list-header">
                <h3 class="list-header-title">
                {{weight.year}} Year {{weight.sem}} Semester
                </h3>
            </div>
        </div>
    </div>
      
    </div>
</template>

<script>

export default {
    name: 'Sublist',
    data () {
        return {
            One: [
                {
                id: 1,
                year: '1st',
                sem: '1st',
                subjects: [
                        {sub:'Differential Calculus', units: 3},  
                        {sub:'Programming Logics and Design', units: 2},
                        {sub:'Math in the Modern World', units: 3},
                        {sub:'Chemistry for Engineers', units: 4},  
                        {sub:'Computer Eng\'g as a Discipline', units: 1},
                        {sub:'Science Technology and Society', units: 3},
                        {sub:'Understanding the Self', units: 3},  
                        {sub:'Physical Education 1', units: 2},
                        {sub:'NSTP 1 (not included in GWA)', units: 2}
                ]
                },
                {
                id: 2,
                year: '1st',
                sem: '2nd',
                subjects: [
                        {sub:'Object Oriented Programming', units: 3},  
                        {sub:'Physics for Engineers', units: 4},
                        {sub:'Integral Calculus', units: 3},
                        {sub:'Filipino 1', units: 3},  
                        {sub:'Discrete Mathematics', units: 3},
                        {sub:'Engineering Data Analysis', units: 3},
                        {sub:'Physical Education 2', units: 3},  
                        {sub:'NSTP2 (not included i GWA)', units: 4}
                ]
                },
                {
                id: 3,
                year: '2nd',
                sem: '1st',
                subjects: [
                        {sub:'Differential Equations', units: 3},  
                        {sub:'Arts Appreciation', units: 3},
                        {sub:'Filipino 2', units: 3},
                        {sub:'Data Structures and Algorithms', units: 2},  
                        {sub:'Engineering Economics', units: 3},
                        {sub:'Fundamentals of Electrical Circuit', units: 3},
                        {sub:'Physical Education 3', units: 2},  
                        {sub:'Computer Aided Drafting', units: 1}
                ]
                },
                {
                id: 4,
                year: '2nd',
                sem: '1st',
                subjects: [
                        {sub:'Fundamentals of Electronics Circuit', units: 4},  
                        {sub:'Ethics', units: 3},
                        {sub:'The Contemporary World', units: 3},
                        {sub:'Life and Works of Rizal', units: 4},  
                        {sub:'Software Design', units: 4},
                        {sub:'Numerical Methods', units: 3},
                        {sub:'Physical Education 4', units: 2},  
                        {sub:'Purposive Communication', units: 3}
                ]
                }
            ]
    }
}
}

</script>

<style>
    .list-header-title {
        margin-top: 8px;
    }

    .main-container {
        width: 100%;
        height: 800px;
        display: flex;
        flex-wrap: wrap;
    }

    .content {
        margin-top: 13%;
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
        margin-top: 1.5%;
        text-align: center;
        margin-left: 3%;
        margin-right: 3%;
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
        height: 400px;
        box-shadow: 0px 1px 2px #BAC1C5;
        text-align: center;
        margin: 2% auto;
    }

    .listings {
        width: 350px;
        height: 25px;
        border-bottom: 1px solid skyblue;
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

    .subjects {
        font-weight: bold;
        left: 10%;
        color: #07689F;
    }

    .subjects, .units {
        position: absolute;
        padding-top: 5px;
    }


    @media (max-width: 425px) {
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

        .subjects {
            left: 5%;
        }
    }
</style>