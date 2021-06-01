<template>
  <div>
    <back />
    <contentExam :itemsExam="itemsExam" :type="'results'" />
  </div>
</template>

<script>
import contentExam from '../components/content/contentExam';
import back from "../components/global/back.vue";
import { mapGetters } from 'vuex'
export default {
  name: "results",
  components: { contentExam, back},
  props: {},
  data() {
    return {
      itemsExam: [
        {
          title: "5to Secundaria",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          cicle: "I",
          assessment: 4.4
        },{
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 1,
          cicle: "I",
          assessment: 4.8
        },{
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 2,
          cicle: "I",
          assessment: 4.1
        },{
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 3,
          cicle: "I",
          assessment: 3.2
        },{
          title: "Exonerados",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 2,
          cicle: "I",
          assessment: 4.5
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 1,
          cicle: "II",
          assessment: 4.1
        },{
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 1,
          cicle: "II",
          assessment: 3.2
        },
        {
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 2,
          cicle: "I",
          assessment: 4.8
        },
        {
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 3,
          cicle: "I",
          assessment: 4.8
        },{
          title: "Ordinario",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 3,
          cicle: "II",
          assessment: 4.5
        },{
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 1,
          cicle: "III",
          assessment: 5
        },{
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 2,
          cicle: "I",
          assessment: 4.8
        },{
          title: "Centro PRE",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolor.",
          years: 2016,
          numExam: 3,
          cicle: "I",
          assessment: 4.8
        }
      ],
    };
  },
  computed: {
    ...mapGetters(['result'])
  }
};
</script>