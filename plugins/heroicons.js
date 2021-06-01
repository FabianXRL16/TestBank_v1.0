import Vue from "vue";
import VueHeroicons from "@d2pro/vue-heroicons/components/icon";
import * as IconsOutlined from "@d2pro/vue-heroicons/icons/ho";
import * as IconsSolid from "@d2pro/vue-heroicons/icons/hs";

const ho = Object.values({ ...IconsOutlined });
const hs = Object.values({ ...IconsSolid });

VueHeroicons.add(ho);
VueHeroicons.add(hs);

Vue.component("h-icon", VueHeroicons);