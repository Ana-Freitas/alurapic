import Vue from 'vue';

Vue.directive('meu-transform', {
    //el -> referencia do DOM , binding-> pegar parametros
    bind(el, binding, vnode){
        let current = 0;
        el.addEventListener('dblclick', function(){
            
            let increment = 90;
            let animate = false;
            increment = binding.value.increment || increment;
            animate = binding.value.animate || animate;
            current+=increment;

            if(animate) el.style.transition = 'transform 0.5s';
            el.style.transform = `rotate(${current}deg)`;
        })
    }
}); 