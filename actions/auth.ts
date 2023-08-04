import {Axios, AxiosWithAuth} from '~~/utils/Axios';
//register
export const SignUp = (data: object, store: any) => { 
    Axios('post','/register',data)
    .then(res=>{  
        // Cookies.remove('click_id');
        // Cookies.remove('promo');
        // store.commit('handleOnRegister', false);
        // store.commit('handleVerifyEmail', 2);
        // store.commit('handleNotification',{type:'Success',message: 'Register Successed!'});
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}