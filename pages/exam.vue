<template>
  <div>
    <back />
    <contentExam :itemsExam="itemsExam" :type="'exam'" />
  </div>
</template>

<script>
import contentExam from '../components/content/contentExam';
import back from "../components/global/back.vue";

export default {
  name: "exam",
  components: { contentExam, back},
  props: {},
  data() {
    return {
      itemsExam: [
        {
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2015,
          cicle: "I",
          assessment: 4
        },
        {
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2015,
          cicle: "II",
          assessment: 4.2
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2015,
          cicle: "III",
          assessment: 4.8
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          cicle: "I",
          assessment: 4
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          cicle: "II",
          assessment: 4.5
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          cicle: "III",
          assessment: 5
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2017,
          cicle: "I",
          assessment: 4
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2017,
          cicle: "II",
          assessment: 2
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2017,
          cicle: "III",
          assessment: 4
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2018,
          cicle: "I",
          assessment: 4
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2018,
          cicle: "II",
          assessment: 5
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2018,
          cicle: "III",
          assessment: 4.4
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2019,
          cicle: "I",
          assessment: 3
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2019,
          cicle: "II",
          assessment: 5
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2019,
          cicle: "II",
          assessment: 3
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2020,
          cicle: "I",
          assessment: 4
        },
      ],
    };
  },
};
</script>
