import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify,{
    theme:{
        primary:'#ee44aa',
        secondary:'#424242',
        accept: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    customProperties: true,
    iconfont: 'md',
});

export default new Vuetify({
});
