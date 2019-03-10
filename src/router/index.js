import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index.vue'
import Search from '../components/search/search.vue'
import XtmenuList1 from '../components/XT_menuList1/XT_menuList1.vue'
import XtmenuList2 from '../components/XT_menuList2/XT_menuList2.vue'
import Classroomteacher from '../components/Classroom_teacher/Classroom_teacher.vue'
import Homework from '../components/homework/homework.vue'
import Peoplewrite from '../components/People_write/People_write.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/search',
      name: 'search',
      component: Search
    },{
      path: '/xtmenulist1',
      name: 'xtmenulist1',
      component: XtmenuList1
    },{
      path: '/xtmenulist2',
      name: 'xtmenulist2',
      component: XtmenuList2
    },{
      path: '/classroomteacher',
      name: 'classroomteacher',
      component: Classroomteacher
    },{
      path: '/homework',
      name: 'homework',
      component: Homework
    },{
      path: '/peoplewrite',
      name: 'peoplewrite',
      component: Peoplewrite
    }
  ]
})
