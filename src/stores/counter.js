import { defineStore } from 'pinia';  
  
export const useUserStore = defineStore('userInfo', {  
  state: () => ({  
    userTime: '0',  
    userPaymentUrl:'',
    userIsProgress: true,
    userName: '李四'
  }),  
  actions: {  
    setUserTime(time) {  
      this.userTime = time;
    },  
    setUserPaymentUrl(url) {
      this.userPaymentUrl = url;
    },
    setUserIsProgress(progress){
      this.userIsProgress = progress;
    }
    // ... 其他actions  
  }, 
});